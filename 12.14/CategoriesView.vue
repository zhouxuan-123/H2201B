<template>
  <div class="box">
    <el-button type="primary" @click="dialogFormVisible = true">添加分类</el-button>
    <el-table
      :data="tableData.slice((page - 1) * pagesize, page * pagesize)"
      border
      style="width: 100%"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      row-key="cat_id"
    >
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="cat_name" label="分类名称"> </el-table-column>
      <!-- <el-table-column label="是否有效">
        <template slot-scope="scope">
          <el-button type="success" icon="el-icon-check" circle size="mini"></el-button>
        </template>
      </el-table-column> -->
      <el-table-column label="排序">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" v-show="scope.row.cat_level == 0">一级</el-button>
          <el-button type="success" size="mini" v-show="scope.row.cat_level == 1">二级</el-button>
          <el-button type="warning" size="mini" v-show="scope.row.cat_level == 2">三级</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size='mini' @click="edit(scope.row,scope.$index)">编辑</el-button>
          <!-- <el-button type="danger" icon="el-icon-delete" size='mini' @click="del(scope.$index)">删除</el-button> -->
					<el-button type="danger" size="mini" icon="el-icon-delete"
						@click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<!-- 添加 -->
    <el-dialog title="添加商品分类" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth" required>
          <el-input v-model="form.cat_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" :label-width="formLabelWidth">
          <el-cascader :options="tableData" :props="obj" clearable></el-cascader>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
		<!-- 修改 -->
    <el-dialog title="修改分类" :visible.sync="dialogFormVisible1">
      <el-form :model="form1">
				<el-form-item label="详细信息" :label-width="formLabelWidth" required>
          <el-input v-model="form1.cat_name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
<!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length"
    >
    </el-pagination>
  </div>
</template>

<script>
import { DelUser } from '@/API/httpApi'
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      form: {
        cat_name: '',
        region: ''
      },
      form1: {
        cat_name: ''
      },
      formLabelWidth: '100px',
			page: 1,
      pagesize: 5,
      total: 0,
			obj:{
				expandTrigger:'hover',
				checkStrictly:true,
			value:'cat_id',
			label:'cat_name',
			children:'children'
			},
			Id:-1
    }
  },
  methods: {
		add(){
			this.tableData.push({...this.form,cat_level:0})
			this.dialogFormVisible=false
		},
		edit(row,index){
			this.dialogFormVisible1=true
			this.form1.cat_name=row.cat_name
			this.Id=index
		},
		update(){
			this.tableData[this.Id].cat_name=this.form1.cat_name
				this.dialogFormVisible1=false
		},
		/**删除用户 */
		handleDelete(id) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				/**删除接口 */
				DelUser(id).then(() => { })
				this.lists = this.lists.filter(item => item.id != id)
				this.getlist()
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});

		}
		,
		// 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
    },
	},
  created() {
    this.$http.get('./api/categories').then((res) => {
      console.log(res)
      this.tableData = res.data.data.result
			this.total=res.data.data.total
    })
  },
  mounted() {},
  components: {},
  computed: {
	},
  watch: {}
}
</script>

<style lang='scss' scoped>
.box {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
</style>
