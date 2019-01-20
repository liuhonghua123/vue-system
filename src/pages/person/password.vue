<template>
  <div class="pl-sidelayout-right">
    <!-- 修改密码 -->
    <div class="pl-card xp"  style="min-height:640px;">
      <div class="pl-title">
        <span class="pl-title-label">修改密码</span>
      </div>
      <div class="pl-formbox xperson" style="width:360px;">
        <el-form label-width="5em" size="medium">
          <el-form-item label="旧密码:">
            <el-input type="password"></el-input>
          </el-form-item>
          <el-form-item label="新密码:">
            <el-input type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:">
            <el-input type="password"></el-input>
          </el-form-item>
          <el-form-item style="text-align:center;">
            <el-button type="info" size="medium">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- /修改密码 -->
  </div>
</template>

<script>
  export default {
    name: 'plPersonPassword'
  }
</script>
