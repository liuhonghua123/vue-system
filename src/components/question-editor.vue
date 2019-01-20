<template>
  <div class="pl-qeditor" :class="{xshowmenu: showMenu}">
    <div class="pl-qeditor-body" :style="{minHeight:minHeight}">
      <div ref="editorBox" class="pl-editorbox">
        <!-- 富文本插件用法详见:http://ueditor.baidu.com/website/index.html -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plQuestionEditor',
    props: {
      showMenu: {
        type: Boolean,
        default: false
      },
      minHeight: {
        type: String,
        default: '30px'
      },
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        editor: null,
        content: ''
      }
    },
    mounted () {
      if(this.editor) return

      const editorEl = document.createElement('script')
      const uid = 'editor'+this._uid

      // 生成编辑器实例
      editorEl.setAttribute('id', uid)
      this.$refs.editorBox.appendChild(editorEl)
      this.editor = window.UM.getEditor(uid,{
        initialFrameHeight : parseInt(this.minHeight),
        toolbar:['image','formula']
      })

      // 写入初始值
      this.editor.setContent(this.value)

      // 内容发生改变时触发change事件
      const vm = this
      this.editor.addListener('contentChange', function(){
        vm.content = this.getContent()
        vm.$emit('input', vm.content)
      })
    },
    beforeDestroy () {
      // 注销ueditor
      if (this.editor !== null) {
        this.editor.destroy()
      }
    },
    watch: {
      value (newVal) {
        // 新值等于当前的内容值，不更新编辑器内容，
        // 以免在输入时编辑器中光标被重新定位到文档最前面
        if(newVal===this.content) return

        // 当值变化时实时更新编辑器内容
        if(this.editor) {
          this.editor.setContent(newVal)
        }
      }
    }
  }
</script>
