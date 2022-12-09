<template>
  <div>
    <h1>商品列表</h1>
    <el-card>
			<div style="margin-top: 15px;" class="box">
        <el-input placeholder="请输入内容" v-model="nameinput" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <el-button type="primary" @click="$router.push({path:'/add'})">添加商品</el-button>
      </div>
      <!-- 表格 -->
      <el-table :data="goods.slice((page - 1) * pagesize, page * pagesize)" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="250"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格"></el-table-column>
        <el-table-column prop="goods_number" label="商品数量"></el-table-column>
        <el-table-column prop="add_time" label="添加时间">
          <!-- 插槽 -->
          <template slot-scope="scope">
            <!-- | 管道符  -->
            <!-- | 管道符后面是过滤器的名称 -->
            {{ scope.row.add_time | filtime }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
					<template slot-scope="scope">
						<el-button type="primary" @click="edit(scope.row)" size="small" icon="el-icon-edit"></el-button>
            <el-button type="danger" @click="del(scope.$index)" size="mini" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 分页器 -->
		<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="goods.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0,
      goods: [], // 商品列表
			page: 1,
      pagesize: 5,
			nameinput:'',
    }
  },
  filters: { // 选项对象  ，和data统计
    filtime(val) {  // 过滤器名称
        //  val 指的是 管道符前面的值  是时间戳 是秒数
        // 必须要有返回值
        let  time = new Date(val * 1000).toLocaleString();
        return time;
    },
  },
  methods: {
		del(index) {
				this.goods.splice(index,1);
		},
    getGoods() {
      this.$http.get("/api/goods").then(res => {
        console.log(res);
        this.goods = res.data.data.goods;
        this.total = res.data.data.total
      })
    },
		// 搜索
    search() {
      console.log(this.flag);
      this.goods = this.goods.filter(
        (item) =>
          item.goods_name.includes(this.nameinput)
      );
    },
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
    this.getGoods();
  },
}
</script>
