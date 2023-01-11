<template>
  <div class="box">
    <div class="login">
        <p class="l-top">i H R M 后 台 登 录 系 统</p>
      <el-form ref="form" :model="form">
        <el-form-item >
          <el-input v-model="form.name" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.password" prefix-icon="el-icon-s-goods"><i slot="suffix" class="el-input__icon el-icon-search"></i></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="l-btm">账号：13800000002   密码：123456</p>
      <el-button type="warning">学习文档</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        form:{
            name:'13800000002',
            password:'123456'
        }
    }
  },
  methods: {
    onSubmit() {
        console.log('submit!');
        this.$router.push('/index')
      }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/login.jpg);
  overflow: hidden;
}
.login{
    width: 370px;
    // height: 400px;
    margin: 240px auto;
    text-align: center;
}
.l-top{
    margin-bottom: 20px;
    font-size: 32px;
    color: white;
}
.l-btm{
    color: white;
}
.btn{
    width: 100%;
}
</style>
