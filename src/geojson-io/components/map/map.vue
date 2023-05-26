<template>
	<!-- 地图容器 -->
	<div ref="mapRef" class="mapView" />
</template>

<script lang="ts" setup>
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue';
import { defaultsDeep, cloneDeep, random } from 'lodash-es';
//校验geojson
import geojsonRewind from 'geojson-rewind';
import geojsonhint from 'geojsonhint';
import { useLeaflet } from '../../core/L';
import { Message } from './../el';

import '../../assets/font/iconfont.css';

import { mapProps, defaultOptions } from './map';
import { layer } from '@codemirror/view';

interface IDynamicObj {
	[key: string]: any;
}

const props = defineProps(mapProps);
const $emit = defineEmits(['update']);
const L = useLeaflet(props);

const createUuid = (from: number = 5000000000, to: number = 59999999999) =>
	random(from, to > from ? to : from + 9999999999).toString();

const uuid = createUuid();

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

const mapRef = ref(null);
const map = ref<any>(null);
const mapLayer = ref<any>(null);

const options = computed(() => defaultsDeep(cloneDeep(props.options), defaultOptions));

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
	const mapIns = new L.Map(mapRef.value, options.value.base);
	const mapLayerIns = L.featureGroup().addTo(mapIns);

	map.value = mapIns;
	mapLayer.value = mapLayerIns;

	//当前选择的位置经纬度添加到hash中 非electron环境下 使用hash
	if (!(window && (window as typeof window & { process: string }).process)) L.hash(mapIns);

	L.control.scale().setPosition('bottomright').addTo(mapIns);
	L.control
		.layers(
			{
				// google: GOOGLE_MAP.addTo(mapIns),
				// 高德: A_MAP.addTo(mapIns)
			},
			{ 显示绘制元素: mapLayerIns },
			{ position: 'bottomleft', collapsed: false }
		)
		.addTo(mapIns);
	// 添加底图
	A_MAP.addTo(mapIns);
	//数据映射
	handleUserGeojson();
	//添加控制
	mapIns.addControl(
		new L.Control.Draw({
			edit: {
				featureGroup: mapLayerIns,
			},
			draw: {
				polygon: {
					showArea: true,
				},
				rectangle: { showArea: true },
				image: options.value.draw.image,
			},
			split: { featureGroup: mapLayerIns },
		})
	);
	// 地图-事件监听
	mapIns.on('draw:created', created);
	mapIns.on('draw:edited', update).on('draw:deleted', update);
	mapIns.on('draw:drawstart', (options: any) => {
		// 图片控件
		if (options.layerType === 'image') return;
	});
	mapIns.on('popupopen', (e: any) => popupOpenHandler(e));
	mapIns.on('draw:splittingstart', () => (mode = 'splitting'));
	mapIns.on('draw:splittingfinished', () => (mode = 'default'));
	//右键点击线元素上的编辑点时触发
	mapIns.on(L.Draw.Event.SPLIT, (payload: any) => splitPolyline(payload));
	mapIns.on(L.Draw.Event.PolylineMarkerRemove, (payload: any) => removeMarkerOfPolyline(payload));
};

/**
 * 绘制元素
 * @param e
 */
function created(e: any) {
	console.log('e', e);
	// if (e.feature.properties._name) e.feature.properties._name = `${e.feature.geometry.type} 1`;
	// if (e.feature.properties._gid) e.feature.properties._gid = createUuid();
	mapLayer.value && mapLayer.value.addLayer(e.layer);
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
	if (!mapLayer.value) return;
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
		console.log(';', l);
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
			).setContent(popupContent(l))
		);

		//添加到地图上
		l.addTo(mapLayer.value);
	}
}

/**
 * 处理外部传入的geojson 映射为地图标记
 */
function handleUserGeojson() {
	const { valid } = validGeojson(props.data);
	let r = JSON.parse(props.data);
	if (!valid)
		r = {
			type: 'FeatureCollection',
			features: [],
		};
	geojsonToLayer(r);
	if (r.features && r.features.length && mode === 'default') {
		map.value && fitView();
	}
}

/**
 * 数据校验
 * @param source
 */
const validGeojson = (source: any) => {
	const err = geojsonhint.hint(source);
	const r = {
		messages: [],
		valid: true,
	};
	if (err && err.length) {
		r.valid = false;
		r.messages = err.map((e: { message: string; line: number }) => e.message);
	}
	return r;
};

/**
 * 所有绘制元素展示在可视范围
 */
function fitView() {
	if (!mapLayer.value || !map.value) return;
	const bounds = mapLayer.value.getBounds();
	if (bounds.isValid()) map.value.fitBounds(bounds, { maxZoom: 18 });
}

/**
 * popup open
 * @param map
 * @param e
 */
function popupOpenHandler(e: any) {
	const saveBtn = document.getElementById(`popup-save-${uuid}`);
	const cancelBtn = document.getElementById(`popup-cancel-${uuid}`);
	const addBtn = document.getElementById(`popup-add-${uuid}`);
	//取消编辑
	cancelBtn &&
		cancelBtn.addEventListener('click', () => {
			map.value.closePopup();
		});
	//保存编辑
	saveBtn &&
		saveBtn.addEventListener('click', () => {
			const items: NodeListOf<Element> = document.querySelectorAll(`#popup-content-${uuid} tr`);
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
			const pNode = document.querySelectorAll(`#popup-content-${uuid} tbody`)[0];
			const cNode = document.createElement('tr');
			cNode.className = 'el-row el-row--flex';
			pNode.appendChild(cNode);
			cNode.innerHTML = propertiesRow('', '');
		});
}

/**
 * 触发元素的popup
 * @param index
 */
const openPopup = (index: number) => {
	map.value.eachLayer(function (layer: any) {
		if (layer.customIndex === index) {
			layer.openPopup();
		}
	});
};

/**
 * 根据properties生成dom
 * @param obj
 */
function mapObjectToDom(obj: IDynamicObj, disabled = false) {
	let r = '';
	if (!Object.keys(obj).length) obj = {};
	for (const key in obj) {
		r += `<tr class="el-row el-row--flex">${propertiesRow(key, obj[key], disabled)}</tr>`;
	}
	return r;
}

/**
 * 单行dom
 * @param key
 * @param value
 */
function propertiesRow(key: string, value: string, disabled = false) {
	const dom = [
		`<th class="el-col el-col-8 el-input el-input--mini"><input class="el-input__inner" type="text" value="${key}" `,
	];
	if (disabled) dom.push(`disabled`);
	dom.push(
		`></th><td class="el-col el-col-14 el-input el-input--mini"><input class="el-input__inner" type="text" value="${value}"></td>`
	);
	return dom.join('');
}

/**
 * popup dom结构
 * @param properties
 */
function popupContent(l: any) {
	const {
		properties,
		geometry: { type },
	} = l.feature;
	const basicProps = {
		_name: properties._name,
		_gid: properties._gid,
	};
	const props: { [key: string]: string } = {};
	Object.keys(properties).forEach((key) => {
		if (!Object.keys(basicProps).includes(key)) props[key] = properties[key];
	});
	// l.feature.properties = Object.assign({}, basicProps, props);
	const htmlStr = `
       <div class="popup">
		<div class="title">属性</div>
        <div class="content">
          <table class="marker-properties" id="popup-content-${uuid}">
            <tbody>
			  ${mapObjectToDom(basicProps, true)}
              ${mapObjectToDom(props)}
            </tbody>
          </table>
          <button id="popup-add-${uuid}">
          +新增属性
          </button>
        </div>
		<div class="bottom">
          <button id="popup-save-${uuid}" class="border primary">保存</button>
          <button id="popup-cancel-${uuid}" class="border">取消</button>
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

/**
 * 定位 [lat, lng] | [[lat, lng]]
 */
const flyTo = (position: number[] | number[][], zoom: 18) => {
	if (!position || !position.length) return;
	if (position instanceof Array) {
		if (position[0] instanceof Array) {
			map.value.flyToBounds(position, {
				maxZoom: zoom,
			});
		} else map.value.flyTo(position, zoom);
	}
};

onMounted(() => init());

onBeforeUnmount(() => {
	map.value.remove();
	map.value = null;
	mapLayer.value = null;
});

defineExpose({
	invalidateSize,
	flyTo,
	openPopup,
	fitView,
});
</script>

<style lang="scss" scoped>
.mapView {
	::v-deep {
		.leaflet {
			&-top {
				top: 45px;
				z-index: 400;
			}

			&-draw {
				&-draw-image {
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
				&-touch {
					.leaflet-draw-toolbar {
						.leaflet-draw-edit-split {
							position: relative;
							background-image: unset;
							background-repeat: unset;
							background-size: unset;
							background-clip: unset;
							&::after {
								font-family: iconfont !important;
								font-style: normal;
								-webkit-font-smoothing: antialiased;
								-moz-osx-font-smoothing: grayscale;
								position: absolute;
								top: 50%;
								left: 50%;
								font-size: 15px;
								transform: translate(-50%, -50%);
								font-weight: 600;
								&::before {
									content: '\e7cd';
								}
							}
						}
					}
				}
			}

			//popup
			&-popup {
				&-content {
					&-wrapper {
						border-radius: 2px;
						box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
					}
					.popup {
						.title {
							margin-bottom: 8px;
							font-size: 16px;
							font-weight: 600;
						}

						.content {
							background: white;
							overflow: auto;
						}

						.marker-properties {
							display: block;
							border-collapse: collapse;
							font-size: 14px;
							border-bottom: 1px solid #ccc;
							max-height: 300px;
							width: 350px;
							margin-bottom: 5px;
							border-spacing: 0;
							overflow: auto;

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
								width: 99%;
								background: transparent;
								border: none;
								line-height: 2;
								outline: none;
							}
						}

						.bottom {
							border-top: 1px solid #dddddd;
							padding-top: 12px;
						}

						button {
							cursor: pointer;
							border: none;
							background: transparent;
							color: #4093cb;
							font-weight: 600;
							font-size: 14px;
							line-height: 2;
							letter-spacing: 1px;
							padding: 0px 15px;
							border-radius: 2px;
							&:hover {
								opacity: 0.9;
							}
							&.border {
								background-color: #eeeeee;
								color: #333;
								&.primary {
									background-color: #34495e;
									color: #fff;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
