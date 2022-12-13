<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <div class="top">
          <span>电商后台管理系统</span>
        </div>
        <div>
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409eff"
            router
            unique-opened
            :collapse="isCollapse"
          >
            <el-submenu
              :index="item.path"
              v-for="item in leftDate"
              :key="item.id"
            >
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{ item.authName }}</span>
              </template>
              <el-menu-item-group v-for="ele in item.children" :key="ele.id">
                <el-menu-item :index="'/' + ele.path">
                  <i :class="ele.icon"></i>
                  {{ ele.authName }}</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-main>
        <div class="title">
          <div class="header">
            <div>
              <i class="el-icon-s-fold" @click="isCollapse = !isCollapse"></i>
            </div>
            <el-button type="info" @click="back">退出</el-button>
          </div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="(item, index) in $route.meta"
              :key="index"
              >{{ item }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>

        <div class="right">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { removeToken } from "../../untils/auth"
export default {
  data() {
    return {
      leftDate: [],
      isCollapse: false
    }
  },
  methods: {
    back() {
      this.$confirm("此操作将退出登录，再进入需要重新登录, 是否继续?", "提示", {
        confirmButtonText: "继续",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeToken()
          this.$router.replace("/")
          this.$message({
            type: "success",
            message: "退出成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          })
        })
    }
  },
  created() {
	this.$http.send('/menus').then((res)=>{
		console.log(res);
		this.leftDate = res.data.data
	})
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>
<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
}
.home {
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #545d64;
}
.el-menu {
  border: 0;
}
.top {
  height: 50px;
  line-height: 50px;
  color: #fff;
  text-align: center;
}
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  background-color: #545c64;
  color: #fff;
}
.el-card__body,
.el-main {
  padding: 0;
}
.el-main {
  background-color: #f2f2f2;
}
.el-breadcrumb {
  margin-left: 10px;
}
.right {
  margin: 10px;
}
</style>
