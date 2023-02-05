<template>
  <div>
    <el-dialog title="新增权限点" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="100px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" label-width="100px">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="权限描述" label-width="100px">
          <el-input v-model="form.description" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="开启" label-width="100px">
          <el-switch
            v-model="form.enVisible"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="foo">取 消</el-button>
        <el-button type="primary" @click="addOrEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'addPer',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        code: '',
        description: '',
        enVisible: false,
        pid: '',
        type: null
      }
    }
  },
  methods: {
    init(info) {
      if (info instanceof Object) {
        this.form = { ...info }
        this.dialogFormVisible = true
      } else {
        this.form.type = 2
        this.dialogFormVisible = true
      }
    },
    foo() {
      this.dialogFormVisible = false
      this.$emit('foo')
    },
    addOrEdit() {
      this.$store.dispatch('permission/addOrEdit', this.form)
      this.foo()
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
