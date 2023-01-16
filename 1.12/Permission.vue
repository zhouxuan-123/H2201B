<template>
 <div class='yearBox'>
    <el-card class="daBox">
        <el-button type="primary">添加权限</el-button>
    </el-card>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="name"
      label="名称"
      width="300">
    </el-table-column>
    <el-table-column
      prop="code"
      label="标识"
      width="300">
    </el-table-column>
    <el-table-column
      prop="description"
      width="300"
      label="描述">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="300">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">添加</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
 data () {
 return {
    tableData:[],
    arr: [],
 }
 },
 methods: {
    getdata(){
        axios.get('/list.json').then((res)=>{
            console.log(res.data);
            this.tableData = res.data.data;
            this.arr = res.data.data;
        })
    }
 },
 created () {
    this.getdata();
 },
 mounted () {

 },
 components: {

 },
 computed: {

 },
 watch: {

 },
}
</script>

<style lang='scss' scoped>
.yearBox{
    padding: 20px;
}
.daBox{
    height: 70px;
    margin-top: 10px;
    .el-button{
        margin-left: 1190px;
    }
}
.el-table{
    margin-top: 10px;
}
</style>
