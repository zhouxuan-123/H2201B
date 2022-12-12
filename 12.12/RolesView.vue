<template>
  <div>
    <h1>角色列表</h1>
    <el-card>
      <el-button type="primary" @click="open">添加角色</el-button>
      <!-- 表格 -->
      <el-table :data="roles" border style="width: 100%">
        <!-- type="expand" 展开行 -->
        <el-table-column type="expand">
          <!-- 插槽 -->
          <template slot-scope="scope">
            <!-- scope.row 当前行的数据信息 -->
            <p v-if="scope.row.children.length != 0">
              <span v-for="(item,i) in scope.row.children" :key="i">
                <el-tag>{{item.authName}}</el-tag>
                <span v-for="(ele, index) in item.children" :key="index">
                    <el-tag>{{ele.authName}}</el-tag>
                    <span v-for="(row, j) in ele.children" :key="j">
                        <el-tag type="success" >{{row.authName}}</el-tag>
                    </span>
                </span>
              </span>
            </p>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
						<el-button type="primary" @click="edit(scope.row)" size="small" icon="el-icon-edit">编辑</el-button>
            <el-button type="danger" @click="del(scope.$index)" size="mini" icon="el-icon-delete">删除</el-button>
            <el-button type="warning" @click="assign(scope.row.id)" size="mini" icon="el-icon-setting">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹出框 -->
    <el-dialog title="添加角色" :visible.sync="dialogVisible" width="50%">
      <!-- 带验证功能的表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 弹出框2 -->
    <el-dialog title="分配权限" :visible.sync="dialogTree" width="50%">
      <!-- // Tree 树形控件 -->
      <!-- :data 是树形控件要展示的数据 -->
      <!-- show-checkbox 显示复选框  -->
      <!-- default-expand-all   默认展开所有的项目 -->
      <!-- node-key="id"  相当于v-for :key  唯一性，加快渲染 -->
      <!-- highlight-current 高亮当前选中节点 -->
      <!-- :props  配置选项 展示文字信息是label  我们后台展示的文字信息 authName -->
      <el-tree :data="trees" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps"></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      roles: [], // 角色列表
      dialogVisible: false, // 控制模态框显示隐藏
      ruleForm: {
        roleName: "",
        roleDesc: "",
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
      },
      dialogTree: false, // 分配权限弹出框
      trees: [], // 所有权限
      defaultProps: {
        children: 'children',
        label: 'authName' // 标题信息
      },
      roleId: "", // 修改权限id
    }
  },
  methods: {
    getRoles() { // 获取角色列表
      // 请求角色列表数据
			this.$http.get('/api/roles').then((res) => {
        console.log(res);
        this.roles = res.data.data;
      })
    },
    open() { // 点击添加角色按钮
      // 清空
      for (let i in this.ruleForm) {
        this.ruleForm[i] = ""
      }
      this.dialogVisible = true;
    },
    submitForm(formName) { // 点击提交
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!');
          // 向服务器提交数据
          for (let i = 0; i <=100; i++ ){
              this.$http.post("roles", {roleName:"测试角色名称" + i,roleDesc:"测试角色描述" + i}).then(res => {
            console.log(res);
            if (res.data.meta.status == 200) {
              this.$message({
                message: '创建成功',
                type: 'success'
              });
              // 关闭模态框
              this.dialogVisible = false;
              //   渲染数据
              this.getRoles();
              // //   清空模态框
              //     this.resetForm('ruleForm')
            } else {
              this.$message({
                message: '创建失败',
                type: 'error'
              });
            }
          })
          }


        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) { // 点击重置按钮
      this.$refs[formName].resetFields();
    },
		edit(item) {
      console.log(item);

      // item 是点击编辑当前行的数据信息
      this.dialogVisible = true;
      this.title = "编辑用户";
      // 数据回填
			this.ruleForm.roleName = item.roleName,
      this.ruleForm.roleDesc = item.roleDesc,
      this.editId = item.id;
    },
    del(index) {
				this.roles.splice(index,1);
		},
    assign(id) { // 分配权限
      // 弹出模态框
      this.dialogTree = true;
      this.roleId = id;
    },
    getRights() { // 获取所有权限列表  树状结构
      this.$axios.get("rights/tree").then(res => {
        console.log(res);
        this.trees = res.data.data;
      })
    },
    save() { // 确定修改权限
      // 获取半选中的id组成的数组
      console.log(this.$refs.tree.getHalfCheckedKeys());

      // 获取全选中的id组成的数组；
      // this.$refs.tree  就相当于 getElementById("tree")
      console.log(this.$refs.tree.getCheckedKeys());

      let arr1 = this.$refs.tree.getHalfCheckedKeys();
      let arr2 = this.$refs.tree.getCheckedKeys();

      this.$axios.post(`roles/${this.roleId}/rights`, { rids: [...arr1, ...arr2].join(",") }).then(res => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: '更新成功',
            type: 'success'
          });
          // 关闭模态框
          this.dialogTree = false;
          // 渲染页面
          this.getRoles();
        } else {
          this.$message({
            message: '更新失败',
            type: 'error'
          });
        }
      })

    }
  },
  created() {
    this.getRoles();
    this.getRights(); // 获取权限列表
  },
}
</script>
