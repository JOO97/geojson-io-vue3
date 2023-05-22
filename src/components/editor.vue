<template>
  <div id="editor" :class="{ 'is-error': errorContent }">
    <!-- 错误提示 -->
    <el-alert
      :title="errorContent"
      type="error"
      v-if="errorContent"
      show-icon
      class="alert"
      :closable="false"
    />
    <!-- 编辑器 -->
    <codemirror ref="cmEditor" :options="OPTIONS()" v-model="value" />
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/eclipse.css'

//代码折叠
//NOTE: 需要引入JavaScript mode, 否则不生效
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/markdown-fold'
import 'codemirror/addon/fold/xml-fold'
import 'codemirror/addon/fold/indent-fold'

//检索
import 'codemirror/addon/scroll/annotatescrollbar.js'
import 'codemirror/addon/search/matchesonscrollbar.js'
import 'codemirror/addon/search/match-highlighter.js'
import 'codemirror/addon/search/jump-to-line.js'
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/search/searchcursor.js'
import 'codemirror/addon/search/search.js'

import validate from './editor-validate' //校验

//防抖
function debounce(fn, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

const defaultData = `{
    "type": "FeatureCollection",
    "features": [
    ]
}
`
export default {
  components: {
    codemirror
  },
  props: {
    data: {
      type: String,
      default: defaultData
    }
  },
  data() {
    return {
      errorInfo: null //编辑器错误信息
    }
  },
  computed: {
    value: {
      get() {
        let r = ''
        try {
          // 格式化
          r = JSON.stringify(JSON.parse(this.data), null, 2)
        } catch (error) {
          r = this.data
        }
        return r
      },
      set(value) {
        this.onChange(value)
      }
    },
    //codemirror实例
    codemirror() {
      return this.$refs.cmEditor.codemirror
    },
    errorContent() {
      const { errorInfo } = this
      if (!errorInfo) return ''
      let msg = ''
      if (errorInfo.line !== undefined) msg += `line ${errorInfo.line}: `
      if (errorInfo.message) msg += errorInfo.message.replace('\n', '')
      return msg
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    debounce,
    /**
     * 初始化编辑器
     */
    init() {
      this.onChange = this.debounce((value) => {
        validate(this.codemirror, (err) => {
          this.errorInfo = err
          if (!err) {
            this.$emit('change', value)
          }
        })
      }, 200)
    },
    /**
     * 编辑器配置
     */
    OPTIONS() {
      return {
        mode: 'application/json',
        tabSize: 2,
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        styleSelectedText: true,
        theme: 'eclipse',
        // extraKeys: {
        //   'Ctrl-S': this.saveAction,
        //   'Cmd-S': this.saveAction
        // },
        fallthrough: ['default'],
        autofocus: window === window.top,
        highlightDifferences: true,
        autocorrect: true,
        foldGutter: true,
        lineWrapping: true,
        gutters: ['error', 'CodeMirror-linenumbers', 'CodeMirror-foldgutter']
      }
    },
    /**
     * 重置编辑器内容
     */
    reset() {
      this.codemirror.doc.setValue(defaultData)
    }
  }
}
</script>

<style lang="scss">
#editor.is-error {
  position: relative;
  padding-top: 58px;
}
.alert {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.vue-codemirror {
  height: 100%;
}
.CodeMirror {
  height: 100%;
  font-family: 'm_1regular', monospace;
  line-height: 1.5em;
  &-gutters {
    background: #fff;
  }
}
</style>
