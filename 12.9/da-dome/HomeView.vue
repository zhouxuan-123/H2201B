<template>
  <div class="home">
    <el-container>
      <el-aside :width="isCollapse == false ? '200px' : '80px'">
        <h1>后台管理系统</h1>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu
            v-for="(item, index) in menus"
            :key="index"
						:index="item.path"
          >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <!-- 二级导航 -->
              <el-menu-item
                v-for="(ele, index) in item.children"
                :key="index"
								:index="ele.path"
                ><i :class="ele.icon"></i>{{ ele.authName }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
			<el-container>
    <el-header>
				<span @click="isCollapse = !isCollapse">
          <i :class="{ active: isCollapse }" class="el-icon-s-operation"></i>
        </span>
				<el-button type="info" @click="quit">退出</el-button>
			</el-header>
      <el-main>
				<!-- 面包屑 -->
				<el-breadcrumb separator-class="el-icon-arrow-right">
  			<el-breadcrumb-item v-for="item,index in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
				</el-breadcrumb>
				<!-- 路由容器 -->
        <router-view></router-view>
				<!-- Welcome! -->
      </el-main>
  </el-container>

    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [], // 侧边导航数据
      isCollapse: false // 控制侧边导航展开和收起
      // path: ''
    }
  },
  methods: {
    gets() {
      this.$http.get('/api/menus').then((res) => {
        console.log(res)
        this.menus = res.data.data
				console.log(this.menus);
      })

    }
  },
  created() {
    this.gets()
  }
}
</script>
<style lang="scss">
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  background-color: #545c64;
  height: 100vh;
}
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: #545c64;
  width: 100%;
  line-height: 60px;
}
h1 {
  padding: 15px 0;
  font-size: 25px;
  color: #fff;
}
span {
  color: #ccc;
}
.active {
  transform: rotate(-90deg);
  transition: all 0.5s; // 动画过度效果
}
</style>
