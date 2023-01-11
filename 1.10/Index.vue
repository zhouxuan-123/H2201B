<template>
  <div>
    <el-container>
      <!-- 左边菜单栏 -->
      <el-aside :width="isCollapse == false ? '150px' : '65px'" class="left">
        <img src="../assets/1.png" alt=""  class="img1"/>
        <img src="../assets/2.png" alt="" class="img2">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#497afa"
          text-color="#fff"
          active-text-color="#fff"
          :collapse="isCollapse"
          router
        >
          <el-menu-item v-for="item,index in arr" :key="index" :index="item.path" @click="change(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 头部 -->
        <el-header class="header">
            <i
            :class="isCollapse == false ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            @click="isCollapse = !isCollapse"
          ></i>
          <p>江苏传智播客教育科技股份有限公司</p>
          <el-button round class="ty" size="small">体验版</el-button>
        </el-header>
        <!-- 内容展示区 -->
        <el-main class="main">
            <div class="top">
                <el-tag
              :key="index"
              v-for="tag,index in list"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
              @click="$router.push(tag.path)"
              class="tag"
            >
              {{ tag.title }}
            </el-tag>
            </div>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          title: "首页",
          icon: "el-icon-c-scale-to-original",
          path: "/home"
        },
        {
          title: "员工",
          icon: "el-icon-edit-outline",
          path: "/staff"
        },
        {
          title: "设置",
          icon: "el-icon-s-flag",
          path: "/iso"
        },
        {
          title: "权限管理",
          icon: "el-icon-s-flag",
          path: "/Permission"
        },
        {
          title: "社保",
          icon: "el-icon-s-grid",
          path: "/basics"
        },
        {
          title: "审批",
          icon: "el-icon-s-promotion",
          path: "/tab"
        },
        {
          title: "考勤",
          icon: "el-icon-s-promotion",
          path: "/tab"
        },
        {
          title: "工资",
          icon: "el-icon-s-promotion",
          path: "/tab"
        },
        {
          title: "组织架构",
          icon: "el-icon-s-promotion",
          path: "/tab"
        }
      ],
      list: [],
      isCollapse:false
    }
  },
  methods: {
     //   面包屑||标签添加
     change(val) {
      this.list.forEach((i, index) => {
        if (i == val) {
          this.list.splice(index, 1);
        }
      });
      this.list.unshift(val);
    },
    // 面包屑删除
     handleClose(tag) {
        this.list.splice(this.list.indexOf(tag), 1);
      },
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.img1 {
  width: 100%;
}
.left {
  width: 100%;
  height: 100vh;
  background-color: #497afa;
  position: relative;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 50px;
  background-color: #4a7bfb;
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
}
i {
  margin-right: 10px;
}
.ty{
    background-color: rgba(255, 255, 255, 0.499);
    color: white;
    border: 0;
    border-radius: 10px;
    margin-left: 10px;
}
.tag{
    margin-right: 5px;
}
.top{
    width: 100%;
    height: 35px;
    background-color: white;
    border-bottom: 2px solid rgba(128, 128, 128, 0.255);
    padding-left: 10px;
    box-sizing: border-box;
}
.main{
    padding: 0;
    margin: 0;
}
.img2{
    position: absolute;
    width: 100%;
    bottom: 0;
}
</style>
