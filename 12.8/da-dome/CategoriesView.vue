<template>
  <div>
    <h1>商品分类</h1>
    <el-card>
      <el-button type="primary" @click="open">添加分类</el-button>
      <!-- 树状表格 -->
      <zk-table class="tb-cate" index-text="#" show-index stripe border :data="cateList" :columns="columns" :expand-type="false" :selection-type="false">
        <template slot="isok" slot-scope="scope">
          <i class="el-icon-success" v-if="!scope.row.cat_deleted" style="color: lightGreen"></i>
          <i class="el-icon-error" v-else style="color: red"></i>
        </template>
        <template slot="level" scope="scope">
          <el-tag type="primary" effect="plain" size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag type="success" effect="plain" size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
          <el-tag type="warning" effect="plain" size="mini" v-else>三级</el-tag>
        </template>
        <template slot="opt" scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </zk-table>
    </el-card>
    <!-- 分页 -->
    <el-pagination @size-change="sizeChange" @current-change="currentChange" :current-page="page.pagenum" :page-sizes="[2, 5, 10, 15]" :page-size="page.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total"></el-pagination>
    <!-- 模态框 -->
    <el-dialog title="添加分类" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="ruleForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="cat_pid">
          <!-- <el-input v-model="ruleForm.cat_pid"></el-input> -->
          <!-- 级联选择器 -->
          <!-- :options 绑定要展示的数据  和表格中:data -->
          <!-- :props 设置配置项  label 是显示的文字信息 -->
          <!-- checkStrictly: true 支持单选， 可以选择任意一项 -->
          <el-cascader style="width:100%" :options="cateList" :props="{label:'cat_name', value:'cat_id',checkStrictly: true }" @change="handleChange"></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idList: [], // 级联选择器选中的id的数组
      total: 0,
      dialogVisible: false, // 控制模态框显示和隐藏
      cateList: [], // 所有分类
      columns: [  // 表格列配置，对应数据中对象中的key(属性)
        { label: "分类名称", prop: "cat_name" },
        {
          label: "是否有效",
          prop: "cat_deleted",
          type: "template",
          template: "isok",  // 插槽的名字
        },
        {
          label: "分类等级",
          prop: "cat_level",
          type: "template",
          template: "level"  // 插槽的名字
        },
        {
          label: '操作',
          type: 'template',
          template: 'opt'
        }
      ],
      page: {
        pagenum: 1,  // 当前页码数
        pagesize: 10, // 每页的个数
      },
      ruleForm: {
        cat_name: "",
        cat_pid: "",  // 父级id
        cat_level: "",
      },
      rules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    getCate() {
      this.$http.get("/api/categories").then(res => {
        console.log(res);
        this.cateList = res.data.data.result
        this.total = res.data.data.total;
      })
    },
    sizeChange(val) { // 每页条数变化
      this.page.pagesize = val;
      // 重新渲染
      this.getCate();
    },
    currentChange(val) { // 切换页码触发
      this.page.pagenum = val;
      // 重新渲染
      this.getCate();
    },
    open() { // 打开模态框
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          // 在验证通过时，向后台提交数据
          if (this.idList.length == 0) {
            // 如果没有选择父级分类，父级id设置成
            this.ruleForm.cat_pid = 0;
            this.ruleForm.cat_level = 0; //分类层级  `0`表示一级分类；`1`表示二级分类；`2`表示三级分类
          } else if (this.idList.length == 1) {
            // 如果父级分类的长度为1 ，说明我们选择了一个1级的分类
            this.ruleForm.cat_pid = this.idList[0]; // 父级的id
            this.ruleForm.cat_level = 1;
          } else if (this.idList.length >= 2) {
            // 如果父级分类的长度为2 ，说明我们选择了一个2级的分类作为父分类
            this.ruleForm.cat_pid = this.idList[1];
            this.ruleForm.cat_level = 2;
          }
          // else if(this.idList.length == 2){
          //     // 如果父级分类的长度已经超过2
          //     this.ruleForm.cat_pid = this.idList[1];
          //     this.ruleForm.cat_level= 2;
          // }

          this.$http.post("/api/categories", this.ruleForm).then(res => {
            console.log(res);
            if (res.data.meta.status == 201) {
              this.$message({
                message: '创建成功',
                type: 'success'
              });
              this.getCate();
              this.dialogVisible = false
            } else {
              this.$message({
                message: '创建失败',
                type: 'error'
              });
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChange(val) { // 切换级联选择器选项的时候触发
      console.log(val);
      // val  是被选中的id的数组
      this.idList = val;
    }
  },
  created() {
    this.getCate();
  },
}
</script>
