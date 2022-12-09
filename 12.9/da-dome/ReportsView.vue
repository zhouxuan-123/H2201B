<template>
    <div>
        <h1>数据报表</h1>
        <!-- 第一步 必须要设置宽高 -->
        <div id="main"></div>
    </div>
</template>


<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            option:{}, // 数据报表
        }
    },
    watch:{
        option:{
            handler(){ // option一旦发生变化就会触发handler函数
                this.getLine();
            }
        }
    },
    methods: {
        // getOption(){ // 请求折线图数据
        //     this.$axios.get("/api/reports").then(res=>{
        //         console.log(res);
        //         this.option = res.data.data;
        //         console.log('AAAAAAAAA');
        //     })
        // },
        // getLine(){ // 绘制堆叠面积折线图
        //     // 初始化
        //     let mychart = this.$echarts.init(document.getElementById("main"));
        //     mychart.setOption(this.option);
        //     console.log('BBBBBBBBBBB');
        // }
    },
    created() { // 渲染之前
        this.getOption();
    },
    mounted() { // 渲染之后
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '用户来源'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['华东', '华南', '华北', '西部', '其他']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '华东',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '华南',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '华北',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '西部',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '其他',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

option && myChart.setOption(option);

    },
}
</script>
<style lang="scss">
#main{
	width: 800px;
	height: 500px;
}
</style>
