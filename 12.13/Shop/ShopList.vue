<template>
	<div>
		<!-- <h1>商品列表</h1> -->
<el-card class="box-card">
  <el-input style="width:500px" placeholder="请输入内容" v-model="value" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
	<el-button type="primary" style="margin-left: 15px;" @click="$router.push('/shopadd')">添加用户</el-button>
<el-table
    :data="shoplist"
    style="width: 100%">
    <el-table-column
      label="#"
      width="60"
			type="index">
    </el-table-column>
    <el-table-column
      label="商品名称"
			prop="goods_name" width="500">
    </el-table-column>
    <el-table-column
      label="商品价格"
			prop="goods_price">
    </el-table-column>
    <el-table-column
      label="商品重量"
			prop="goods_weight">
    </el-table-column>
    <el-table-column
      label="创建时间"
			prop="add_time">
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
			shoplist:[],
			value:''
		}
	},
	methods: {
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
this.$http.send('/goods').then(res=>{
						console.log(res);
						this.shoplist=res.data.data.goods
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
