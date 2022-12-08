<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>权限列表</h1>
    <el-card>
      <!-- 表格 -->
      <el-table :data="list" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="authName" label="权限名称"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
        <el-table-column prop="level" label="权限等级">
            <!-- 插槽 -->
            <template slot-scope="scope">
                <!-- scope.row  当前行的数据信息 -->
                <el-tag v-show="scope.row.level == 0">一级</el-tag>
                <el-tag v-show="scope.row.level == 1" type="success">二级</el-tag>
                <el-tag v-show="scope.row.level == 2" type="warning">三级</el-tag>
            </template>
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [], // 权限列表
    }
  },
  created() {
    this.$http.get("/api/list").then(res => {
      console.log(res);
      this.list = res.data.data;
    })
  },
}
</script>
