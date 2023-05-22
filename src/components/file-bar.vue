<template>
  <div class="file-bar">
    <!-- 下拉菜单 -->
    <el-dropdown v-for="sub in MENUS" :key="sub.name">
      <span class="el-dropdown-link">
        <i :class="sub.icon" />
        {{ sub.name }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="menu in sub.children"
          :key="`${sub.value}-${menu.value}`"
          @click.native="handleMenuClicked(`${sub.value}-${menu.value}`)"
          >{{ menu.name }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 上传文件的对话框 -->
    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.visible"
      :modal-append-to-body="false"
      width="420px"
    >
      <el-upload
        v-loading="uploadLoading"
        drag
        action=""
        :file-list="file.list"
        :before-upload="beforeFileUpload"
        :on-remove="handleFileRemove"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip" style="text-align: left">
          仅支持JSON文件
        </div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialog.visible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirmFileValue"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
const MENUS = [
  {
    name: '导入',
    value: 'import',
    icon: 'el-icon-upload',
    children: [
      {
        name: '.json',
        value: 'json',
        icon: ''
      }
    ]
  },
  {
    name: '导出',
    value: 'export',
    icon: 'el-icon-printer',
    children: [
      {
        name: '.json',
        value: 'json',
        icon: ''
      }
    ]
  }
]

export default {
  data() {
    return {
      MENUS,
      dialog: {
        visible: false,
        title: ''
      },
      uploadLoading: false,
      file: {
        value: '',
        list: []
      }
    }
  },
  watch: {
    'dialog.visible'(n) {
      if (!n) {
        this.file.value = ''
        this.file.list = []
      }
    }
  },
  methods: {
    //点击菜单项
    handleMenuClicked(value) {
      const [action, type] = value.split('-')
      switch (action) {
        case 'import':
          if (type === 'json') {
            //导入JSON
            this.dialog.title = '导入JSON文件'
            this.dialog.visible = true
          }
          break
        case 'export':
          if (type === 'json') {
            //导出JSON
            this.$emit('export')
          }
          break
        default:
          break
      }
    },
    //读取上传文件
    beforeFileUpload(file) {
      this.uploadLoading = true
      if (file.type !== 'application/json') {
        this.uploadLoading = false
        this.$message({
          message: '上传失败: 仅支持导入JSON文件',
          type: 'warning'
        })
        return false
      }
      var reader = new FileReader()
      reader.readAsText(file, 'UTF-8')
      reader.onload = ({ total, target }) => {
        this.uploadLoading = false
        if (total === 0) {
          this.$message({
            message: '上传失败: 所选的文件内容为空',
            type: 'warning'
          })
          return
        }
        Vue.set(this.file.list, 0, { name: file.name })
        this.file.value = target.result //string
      }
      return false
    },
    //删除已导入文件
    handleFileRemove() {
      this.file.value = ''
      this.file.list = []
    },
    //点击对话框的确认按钮
    handleConfirmFileValue() {
      const { value } = this.file
      if (!value) {
        this.$message({
          message: '请先上传文件',
          type: 'warning'
        })
        return
      }
      this.dialog.visible = false
      this.$emit('import', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.file-bar {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
  width: max-content;
  background-color: #f5f7fa;
  border-bottom: 1px solid #e4e7ed;
  height: 40px;
  line-height: 40px;
  .el-dropdown {
    color: #409eff;
    cursor: pointer;
    padding: 0 10px;
    transition: all 0.6s;
    &:hover {
      opacity: 0.8;
      background: #fff;
    }
  }
}
</style>
