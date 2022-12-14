<template>
  <div>
    <el-card class="box-card">
      <div>
        <div id="main"></div>
				<div id="item"></div>
				<div id="list"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {}
  },
  methods: {
  },
  created() {},
  mounted() {
		var chartDomm = document.getElementById('list');
		var myCharte = echarts.init(chartDomm);
		var optione;

    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option
		var chartDoms = document.getElementById('item');
		var myCharts = echarts.init(chartDoms);
		var options;

optione = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
};

optione && myCharte.setOption(optione);


		options={
			title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}
options && myCharts.setOption(options);

    option = {
			color: ['#D4716E', '#6D7C87', '#90BCC2', '#E1A793', '#B2D8C6'],
      title: {
        text: "用户来源"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985"
          }
        }
      },
      legend: {
        data: ["华东", "华南", "华北", "西部", "其他"]
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
      		boundaryGap: false,
      		data: ['2017-12-27', '2017-12-28', '2017-12-29', '2017-12-30', '2017-12-31', '2018-1-1']
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "华东",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [2999, 3111, 4100, 3565, 3528, 6000]
        },
        {
          name: "华南",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [5090, 2500, 3400, 6000, 6400, 7800]
        },
        {
          name: "华北",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [6888, 4000, 8010, 12321, 13928, 12984]
        },
        {
          name: "西部",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [9991, 4130, 7777, 12903, 13098, 14028]
        },
        {
          name: "其他",
          type: "line",
          stack: "Total",
          label: {
            show: true,
            position: "top"
          },
          areaStyle: {},
          emphasis: {
            focus: "series"
          },
          data: [15212, 5800, 10241, 14821, 15982, 14091]
        }
      ]
    }

    option && myChart.setOption(option)
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
#main {
  width: 1000px;
  height: 500px;
}
#item{
	width: 1000px;
  height: 500px;
}
#list{
	width: 1000px;
  height: 500px;
}
</style>
