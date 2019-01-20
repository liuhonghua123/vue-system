<template>
  <div class="pl-sidelayout-right">
    <!-- 个人信息 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">个人信息</span>
      </div>
      <div class="pl-formbox xperson" style="width:360px;">
        <el-form label-width="5em" size="medium">
          <el-form-item class="xperson-avatar">
            <div class="pl-avatar"><img v-if="1===2" src="xxx" /></div>
            <!-- 上传控件用法详见:http://element.eleme.io/#/zh-CN/component/form -->
            <el-upload action="https://jsonplaceholder.typicode.com/posts/">
              <el-button size="medium">修改头像</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="用户名:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="登录名:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="性别:">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-form-item>
          <el-form-item label="手机:">
            <el-input></el-input>
          </el-form-item>
          <el-form-item style="text-align:center;">
            <el-button type="info" size="medium">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- /个人信息 -->

    <!-- 任教信息 -->
    <div class="pl-card xp">
      <div class="pl-title">
        <span class="pl-title-label">任教信息</span>
      </div>

      <div class="pl-formbox" style="width:640px;">
        <el-form label-width="5em" size="medium">
          <el-form-item class="pl-formitem" label="学校:">
            <el-input></el-input>
            <a class="pl-link pl-formitem-link" style="right:-3em; top:0;" @click="dialogVisible=true">选择</a>
          </el-form-item>
          <el-form-item label="任教年级:">
            <el-select style="width:100%;" placeholder="请选择任教年级">
              <el-option label="任教年级1" value="1"></el-option>
              <el-option label="任教年级2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="任教学科:">
            <el-select style="width:100%;" placeholder="请选择任教学科">
              <el-option label="任教学科1" value="1"></el-option>
              <el-option label="任教学科2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="教材版本:">
            <el-select style="width:100%;" placeholder="请选择教材版本">
              <el-option label="教材版本1" value="1"></el-option>
              <el-option label="教材版本2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="text-align:center;">
            <el-button type="info" size="medium">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- /任教信息 -->

    <!-- 弹窗:选择学校 -->
    <el-dialog title="选择学校" :visible.sync="dialogVisible" width="480px">
      <div class="pl-dialogbody">
        <div class="pl-searchinput">
          <el-input size="medium"></el-input>
          <i class="el-icon-search"></i>
        </div>
        <div class="pl-treebox xschool">
          <!-- 目录树用法详见:http://element.eleme.io/#/zh-CN/component/tree -->
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button size="medium" type="info" @click="dialogVisible = false">选 择</el-button>
      </span>
    </el-dialog>
    <!-- /弹窗:选择学校 -->
  </div>
</template>

<script>
  export default {
    name: 'plPersonInfo',
    data() {
      return {
        filterData: {
          roleName: ''
        },
        tableData: [
          {
            roleId: '001',
            roleName: '老师',
            enableUpload: '有',
            enableDownload: '有',
            subjectLimit: '本学科',
            time: ''
          }
        ],
        dialogVisible: false,
        data: [
          {
            name: 'xxx区',
            children: [
              {
                name: '中南讯智',
                children: [
                  {
                    name: 'xxx学校'
                  },
                  {
                    name: 'xxx学校'
                  }
                ]
              }
            ]
          },
          {
            name: 'xxx区',
            children: [
              {
                name: '中南讯智',
                children: [
                  {
                    name: 'xxx学校'
                  },
                  {
                    name: 'xxx学校'
                  }
                ]
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'name'
        }
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data)
      }
    }
  }
</script>
