const drawLocal = {
  draw: {
    toolbar: {
      actions: {
        title: '取消绘制',
        text: '取消'
      },
      finish: {
        title: '完成绘制',
        text: '完成'
      },
      undo: {
        title: '删除上一个绘制点',
        text: '删除上一个绘制点'
      },
      buttons: {
        polyline: '绘制线',
        polygon: '绘制多边形',
        rectangle: '绘制矩形',
        circle: '绘制圆',
        marker: '绘制标记',
        circlemarker: 'Draw a circlemarker',
        image: '贴图'
      }
    },
    handlers: {
      circle: {
        tooltip: {
          start: '单击并拖动以绘制圆'
        },
        radius: '半径'
      },
      circlemarker: {
        tooltip: {
          start: '.'
        }
      },
      marker: {
        tooltip: {
          start: '单击“地图”以放置圆标记'
        }
      },
      polygon: {
        tooltip: {
          start: '单击以开始绘制形状',
          cont: '单击以继续绘制形状',
          end: '单击第一个点以关闭此形状'
        }
      },
      polyline: {
        error: '<strong>错误:</strong> 形状边缘不能交叉!',
        tooltip: {
          start: '单击以开始绘制直线',
          cont: '单击以继续绘制直线',
          end: '单击“最后一个点”以完成绘制'
        }
      },
      rectangle: {
        tooltip: {
          start: '单击并拖动以绘制矩形'
        }
      },
      simpleshape: {
        tooltip: {
          end: '释放鼠标完成绘图'
        }
      },
      image: {
        tooltip: {
          start: '点击导入图片'
        }
      }
    }
  },
  edit: {
    toolbar: {
      actions: {
        save: {
          title: '保存更改',
          text: '保存'
        },
        cancel: {
          title: '取消编辑，放弃所有更改',
          text: '取消'
        },
        clearAll: {
          title: '清除所有绘制元素',
          text: '清除所有'
        }
      },
      buttons: {
        edit: '编辑元素',
        editDisabled: '当前无可编辑的元素',
        remove: '删除元素',
        removeDisabled: '当前无可删除的元素'
      }
    },
    handlers: {
      edit: {
        tooltip: {
          text: '拖动控制柄或标记以编辑要素',
          subtext: '单击“取消”撤消更改'
        }
      },
      remove: {
        tooltip: {
          text: '单击要删除的元素'
        }
      }
    }
  },
  split: {
    toolbar: {
      actions: {
        save: {
          title: 'split保存更改',
          text: '保存'
        },
        cancel: {
          title: '退出Split模式',
          text: '退出'
        }
      },
      buttons: {
        split: '拆分线元素',
        splitDisabled: '当前无可拆分的线元素'
      }
    },
    handlers: {
      split: {
        tooltip: {
          text: '拆分后的两条线需要至少包含2个坐标点',
          subtext: '在右键菜单中选择拆分Polyline'
        }
      }
    }
  }
}

export default drawLocal
