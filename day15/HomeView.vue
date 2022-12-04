<template>
  <div class="home">
    <el-button type="primary" @click="dialogFormVisible = true"
      >新增todolist</el-button
    >
    <el-calendar>
      <template slot="dateCell" slot-scope="{ data }">
        <div class="list">
          <p class="aBox" :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split("-").slice(1).join("-") }}
            {{ data.isSelected ? "✔️" : "" }}
          </p>
          <ul>
            <li v-for="(item, index) in $store.state.list" :key="index">
              <div
                @click="add(index)"
                v-if="item.time == data.day && item.resource == '已完成'"
                class="over"
              >
                {{ item.name }}
              </div>
              <div
                @click="add(item)"
                v-if="item.time == data.day && item.resource == '未完成'"
                class="done"
              >
                {{ item.name }}
              </div>
            </li>
          </ul>
        </div>
      </template>
    </el-calendar>
    <!-- 编辑 -->

    <!-- 弹出框 -->
    <el-dialog title="Todolist" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="待办名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="待办时间" required>
          <el-col :span="11">
            <el-form-item prop="time">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.time"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item> </el-col
        ></el-form-item>

        <el-form-item label="待办状态" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="编辑" :visible.sync="dialogFormVisible1">
      <el-form :model="ruleForm1">
        <el-form-item label="待办名称" prop="name">
          <el-input v-model="ruleForm1.name"></el-input>
        </el-form-item>
        <el-form-item label="待办时间" required>
          <el-col :span="11">
            <el-form-item prop="time">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm1.time"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item> </el-col
        ></el-form-item>
        <el-form-item label="待办状态" prop="resource">
          <el-radio-group v-model="ruleForm1.resource">
            <el-radio label="已完成"></el-radio>
            <el-radio label="未完成"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="qd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      formLabelWidth: "120px",
      ruleForm: {
        name: "",
        time: "",
        resource: "",
      },
      todoList: [],
      // 正则
      rules: {
        name: [{ required: true, message: "请输入代办名称", trigger: "blur" }],
        time: [{ required: true, message: "请选择日期", trigger: "change" }],
        resource: [
          { required: true, message: "请选择状态", trigger: "change" },
        ],
      },
      ruleForm1: {
        name: "",
        time: "",
        resource: "",
      },
    };
  },
  methods: {
    // 修改
    add(index) {
      this.dialogFormVisible1 = true;
      this.ruleForm1 = this.$store.state.list[index]
      this.ruleForm1 = index
    },
    qd() {
      this.$store.commit('qd', this.ruleForm1)
      this.dialogFormVisible1 = false
    },
    // 添加
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          // alert('submit!');
          let date = new Date(this.ruleForm.time);
          let year = date.getFullYear();
          let month = date.getMonth() + 1;
          month = month < 10 ? "0" + month : month;
          let day = date.getDate();
          day = day < 10 ? "0" + day : day;
          let dalist = year + "-" + month + "-" + day;
          // console.log(dalist);
          let obj = {
            name: this.ruleForm.name,
            time: dalist,
            resource: this.ruleForm.resource,
          };
          this.$store.commit("add", obj);
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.el-form {
  width: 80%;
}
.line {
  text-align: center;
}
.aBox {
  display: inline-block;
}
.over {
  text-align: center;
  background-color: greenyellow;
}
.done {
  background-color: red;
  text-align: center;
}
</style>
