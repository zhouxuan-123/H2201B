<template>
  <div class="home">
    <img src="../../../public/xxxx.gif" alt="" class="img" />
    <div class="login">
      <img src="../../assets/Saved Picturesimg-16089467163046eda5c0b16d0e5efad1bce2eec674ca7.jpg" alt="" class="img1" />

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密  码" prop="password">
          <el-input v-model="ruleForm.password" show-password></el-input>
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
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      // console.log(this ,'48');
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            url: "/api/login",
            method: "post",
            data: this.ruleForm
          }).then((res) => {
            console.log(res)
            /***判断响应以及状态码 */
            if (res && res.data.meta.status == 200) {
              /**消息提示登陆成功 */
              this.$notify({
                title: "成功",
                message: "登陆成功，欢迎光临",
                type: "success",
                duration: 3000
              })
              /**跳转 */
              this.$router.replace("/")
            } else {
              this.$notify.error({
                title: "错误",
                message: res.data.meta.msg
              })
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  position: fixed;
}
.img {
  width: 100%;
  height: 100%;
}
.img1 {
  width: 100px;
  height: 100px;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
  border-radius: 100px;
}
.login {
	background-color: #fff;
  width: 500px;
  height: 300px;
  // background-color: rgba(123, 123, 123, 0);
  margin: 100px auto;
  position: absolute;
  top: 150px;
  left: calc(50% - 250px);
  padding: 25px;
  border-radius: 10px;
}
.el-form {
  margin-top: 60px;
}
</style>
