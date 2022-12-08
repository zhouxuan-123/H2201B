<template>
 <div>
	<h1>用户列表</h1>
    <el-card>
      <div style="margin-top: 15px;" class="box">
        <el-input placeholder="请输入内容" v-model="page.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>

        <el-button type="primary" @click="open">添加用户</el-button>
      </div>
      <!-- 表格 -->
      <el-table :data="users"  border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="mg_state" label="状态" width="150">
          <!-- 插槽 -->
          <!-- scope.row 是当前行的数据信息  相当于 v-for中的 item -->
          <template slot-scope="scope">
            <!-- {{scope.row}} -->
            <el-switch v-model="scope.row.mg_state" @change="handleChange(scope.row.id, scope.row.mg_state)" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            <!-- 两个按钮 -->
            <!-- <el-button type="danger" size="mini" v-show="scope.row.mg_state == false">关闭</el-button>
            <el-button type="success" size="mini" v-show="scope.row.mg_state == true">开启</el-button> -->
          </template>
        </el-table-column>
        <el-table-column prop="create_time" sortable label="创建时间">
          <!-- 插槽 -->
          <template slot-scope="scope">
            <!-- {{new Date(scope.row.create_time * 1000 ).toLocaleString()}} -->
            <!-- | 管道符 后面是过滤器的名称 -->
            {{ scope.row.create_time | timer }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="del(scope.row.id)" type="text" size="small">删除</el-button>
            <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <!-- 表单带验证功能 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!-- <el-form-item label="用户名称" prop="username">
          <el-input v-model="ruleForm.username" :disabled="title == '编辑用户'"></el-input>
        </el-form-item>-->
        <el-form-item label="用户密码" prop="password" v-show="title == '添加用户'">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" v-show="title == '添加用户'">添加用户</el-button>
          <el-button type="primary" @click="save" v-show="title == '编辑用户'">保存修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分页 -->
    <!-- @size-change  每页条数发生变化的时候触发 -->
    <!-- @current-change  切换页码的时候触发 -->
    <!-- :current-page  当前页码数 -->
    <!-- :page-sizes 每页可选择的条数 -->
    <!-- :page-size 当前每页显示的条数 -->
    <el-pagination
		@size-change="sizeChange"
		@current-change="currentChange"
		:current-page="page.pagenum"
		:page-sizes="[2, 5, 10, 15]"
		:page-size="page.pagesize"
		layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>
 </div>
</template>

<script>
export default {
 data() {
    return {
      title: "添加用户",
      editId: "", // 编辑的id
      total: 0, // 总条数
      page: {
        query: "",// 查询的数据
        pagenum: 1, // 当前页码
        pagesize: 10, // 每页的条数
      },
      users: [], // 用户列表
      dialogVisible: false, // 控制模态框显示隐藏
      ruleForm: {
        // username: "", // 用户名称
        password: "", // 用户密码
        email: "", // 邮箱
        mobile: "", // 手机号
      },
      //   {pattern: /^((0\d{2,3}-\d{7,8})|(1[345789]\d{9}))$/, message: '请输入正确的电话号码或者固话号码'}
      rules: {
        // username: [
        //   { required: true, message: '请输入用户名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ],
        // mobile: [
        //   { required: true, message: '请输入手机号', trigger: 'blur' },
        //   {pattern: /^((0\d{2,3}-\d{7,8})|(1[345789]\d{9}))$/, message: '请输入正确的电话号码或者固话号码'}
        // ],
      }
    }
  },
    filters:{  // vue的过滤器
      timer(val){
          //  val 是管道符前面的值  初始值
          // 必须要有return  返回值
          return  new Date(val * 1000).toLocaleString();
      }
    },
  // filters: {
  //   timer(val) {
  //     let time = new Date(val * 1000);
  //     //  插件 dateFormat(时间对象， 要转换的时间格式)
  //     return dateFormat(time, "yyyy年mm月dd日 hh时MM分ss秒")
  //   }
  // },
  methods: {
    getUsers() {
      this.$http.get('/api/users').then((res) => {
        console.log(res)
        this.users = res.data.data.users;
        this.total = res.data.data.total
				console.log(this.users);
      })
    },
    handleChange(id, state) {
      this.$axios.put(`users/${id}/state/${state}`).then(res => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: 'success'
          });
        } else {
          this.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
    },
    open() { // 点击添加的按钮
      // 清空输入框
      for (let i in this.ruleForm) {
        //   i 不是下标，是对象的属性名
        this.ruleForm[i] = "";
      }
      this.dialogVisible = true; // 打开模态框
      this.title = "添加用户";
    },
    submitForm(formName) { // 添加用户
      this.$refs[formName].validate((valid) => {
        if (valid) {  // 验证成功
          alert('submit!');
          //   提交添加的数据
          for (let i = 1; i <= 200; i++) {
            this.$axios.post("users", { username: '提供测试数据' + i, ...this.ruleForm }).then(res => {
              console.log(res);
              if (res.data.meta.status == 201) {
                this.$message({
                  message: '创建成功',
                  type: 'success'
                });
                this.dialogVisible = false; // 关闭模态框
                // 重新渲染页面
                this.getUsers(); // 获取用户列表

                // this.ruleForm = {};
                // 重置表单
                this.resetForm('ruleForm')
              }
            })
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {  // 重置表单
      this.$refs[formName].resetFields();
    },
    // del(id) { // 删除
    //   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {  // 点击确定的回调函数
    //     // 请求删除数据
    //     this.$http.delete(`/api/users/${id}`).then(res => {
    //       console.log(res);
    //       if (res.data.meta.status == 200) {
    //         this.$message({
    //           message: '删除成功',
    //           type: 'success'
    //         });
    //         // 调用用户列表数据
    //         this.getUsers();
    //       } else {
    //         this.$message({
    //           message: res.data.meta.msg,
    //           type: 'error'
    //         });
    //       }
    //     })
    //   }).catch(() => {  // 点击取消的回调函数
    //     this.$message({
    //       type: 'info',
    //       message: '已取消删除'
    //     });
    //   });
    // },
    edit(item) {
      console.log(item);

      // item 是点击编辑当前行的数据信息
      this.dialogVisible = true;
      this.title = "编辑用户";
      // 数据回填
      this.ruleForm.username = item.username;
      this.ruleForm.email = item.email;
      this.ruleForm.mobile = item.mobile;
      this.editId = item.id;
    },
    save() {
      this.$axios.put(`users/${this.editId}`, this.ruleForm).then(res => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: '更新成功',
            type: 'success'
          });
          // 关闭模态框
          this.dialogVisible = false;
          this.getUsers();// 重新渲染
        } else {
          this.$message({
            message: '修改失败',
            type: 'error'
          });
        }
      })
    },
    search() {  // 搜索
      this.getUsers();  // 重新渲染页面
    },
    sizeChange(val) { // 每页条数变化的时候触发
      // val 选择每页的条数
      console.log("选择每页的条数-----" + val);
      console.log("当前每页的条数-----" + this.page.pagesize);
      this.page.pagesize = val;
      // 请求数据渲染页面

      this.getUsers(); // 调用渲染页面

    },
    currentChange(val) { // 切换页码的时候触发
      // val 就是当前点击的页码数
      //   这个自己写写试试
      this.page.pagenum = val;
      // 请求数据渲染页面
      this.getUsers();

    }
  },
  created() {
    this.getUsers(); // 获取用户列表
  },
}
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 15px 0;
  .input-with-select {
    width: 60%;
  }
}
</style>
