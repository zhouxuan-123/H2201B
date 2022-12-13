<template>
  <div>
    <h1>分类参数</h1>
    <el-card>
      <el-alert
        title="注意：只允许为三级分类设置参数"
        type="warning"
        show-icon
      ></el-alert>
      <p>选择分类：</p>
      <el-cascader
        style="width: 100%"
        v-model="idList"
        :options="cateList"
        :props="{ label: 'cat_name', value: 'cat_id' }"
        @change="handleChange"
      ></el-cascader>
      <el-tabs v-model="activeName">
        <el-tab-pane label="动态参数" name="first">
          <el-button type="primary" @click="open" :disabled="idList.length == 0"
            >添加参数</el-button
          >
          <el-table :data="paramsList" border style="width: 100%">
            <el-table-column type="index"></el-table-column>
            <el-table-column
              prop="attr_name"
              label="参数名称"
            ></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态参数" name="second">
          <el-button type="primary" @click="open" :disabled="idList.length == 0"
            >添加属性</el-button
          >
          <el-table :data="paramsList" border style="width: 100%">
            <el-table-column width="55px"></el-table-column>
            <el-table-column type="index" label="#"></el-table-column>
            <el-table-column
              prop="attr_name"
              label="属性名称"
            ></el-table-column>
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-dialog title="添加参数" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="参数名称">
          <el-input v-model="form.attr_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idList: [],
      cateList: [],
      activeName: "first",
      paramsList: [],
      dialogVisible: false,
      form: {
        attr_name: "",
        attr_sel: "many"
      }
    }
  },
  methods: {
    getCate() {
      this.$http.get("/api/categories").then((res) => {
        console.log(res)
        this.cateList = res.data.data
      })
    },
    getParams() {
      this.$$http
        .get("/api/categories/${this.idList[2]}/attributes")
        .then((res) => {
          console.log(res)
          this.paramsList = res.data.data
        })
    },
    handleChange(val) {
      console.log(val)
      if (val.length != 3) {
        this.$message({
          message: "只能为三级分类添加参数",
          type: "error"
        })
        this.idList = []
      } else {
        this.getParams()
      }
    },
    open() {
      this.dialogVisible = true
    },
    onSubmit() {
      this.$axios
        .post(`categories/${this.idList[2]}/attributes`, this.form)
        .then((res) => {
          console.log(res)
          if (res.data.meta.status == 201) {
            this.$message({
              message: "创建成功",
              type: "success"
            })
            this.dialogVisible = false
            this.getParams()
          }
        })
    }
  },
  created() {
    this.getCate()
  }
}
</script>
