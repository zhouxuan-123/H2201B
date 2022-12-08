<template>
  <div>
    <h1>分类参数</h1>
    <el-card>
      <!-- alert 警告 -->
      <el-alert title="注意：只允许为三级分类设置参数" type="warning" show-icon></el-alert>
      <p>选择分类：</p>
      <!-- 级联选择器 -->
      <!-- :options 绑定要展示的数据  和表格中:data -->
      <!-- :props 设置配置项  label 是显示的文字信息 -->
      <!-- checkStrictly: true 支持单选， 可以选择任意一项 -->
      <el-cascader style="width:100%" v-model="idList" :options="cateList" :props="{label:'cat_name', value:'cat_id'}" @change="handleChange"></el-cascader>
      <!-- Tabs 标签页 -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="动态参数" name="first">
          <!-- 添加参数和表格 -->
          <el-button type="primary" @click="open" :disabled="idList.length==0">添加参数</el-button>
          <!-- 表格 -->
          <el-table :data="paramsList" border style="width: 100%">
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="参数名称"></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态参数" name="second">静态参数</el-tab-pane>
      </el-tabs>
    </el-card>
    <!-- 模态框 -->
    <el-dialog title="添加参数" :visible.sync="dialogVisible" width="50%">
      <!-- 表单 -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="参数名称">
          <el-input v-model="form.attr_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idList: [], // 级联选择器选中的id数组
      cateList: [],
      activeName: "first",// 标签页默认激活
      paramsList: [], // 参数列表
      dialogVisible: false, // 控制模态框显示隐藏
      form:{
          attr_name:"", // 参数名称
          attr_sel: "many", // 代表动态参数
      }
    }
  },
  methods: {
    getCate() {  // 获取所有分类
      this.$http.get("/api/categories").then(res => {
        console.log(res);
        this.cateList = res.data.data;
      })
    },
    getParams(){ // 获取参数
        this.$$http.get("/api/categories/${this.idList[2]}/attributes").then(res => {
          // 必须要打印
          console.log(res);
          this.paramsList = res.data.data;
        })
    },
    handleChange(val) {  // 切换级联选择器获取分类的值
      // 选中id组成的数组
      console.log(val);
      if (val.length != 3) {
        this.$message({
          message: '只能为三级分类添加参数',
          type: 'error'
        });
        this.idList = [];
      } else {
        // 如果选中的是三级分类
        // 向后台请求数据
        this.getParams()
      }
    },
    open(){// 打开模态框
        this.dialogVisible = true;
    },
    onSubmit(){ //添加参数
        this.$axios.post(`categories/${this.idList[2]}/attributes`, this.form).then(res=>{
            console.log(res);
            if (res.data.meta.status == 201){
                this.$message({
                    message: '创建成功',
                    type: 'success'
                });
                // 在if判断里面
                // 关闭模态框
                this.dialogVisible = false;
                // 重新请求数据 渲染页面
                this.getParams();
            }
        })
    }
  },
  created() {
    this.getCate()
  },
}
</script>
