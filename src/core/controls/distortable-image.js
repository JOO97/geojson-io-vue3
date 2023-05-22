//image控件

export default function (L) {
  return {
    statics: {
      TYPE: 'image'
    },

    options: {
      shapeOptions: {
        clickable: true
      }
    },
    //初始化
    initialize: function (map, options) {
      this.type = L.Draw.Image.TYPE
      this._initialLabelText = L.drawLocal.draw.handlers.image.tooltip.start
      L.Draw.SimpleShape.prototype.initialize.call(this, map, options)

      this._template = '' //base64
      this._templateBounds = [
        [0, 0],
        [100, 100]
      ]
      this._svgViewBox = false
      this._svgFitBounds = false
      this._scale = 1.0
      this._ratio = 1.0 //图片实际宽高比
      this._lastLatlng = '' //图片中心点
      this._height = 100 //图片最大高度
    },
    //放置贴图
    _fireCreatedEvent: function () {
      createDistortableImageOverlay(this._map, {
        img: this._template,
        center: this._lastLatlng, //鼠标位置
        ratio: this._ratio, //实际宽高比
        height: this._height //默认设定的图片高度
      })
    },
    //鼠标移动事件: 图片跟随鼠标移动
    _onMouseMove: function (e) {
      let latlng = e.latlng
      this._lastLatlng = latlng
      this._tooltip.updatePosition(latlng)
      if (!this._shape) {
        const icon = L.icon({
          iconUrl: this._template,
          iconSize: [this._height * this._ratio, this._height]
        })
        this._shape = new L.Marker(latlng, {
          icon
        })
        this._map.addLayer(this._shape)
      } else {
        this._shape.setLatLng(latlng)
      }
      let subtext = ''
      this._tooltip.updateContent({
        text: this._endLabelText,
        subtext: subtext
      })
    }
  }
}

//创建贴图
function createDistortableImageOverlay(map, options = {}) {
  //参数校验
  if (Object.prototype.toString.call(options) !== '[object Object]')
    throw TypeError()
  //根据鼠标位置、图片大小计算图片四角的位置
  const { img, center, ratio, height } = options
  const centerPoint = map.project(center)
  const imgHeight = height
  const imgWidth = parseInt(ratio * imgHeight)
  var offset = L.point(imgWidth, imgHeight).divideBy(2)
  const corners = [
    map.unproject(centerPoint.subtract(offset)),
    map.unproject(centerPoint.add(L.point(offset.x, -offset.y))),
    map.unproject(centerPoint.add(L.point(-offset.x, offset.y))),
    map.unproject(centerPoint.add(offset))
  ]
  //创建image overlay
  L.distortableImageOverlay(img, {
    height,
    corners,
    actions: [
      L.FreeRotateAction,
      L.LockAction,
      L.OpacityAction,
      L.DeleteAction
    ],
    translation: TRANSLATION
  }).addTo(map)
}

const TRANSLATION = {
  deleteImage: '删除',
  deleteImages: '删除当前所有图片',
  distortImage: '变形',
  dragImage: '拖拽',
  exportImage: 'Export Image',
  exportImages: 'Export Images',
  removeBorder: 'Remove Border',
  addBorder: 'Add Border',
  freeRotateImage: '旋转缩放',
  geolocateImage: 'Geolocate Image',
  lockMode: '锁定',
  lockImages: '锁定所有图片',
  makeImageOpaque: '还原透明度',
  makeImageTransparent: '降低透明度',
  restoreImage: 'Restore Natural Image',
  rotateImage: '旋转',
  scaleImage: '缩放',
  stackToFront: 'Stack to Front',
  stackToBack: 'Stack to Back',
  unlockImages: '解锁',
  confirmImageDelete: '是否删除当前选择的图片? ',
  confirmImagesDeletes: '是否删除当前添加的所有图片?'
}
