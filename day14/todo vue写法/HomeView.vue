<template>
  <div class="home">
    <el-button type="primary" @click="dialogFormVisible = true">新增todolist</el-button>
    <el-calendar v-model="value">
      <el-button type="success">完成作业</el-button>
      <el-button type="danger">打游戏</el-button>
    </el-calendar>
    <!-- 弹出框 -->
    <el-dialog title="" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="事情名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="待办事项时间" :label-width="formLabelWidth">
    <el-col :span="8">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="1">·</el-col>
    <el-col :span="8">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="事项状态" :label-width="formLabelWidth">
    <el-radio-group v-model="form.resource">
      <el-radio label="待办"></el-radio>
      <el-radio label="已办"></el-radio>
    </el-radio-group>
  </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">立即创建</el-button>
  </div>
</el-dialog>
  </div>
</template>

<script>

export default {
    data() {
      return {
        value: new Date(),
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="scss">
.el-form{
  width: 80%;
}
.line{
  text-align: center;
}
</style>
