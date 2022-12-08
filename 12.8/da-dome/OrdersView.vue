<template>
  <div>
    <h1>订单列表</h1>
    <el-card>
      <el-table :data="orders.slice((page - 1) * pagesize, page * pagesize)" border style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="order_number" label="订单编号" width="300"></el-table-column>
        <el-table-column prop="order_price" label="订单价格" width="120"></el-table-column>
        <el-table-column prop="pay_status" label="是否付款" width="120">
          <!-- 插槽 -->
          <template slot-scope="scope">
            <!-- 我们用插槽，用他的scope.row 当前行的数据信息  -->
            <el-tag type="success" v-show="scope.row.pay_status == 1">已付款</el-tag>
            <el-tag type="danger" v-show=" scope.row.pay_status ==  0">未付款</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货" width="120"></el-table-column>
        <el-table-column prop="create_time" label="下单时间" width="120">
          <!-- 插槽 -->
          <template slot-scope="scope">{{scope.row.create_time | timer}}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick" type="text" size="small">查看物流信息</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 模态框 -->
    <el-dialog title="查看物流" :visible.sync="dialogVisible" width="50%">
      <!-- 物流 Timeline 时间线 -->
      <!-- :timestamp 展示时间 -->
      <el-timeline :reverse="reverse">
        <el-timeline-item v-for="(item, i) in press" :key="i" :timestamp="item.time">{{item.context}}</el-timeline-item>
      </el-timeline>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="orders.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 0, // 总条数
      page: 1,
      pagesize: 5,
      dialogVisible: false,
      reverse: true,// 时间线的正序和倒叙
      orders: [], // 订单列表
      press: [  // 物流信息
        {
          "time": "2018-05-10 09:39:00",
          "ftime": "2018-05-10 09:39:00",
          "context": "已签收,感谢使用顺丰,期待再次为您服务",
          "location": ""
        },
        {
          "time": "2018-05-10 08:23:00",
          "ftime": "2018-05-10 08:23:00",
          "context": "[北京市]北京海淀育新小区营业点派件员 顺丰速运 95338正在为您派件",
          "location": ""
        },
        {
          "time": "2018-05-10 07:32:00",
          "ftime": "2018-05-10 07:32:00",
          "context": "快件到达 [北京海淀育新小区营业点]",
          "location": ""
        },
        {
          "time": "2018-05-10 02:03:00",
          "ftime": "2018-05-10 02:03:00",
          "context": "快件在[北京顺义集散中心]已装车,准备发往 [北京海淀育新小区营业点]",
          "location": ""
        },
        {
          "time": "2018-05-09 23:05:00",
          "ftime": "2018-05-09 23:05:00",
          "context": "快件到达 [北京顺义集散中心]",
          "location": ""
        },
        {
          "time": "2018-05-09 21:21:00",
          "ftime": "2018-05-09 21:21:00",
          "context": "快件在[北京宝胜营业点]已装车,准备发往 [北京顺义集散中心]",
          "location": ""
        },
        {
          "time": "2018-05-09 13:07:00",
          "ftime": "2018-05-09 13:07:00",
          "context": "顺丰速运 已收取快件",
          "location": ""
        },
        {
          "time": "2018-05-09 12:25:03",
          "ftime": "2018-05-09 12:25:03",
          "context": "卖家发货",
          "location": ""
        },
        {
          "time": "2018-05-09 12:22:24",
          "ftime": "2018-05-09 12:22:24",
          "context": "您的订单将由HLA（北京海淀区清河中街店）门店安排发货。",
          "location": ""
        },
        {
          "time": "2018-05-08 21:36:04",
          "ftime": "2018-05-08 21:36:04",
          "context": "商品已经下单",
          "location": ""
        }
      ]
    }
  },
  methods: {
    getOrders() {
      this.$axios.get("/api/orders").then(res => {
        console.log(res);
        this.orders = res.data.data.goods;
        this.total = res.data.data.total;
				console.log(this.orders);
      })
    },
    handleClick() {
      this.dialogVisible = true;
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
      this.getOrders()
  },
}
</script>
