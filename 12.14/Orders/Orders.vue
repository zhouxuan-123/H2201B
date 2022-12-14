<template>
	<div>
		<!-- <h1>订单管理</h1 -->
		<el-card class="box-card">
  <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
<el-table
    :data="orderslist"
    style="width: 100%">
    <el-table-column
      label="#"
      width="60"
			type="index">
    </el-table-column>
    <el-table-column
      label="订单编号"
			prop="order_number">
    </el-table-column>
    <el-table-column
      label="订单价格"
			prop="order_price">
    </el-table-column>
    <el-table-column
      label="是否付款"
			prop="pay_status">
    </el-table-column>
    <el-table-column
      label="是否发货"
			prop="is_send">
    </el-table-column>
    <el-table-column
      label="下单时间"
			prop="create_time">
    </el-table-column>

    <el-table-column label="操作">
			<template slot-scope="scope">
					<el-button type="primary" size="mini" icon="el-icon-edit"
						@click="handleEdit(scope.row)"></el-button>
					<el-button type="danger" size="mini" icon="el-icon-delete"
						@click="handleDelete(scope.row.id)"></el-button>
				</template>
    </el-table-column>
  </el-table>

</el-card>
 </div>
</template>

<script>
import { DelUser } from '@/API/httpApi'
export default {
	data () {
		return {
orderslist:[],
value:''
		}
	},
	methods: { 
		/**编辑回填 */
		// handleEdit(obj) {
		// 	this.$refs.addusers.htbackfill(obj)
		// },
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
	},
	created () {
this.$http.send('/orders').then(res=>{
	console.log(res);
						this.orderslist=res.data.data.goods
				})
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
</style>
