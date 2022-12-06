<template>
  <div class="home">
    <div class="daBox">
      <img
        src="../assets/Saved Picturesimg-16089467163046eda5c0b16d0e5efad1bce2eec674ca7.jpg"
        alt=""
      />
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        label-width="50px"
      >
        <el-form-item prop="name">
          <el-input prefix-icon="el-icon-user" v-model="ruleForm.name">
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-goods" v-model="ruleForm.password">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(ruleForm) {
      console.log(this, 'this')
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
					this.$http({method:"post",data:this.form,url:"/api/Login"}).then((res)=>{
						console.log(res);
						// sessionStorage.setItem("token",res.token)
						// alert('submit!')
					})
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  background-image: url('../assets/xxxx.gif');
}
.daBox {
  width: 500px;
  height: 300px;
  background-color: #fff;
  text-align: center;
  margin: auto;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 10px;
}
img {
  margin-top: -50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.el-form {
  // margin-top: 30px;
  width: 450px;
}
</style>
