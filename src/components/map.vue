<template>
  <!-- 地图容器 -->
  <div ref="map" />
  <!-- style="width: 100vw; height: 100%" -->
</template>

<script>
import L from './index'
//校验geojson
import geojsonRewind from 'geojson-rewind'

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
    subdomains: '1234'
  }
)


// const GOOGLE_MAP = L.tileLayer(
//   'https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}',
//   {
//     maxZoom: 20,
//     minZoom: 3,
//     attribution: '谷歌 Google.cn'
//   }
// )
let mode = 'default' //default-默认 splitting 拆分

export default {
  props: {
    data: {
      type: String,
      default: () => `{
  "type": "FeatureCollection",
  "features": []
}
`,
      hideGoogle: {
        type: Boolean,
        default: true
      }
    }
  },
  data() {
    return {
      map: null,
      mapLayer: null,
      propertyForm: {
        //包含字段
        fields: {
          id: '',
          name: '',
          description: ''
        },
        //属性表单
        dialogVisible: false, //弹窗状态
        current: null //当前的地图元素
      }
    }
  },
  watch: {
    data: {
      handler() {
        this.handleUserGeojson()
      }
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.map.remove()
    this.map = null
    this.mapLayer = null
  },
  methods: {
    //初始化地图
    init() {
      const map = new L.Map(this.$refs.map, {
        center: [24.46, 118.1],
        zoom: 13,
        maxZoom: 20,
        attributionControl: false,
        contextmenu: true
      })

      //当前选择的位置经纬度添加到hash中
      //非electron环境下 使用hash
      if (!(window && window.process)) L.hash(map)

      this.map = map
      const mapLayer = L.featureGroup().addTo(map)
      this.mapLayer = mapLayer
      L.control.scale().setPosition('bottomright').addTo(map)

      L.control
        .layers(
          {
            // google: GOOGLE_MAP.addTo(map),
            // 高德: A_MAP.addTo(map)
          },
          { 显示绘制元素: mapLayer },
          { position: 'bottomleft', collapsed: false }
        )
        .addTo(map)
      A_MAP.addTo(map)
      //数据映射
      this.handleUserGeojson()
      //添加控制
      map.addControl(
        new L.Control.Draw({
          edit: {
            featureGroup: mapLayer
          },
          draw: {
            polygon: {
              // allowIntersection: false,
              showArea: true
            }
          },
          split: { featureGroup: mapLayer }
        })
      )
      // 地图-事件监听
      map.on('draw:created', this.created)
      map.on('draw:edited', this.update).on('draw:deleted', this.update)
      map.on('draw:drawstart', (options) => {
        // 图片控件
        if (options.layerType === 'image') {
          return
        }
      })
      map.on('popupopen', (e) => {
        this.handlePopupOpen(map, e)
      })
      const _this = this
      map.on('draw:splittingstart', (e) => {
        mode = 'splitting'
      })
      map.on('draw:splittingfinished', (e) => {
        mode = 'default'
      })
      //右键点击线元素上的编辑点时触发
      map.on(L.Draw.Event.SPLIT, (payload) => {
        this.splitPolyline(payload)
      })
      map.on(L.Draw.Event.PolylineMarkerRemove, (payload) => {
        this.removeMarkerOfPolyline(payload)
      })
    },

    //绘制元素
    created(e) {
      this.mapLayer.addLayer(e.layer)
      this.update()
    },

    //创建或编辑地图元素后更新对于geojson数据
    update() {
      // NOTE： toGeoJSON() 需要指定精度(大于默认值6)
      this.map.closePopup()
      var geojson = this.mapLayer.toGeoJSON(L.CONSTANT.precision)
      geojson = geojsonRewind(geojson)
      this.$emit('update', geojson)
    },
    //geojson数据映射到地图上
    geojsonToLayer(geojson, layer) {
      layer.clearLayers()
      const _this = this
      let index = 0
      L.geoJson(geojson, {
        style: { color: '#000' },
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng)
        }
      }).eachLayer(add)
      function add(l) {
        // 绑定popup
        l.customIndex = index++
        l.bindPopup(
          L.popup(
            {
              maxWidth: 500,
              maxHeight: 400,
              minWidth: 200,
              autoPanPadding: [5, 45],
              className: 'popup'
            },
            l
          ).setContent(_this.popupContent(l.feature.properties))
        )

        //添加到地图上
        l.addTo(layer)
      }
    },

    //元素映射为geojson
    layerToGeoJSON(layer) {
      var features = []
      layer.eachLayer(collect)
      function collect(l) {
        if ('toGeoJSON' in l) features.push(l.toGeoJSON(L.CONSTANT.precision))
      }
      return {
        type: 'FeatureCollection',
        features: features
      }
    },
    // 处理外部传入的geojson，映射为地图标记
    handleUserGeojson() {
      const { data } = this
      try {
        const r = JSON.parse(data)
        if (!r) return
        if (r.features && r.features.length) {
          this.geojsonToLayer(r, this.mapLayer)
          if (mode === 'default') {
            this.fitView()
          }

          // if (r.features.length <= 500) {
          //   this.fitView()
          // }
        }
      } catch (error) {
        console.log('error', error)
      }
    },
    //所有绘制元素展示在可视范围
    fitView() {
      var bounds = this.mapLayer.getBounds()
      if (bounds.isValid()) this.map.fitBounds(bounds, { maxZoom: 18 })
    },
    //popup open
    handlePopupOpen(map, e) {
      const saveBtn = document.getElementById('popup-save')
      const cancelBtn = document.getElementById('popup-cancel')
      const addBtn = document.getElementById('popup-add')
      //取消编辑
      cancelBtn.addEventListener('click', () => {
        map.closePopup()
      })
      //保存编辑
      saveBtn.addEventListener('click', () => {
        const items = document.querySelectorAll('#popup-content tr')
        const properties = {}
        Array.from(items).forEach((item) => {
          const [th, td] = item.childNodes
          const [key] = th.childNodes
          const [value] = td.childNodes
          if (key && key.value && value && value.value) {
            properties[key.value] = value.value
          }
        })
        e.popup._source.feature.properties = properties
        this.update() //更新
      })
      //新增属性
      addBtn.addEventListener('click', () => {
        const [pNode] = document.querySelectorAll('#popup-content tbody')
        const cNode = document.createElement('tr')
        cNode.className = 'el-row el-row--flex'
        pNode.appendChild(cNode)
        cNode.innerHTML = this.propertiesRow('', '')
      })
    },
    //根据properties生成dom
    mapObjectToDom(obj) {
      let r = ''
      if (!Object.keys(obj).length)
        obj = {
          id: '',
          name: '',
          description: ''
        }
      for (const key in obj) {
        r += `<tr class="el-row el-row--flex">${this.propertiesRow(
          key,
          obj[key]
        )}</tr>`
      }
      return r
    },
    //单行dom
    propertiesRow(key, value) {
      // NOTE: 不要换行
      return `<th class="el-col el-col-8 el-input el-input--mini"><input class="el-input__inner" type="text" value="${key}"></th><td class="el-col el-col-14 el-input el-input--mini"><input class="el-input__inner" type="text" value="${value}"></td>`
    },
    //popup dom结构
    popupContent(properties) {
      const htmlStr = `
   <div class="pad1 tabs-ui clearfix">
        <div class="title">Properties属性</div>
        <div class="space-bottom1 col12 content">
          <table class="space-bottom0 marker-properties" id="popup-content">
            <tbody>
              ${this.mapObjectToDom(properties)}
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
      `
      return htmlStr
    },
    /**
     * 重置地图大小
     */
    invalidateSize() {
      this.map.invalidateSize()
    },
    /**
     * 拆分polyline
     */
    splitPolyline(e, layer) {
      const {
        poly: { feature, customIndex },
        items: [coordinates1, coordinates2]
      } = e
      let { coordinates } = feature.geometry
      const coordinatesLength = coordinates.length
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
        return this.$message.warning(
          '操作失败: 拆分后的每段线数据需要包含至少2个坐标点'
        )
      const poly = JSON.parse(this.data).features[customIndex]
      const polys = [
        {
          ...poly,
          geometry: {
            ...poly.geometry,
            coordinates: coordinates1.map(({ lat, lng }) => [lng, lat])
          }
        },
        {
          ...poly,
          geometry: {
            ...poly.geometry,
            coordinates: coordinates2.map(({ lat, lng }) => [lng, lat])
          }
        }
      ]
      const newData = JSON.parse(this.data)
      newData.features.splice(customIndex, 1, ...polys)
      this.$emit('update', newData)
    },
    removeMarkerOfPolyline(poly) {
      const {
        poly: { _latlngs, customIndex }
      } = poly
      const newData = JSON.parse(this.data)
      newData.features[customIndex].geometry.coordinates = _latlngs.map(
        ({ lat, lng }) => [lng, lat]
      )
      this.$emit('update', newData)
    }
  }
}
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
