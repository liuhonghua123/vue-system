<template>
  <!-- 试题篮 -->
  <div class="pl-sidefloat xcart" :class="{xactive:floatVisible}">
    <div class="pl-sidefloat-left" @click="floatVisible=!floatVisible">
      <span>试题篮</span>
      <i>></i>
    </div>
    <div class="pl-sidefloat-body">
      <div class="xcart-header">共计:<b class="pl-num">52</b>道题  250分</div>
      <div class="xcart-scrollbox">
        <ul class="pl-astable xcart-body">
          <li class="pl-astable-row">
            <label class="pl-astable-col" style="width:5em;">多选题:</label>
            <div class="pl-astable-col" style="width:4em;"><b class="pl-num">10</b>道</div>
            <div class="pl-astable-col" style="width:3em">50分</div>
            <div class="pl-astable-col">
              <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
              <a class="xcart-next"><i class="pl-ico xnext"></i></a>
              <a class="xcart-del"><i class="pl-ico xdel"></i></a>
            </div>
          </li>
          <li class="pl-astable-row">
            <label class="pl-astable-col" style="width:5em;">多选题:</label>
            <div class="pl-astable-col" style="width:4em;"><b class="pl-num">10</b>道</div>
            <div class="pl-astable-col" style="width:3em">50分</div>
            <div class="pl-astable-col">
              <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
              <a class="xcart-next"><i class="pl-ico xnext"></i></a>
              <a class="xcart-del"><i class="pl-ico xdel"></i></a>
            </div>
          </li>
          <li class="pl-astable-row">
            <label class="pl-astable-col" style="width:5em;">多选题:</label>
            <div class="pl-astable-col" style="width:4em;"><b class="pl-num">10</b>道</div>
            <div class="pl-astable-col" style="width:3em">50分</div>
            <div class="pl-astable-col">
              <a class="xcart-prev"><i class="pl-ico xprev"></i></a>
              <a class="xcart-next"><i class="pl-ico xnext"></i></a>
              <a class="xcart-del"><i class="pl-ico xdel"></i></a>
            </div>
          </li>
        </ul>
      </div>
      <div class="xcart-footer">
        <el-button size="medium" type="primary">生成试卷</el-button>
      </div>
    </div>
  </div>
  <!-- /试题篮 -->
</template>

<script>
  export default {
    name: 'plExerciseCart',
    data() {
      return {
        floatVisible: false
      }
    }
  }
</script>
