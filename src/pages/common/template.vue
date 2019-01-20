<template>
  <div class="pl-main">
    <div class="pl-main-inner">
      <div class="pl-card xp">
        <div class="pl-title">
          <span class="pl-title-label">上传文件</span>
        </div>

        <div style="padding:0 60px 60px">
          <div class="pl-grid xpc-x3">
            <div class="pl-grid-col">
              <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
              <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                <img src="../../static/images/itemplate.png" alt="">
              </el-upload>
            </div>
            <div class="pl-grid-col">
              <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
              <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                <img src="../../static/images/iword.png" alt="">
              </el-upload>
            </div>
            <div class="pl-grid-col">
              <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
              <el-upload action="https://jsonplaceholder.typicode.com/posts/">
                <img src="../../static/images/image.png" alt="">
              </el-upload>
            </div>
          </div>

          <div class="pl-grid">
            <div class="pl-grid-col">
              <div class="pl-bgbox ximport">
                <i class="pl-triangle xup ximport"></i>
                <h4 class="ximport-title">试卷模板下载</h4>
                <div class="pl-btnbox">
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>通用模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>初中数学模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>通用模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>初中数学模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>通用模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>初中数学模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>通用模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>初中数学模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>通用模板</a>
                  <a class="el-button el-button--default el-button--medium"><i class="pl-ico xdownload"></i>初中数学模板</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plTemplate'
  }
</script>

