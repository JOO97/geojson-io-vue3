<template>
	<!-- 地图容器 -->
	<div ref="mapRef" />
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
//校验geojson
import geojsonRewind from 'geojson-rewind';
import L from '@/core/L';
import { Message } from './el';

interface IDynamicObj {
	[key: string]: any;
}

// 高德地图
const A_MAP = L.tileLayer(
	// wprd01
	'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scl=1&style=8&x={x}&y={y}&z={z}',
	{
		tms: false,
		maxNativeZoom: 18,
		minZoom: 3,
		maxZoom: 20,
		attribution: '高德地图 AutoNavi.com',
		subdomains: '1234',
	}
);

let mode = 'default'; //default-默认 splitting 拆分

const props = defineProps({
	data: {
		type: String,
		default: `{
  "type": "FeatureCollection",
  "features": []
}`,
	},
});
const $emit = defineEmits(['update']);

const mapRef = ref(null);
const map = ref<any>(null);
const mapLayer = ref<any>(null);

const propertyForm = ref({
	//包含字段
	fields: {
		id: '',
		name: '',
		description: '',
	},
	//属性表单
	dialogVisible: false, //弹窗状态
	current: null, //当前的地图元素
});

watch(
	() => props.data,
	() => {
		handleUserGeojson();
	}
);

/**
 * 初始化地图
 */
const init = () => {
	const map = new L.Map(mapRef.value, {
		center: [24.46, 118.1],
		zoom: 13,
		maxZoom: 20,
		attributionControl: false,
		contextmenu: true,
	});

	//当前选择的位置经纬度添加到hash中
	//非electron环境下 使用hash
	if (!(window && (window as typeof window & { process: string }).process)) L.hash(map);

	map.value = map;
	mapLayer.value = L.featureGroup().addTo(map);
	L.control.scale().setPosition('bottomright').addTo(map);

	L.control
		.layers(
			{
				// google: GOOGLE_MAP.addTo(map),
				// 高德: A_MAP.addTo(map)
			},
			{ 显示绘制元素: mapLayer.value },
			{ position: 'bottomleft', collapsed: false }
		)
		.addTo(map);
	A_MAP.addTo(map);
	//数据映射
	handleUserGeojson();
	//添加控制
	map.addControl(
		new L.Control.Draw({
			edit: {
				featureGroup: mapLayer.value,
			},
			draw: {
				polygon: {
					// allowIntersection: false,
					showArea: true,
				},
			},
			split: { featureGroup: mapLayer.value },
		})
	);
	// 地图-事件监听
	map.on('draw:created', created);
	map.on('draw:edited', update).on('draw:deleted', update);
	map.on('draw:drawstart', (options: any) => {
		// 图片控件
		if (options.layerType === 'image') {
			return;
		}
	});
	map.on('popupopen', (e: any) => {
		handlePopupOpen(e);
	});
	map.on('draw:splittingstart', () => {
		mode = 'splitting';
	});
	map.on('draw:splittingfinished', () => {
		mode = 'default';
	});
	//右键点击线元素上的编辑点时触发
	map.on(L.Draw.Event.SPLIT, (payload: any) => {
		splitPolyline(payload);
	});
	map.on(L.Draw.Event.PolylineMarkerRemove, (payload: any) => {
		removeMarkerOfPolyline(payload);
	});
};

/**
 * 绘制元素
 * @param e
 */
function created(e: any) {
	mapLayer.value.addLayer(e.layer);
	update();
}

/**
 * 创建或编辑地图元素后更新对于geojson数据
 */
function update() {
	// NOTE： toGeoJSON() 需要指定精度(大于默认值6)
	map.value && map.value.closePopup();
	let geojson = mapLayer.value.toGeoJSON(L.CONSTANT.precision);
	geojson = geojsonRewind(geojson);
	$emit('update', geojson);
}

/**
 * geojson数据映射到地图上
 * @param geojson
 * @param layer
 */
function geojsonToLayer(geojson: any) {
	mapLayer.value.clearLayers();
	let index = 0;
	L.geoJson(geojson, {
		style: { color: '#000' },
		pointToLayer: function (feature: any, latlng: any) {
			return L.marker(latlng);
		},
	}).eachLayer(add);
	function add(l: any) {
		// 绑定popup
		l.customIndex = index++;
		l.bindPopup(
			L.popup(
				{
					maxWidth: 500,
					maxHeight: 400,
					minWidth: 200,
					autoPanPadding: [5, 45],
					className: 'popup',
				},
				l
			).setContent(popupContent(l.feature.properties))
		);

		//添加到地图上
		l.addTo(mapLayer.value);
	}
}

/**
 * 元素映射为geojson
 * @param layer
 */
function layerToGeoJSON(layer: any) {
	const features: any[] = [];
	layer.eachLayer(collect);
	function collect(l: any) {
		if ('toGeoJSON' in l) features.push(l.toGeoJSON(L.CONSTANT.precision));
	}
	return {
		type: 'FeatureCollection',
		features: features,
	};
}

/**
 * 处理外部传入的geojson 映射为地图标记
 */
function handleUserGeojson() {
	const r = JSON.parse(props.data);
	if (!r) return;
	if (r.features && r.features.length) {
		geojsonToLayer(r);
		if (mode === 'default') {
			map.value && fitView();
		}
	}
}

/**
 * 所有绘制元素展示在可视范围
 */
function fitView() {
	const bounds = mapLayer.value.getBounds();
	if (bounds.isValid()) map.value.fitBounds(bounds, { maxZoom: 18 });
}

/**
 * popup open
 * @param map
 * @param e
 */
function handlePopupOpen(e: any) {
	const saveBtn = document.getElementById('popup-save');
	const cancelBtn = document.getElementById('popup-cancel');
	const addBtn = document.getElementById('popup-add');
	//取消编辑
	cancelBtn &&
		cancelBtn.addEventListener('click', () => {
			map.value.closePopup();
		});
	//保存编辑
	saveBtn &&
		saveBtn.addEventListener('click', () => {
			const items: NodeListOf<Element> = document.querySelectorAll('#popup-content tr');
			const properties: IDynamicObj = {};
			Array.from(items).forEach((item) => {
				const [th, td] = Array.from(item.childNodes);
				const [key] = Array.from(th.childNodes);
				const [value] = Array.from(td.childNodes);
				const keyTyped = key as typeof key & { value: string };
				const valueTyped = value as typeof value & { value: string };
				if (keyTyped && keyTyped.value && valueTyped && valueTyped.value) {
					properties[keyTyped.value] = valueTyped.value;
				}
			});
			e.popup._source.feature.properties = properties;
			update(); //更新
		});

	//新增属性
	addBtn &&
		addBtn.addEventListener('click', () => {
			const pNode = document.querySelectorAll('#popup-content tbody')[0];
			const cNode = document.createElement('tr');
			cNode.className = 'el-row el-row--flex';
			pNode.appendChild(cNode);
			cNode.innerHTML = propertiesRow('', '');
		});
}

/**
 * 根据properties生成dom
 * @param obj
 */
function mapObjectToDom(obj: IDynamicObj) {
	let r = '';
	if (!Object.keys(obj).length)
		obj = {
			id: '',
			name: '',
			description: '',
		};
	for (const key in obj) {
		r += `<tr class="el-row el-row--flex">${propertiesRow(key, obj[key])}</tr>`;
	}
	return r;
}

/**
 * 单行dom
 * @param key
 * @param value
 */
function propertiesRow(key: string, value: string) {
	// NOTE: 不要换行
	return `<th class="el-col el-col-8 el-input el-input--mini"><input class="el-input__inner" type="text" value="${key}"></th><td class="el-col el-col-14 el-input el-input--mini"><input class="el-input__inner" type="text" value="${value}"></td>`;
}

/**
 * popup dom结构
 * @param properties
 */
function popupContent(properties: IDynamicObj) {
	const htmlStr = `
   <div class="pad1 tabs-ui clearfix">
        <div class="title">Properties属性</div>
        <div class="space-bottom1 col12 content">
          <table class="space-bottom0 marker-properties" id="popup-content">
            <tbody>
              ${mapObjectToDom(properties)}
            </tbody>
          </table>
          <button id="popup-add" class="add-row-button add el-button el-button--text">
          +新增属性
          </button>
        </div>
      </div>
      <div class="clearfix col12 pad1 keyline-top">
        <div class="el-row el-row--flex">
          <button id="popup-cancel" class="el-col el-col-12 el-button el-button--info is-plain el-button--small">取消</button>
          <button id="popup-save" class="el-col el-col-12 el-button el-button--primary is-plain el-button--small">保存</button>
        </div>
      </div>
      `;
	return htmlStr;
}

/**
 * 重置地图大小
 */
function invalidateSize() {
	map.value.invalidateSize();
}

/**
 * 拆分polyline
 */
function splitPolyline(e: any) {
	const {
		poly: { feature, customIndex },
		items: [coordinates1, coordinates2],
	} = e;
	let { coordinates } = feature.geometry;
	const coordinatesLength = coordinates.length;
	// coordinates.forEach(([lng, lat], index) => {
	//   console.log('index', index)
	//   if (lat === _latlng.lat && lng === _latlng.lng) {
	//     let pos = index + 1
	//     if (coordinatesLength === 4 && index === 2) {
	//       pos -= 1
	//     }
	//     coordinates1 = coordinates.slice(0, pos)
	//     coordinates2 = coordinates.slice(pos, coordinatesLength)
	//   }
	// })
	if (coordinates1.length < 2 || coordinates2.length < 2)
		return Message.warning('操作失败: 拆分后的每段线数据需要包含至少2个坐标点');
	const poly = JSON.parse(props.data).features[customIndex];
	const polys = [
		{
			...poly,
			geometry: {
				...poly.geometry,
				coordinates: coordinates1.map(({ lat, lng }: { lat: string; lng: string }) => [lng, lat]),
			},
		},
		{
			...poly,
			geometry: {
				...poly.geometry,
				coordinates: coordinates2.map(({ lat, lng }: { lat: string; lng: string }) => [lng, lat]),
			},
		},
	];
	const newData = JSON.parse(props.data);
	newData.features.splice(customIndex, 1, ...polys);
	$emit('update', newData);
}

/**
 * 移除点
 * @param poly
 */
function removeMarkerOfPolyline(poly: any) {
	const {
		poly: { _latlngs, customIndex },
	} = poly;
	const newData = JSON.parse(props.data);
	newData.features[customIndex].geometry.coordinates = _latlngs.map(
		({ lat, lng }: { lat: string; lng: string }) => [lng, lat]
	);
	$emit('update', newData);
}

onMounted(() => init());

onBeforeUnmount(() => {
	map.value.remove();
	map.value = null;
	mapLayer.value = null;
});

defineExpose({
	invalidateSize,
});
</script>

<style lang="scss">
#map {
	background: #eee;
}

.leaflet-top {
	top: 45px;
	z-index: 400;
}

// leaflet map样式
.leaflet-draw-draw-image {
	background-image: none !important;
	position: relative;

	&::after {
		content: 'IMG';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
}

//popup
.popup {
	.title {
		margin-bottom: 8px;
		font-size: 14px;
		font-weight: 600;
	}

	.content {
		background: white;
		overflow: auto;
	}

	.marker-properties {
		display: block;
		border-collapse: collapse;
		font-size: 12px;
		width: 100%;
		overflow: auto;
		border-bottom: 1px solid #ccc;
		max-height: 190px;
		margin-bottom: 5px;
		border-spacing: 0;
		width: 300px;

		th {
			white-space: nowrap;
			border: 1px solid #ccc;
		}

		td {
			border: 1px solid #ccc;
		}

		tr:nth-child(even) {
			th,
			td {
				background-color: #f7f7f7;
			}
		}

		input {
			width: 100%;
			background: transparent;
			border: none;
		}
	}
}
</style>
