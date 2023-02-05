<template>
  <div class="pemission">
    <el-card class="box-card" style="text-align: right">
      <el-button type="primary" @click="add(1)">添加权限</el-button>
    </el-card>
    <el-table
      :data="$store.state.permission.list"
      style="width: 100%; margin-top: 20px"
      row-key="id"
      border
      lazy
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="code" label="标识" align="center">
      </el-table-column>
      <el-table-column prop="description" label="描述" align="center">
      </el-table-column>
      <el-table-column prop="address" label="操作" align="center">
        <template slot-scope="scope">
          <div class="btn">
            <span v-if="scope.row.pid == '0'" @click="add(2)">添加</span>
            <span @click="add(scope.row)">编辑</span>
            <span @click="del(scope.row)">删除</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <addPer v-if="addStatus" ref="addPer" @foo="foo" />
  </div>
</template>

<script>
import addPer from './addPer'
export default {
  data() {
    return {
      addStatus: false
    }
  },
  methods: {
    /**删除 */
    del(val) {
      console.log(val)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.commit('permission/del', val)
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    /**添加 */
    add(info) {
      this.addStatus = true
      this.$nextTick(() => {
        this.$refs.addPer.init(info)
      })
    },
    /**关闭模态框 */
    foo() {
      this.addStatus = false
    }
  },
  created() {
    /**调用接口，请求数据 */
    this.$store.dispatch('permission/getList')
  },
  mounted() {},
  components: { addPer },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.pemission {
  padding: 30px;
}
.el-table {
  font-size: 20px;
}
.btn {
  span {
    margin: 0 10px;
    color: #409eff;
  }
  span:hover {
    cursor: pointer;
  }
}
</style>
