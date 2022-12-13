<template>
  <div>
    <el-dialog title="分配权限" :visible.sync="Tree" width="40%">
      <el-tree
        ref="tree"
        :data="data"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        :default-expand-all="true"
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Tree = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { treeList } from "@/api/user.js"
export default {
  components: {},
  computed: {},
  data() {
    return {
      data: [],
      defaultProps: {
        label: "authName"
      },
      Tree: false
    }
  },
  created() {
    this.Trees()
  },
  methods: {
    show() {
      this.Tree = true
    },
    Trees() {
      treeList().then((res) => {
        console.log(res)
        this.data = res.data.data
        // console.log(this.data)
      })
    },
    update() {
      this.Tree = false
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
