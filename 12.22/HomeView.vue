<template>
  <div class="home">
    <h2>联心菜市场</h2>
    <div class="caBox">
      <div class="daBox">
        <div class="aBox">
          <div class="biaoOne">
            <h3>这里是标题1</h3>
            <p>6890.69<span>元</span></p>
            <span>小标题：文字 小标题：文字</span>
          </div>
          <div class="biaoOne">
            <h3>这里是标题2</h3>
            <p>6090.99<span>元</span></p>
            <span>小标题：文字 小标题：文字</span>
          </div>
          <div class="biaoOne">
            <h3>这里是标题3</h3>
            <p>2890.39<span>元</span></p>
            <span>小标题：文字 小标题：文字</span>
          </div>
          <div class="biaoOne">
            <h3>这里是标题4</h3>
            <p>7590.15<span>元</span></p>
            <span>小标题：文字 小标题：文字</span>
          </div>
        </div>
        <div class="bBox">
          <div id="main"></div>
          <div id="main1"></div>
        </div>
        <div class="cBox">
          <div id="main2"></div>
          <div class="dBox">
            <h3>这里是标题</h3>
            <div class="dfBox">
              <div class="kBox">
                <h1>23</h1>
                <span>今日收益比例</span>
              </div>
              <div class="kBox">
                <h1>107</h1>
                <span>本月收益比例</span>
              </div>
              <div class="kBox">
                <h1>107</h1>
                <span>历史收益比例</span>
              </div>
              <div class="kBox">
                <h1>23</h1>
                <span>今日收益比例</span>
              </div>
              <div class="kBox">
                <h1>23</h1>
                <span>本月收益比例</span>
              </div>
              <div class="kBox">
                <h1>23</h1>
                <span>历史收益比例</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div id="main3"></div>
        <div class="topBox">
          <h3>这里是标题</h3>
          <el-table :data="tableData" style="width: 100% ">
            <el-table-column prop="date" label="用户"> </el-table-column>
            <el-table-column prop="age" label="类型号"> </el-table-column>
            <el-table-column prop="address" label="类别一"> </el-table-column>
            <el-table-column prop="password" label="类别二"> </el-table-column>
            <el-table-column prop="name" label="类别三"> </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      tableData: [
        {
          date: '张三',
          age: 13,
          address: '类型一',
          password: '类型二',
          name: '类型三'
        },
        {
          date: '张三',
          age: 14,
          address: '类型一',
          password: '类型二',
          name: '类型三'
        },
        {
          date: '张三',
          age: 15,
          address: '类型一',
          password: '类型二',
          name: '类型三'
        },
        {
          date: '张三',
          age: 16,
          address: '类型一',
          password: '类型二',
          name: '类型三'
        },
        {
          date: '张三',
          age: 17,
          address: '类型一',
          password: '类型二',
          name: '类型三'
        }
      ]
    }
  },
  mounted() {
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    var chartDom2 = document.getElementById('main2')
    var myChart2 = echarts.init(chartDom2)
    var option2

    var chartDom3 = document.getElementById('main3')
    var myChart3 = echarts.init(chartDom3)
    var option3

    option3 = {
      title: {
        text: '这里是标题',
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

    option3 && myChart3.setOption(option3)

    option2 = {
      title: {
        text: '这里是标题',
				textStyle: {
      		color: '#fff'
    		}
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
          color: '#742C5A'
        },
        {
          data: [200, 130, 204, 248, 175, 197, 220],
          type: 'line',
          color: '#09C4E4'
        }
      ]
    }

    option2 && myChart2.setOption(option2)

    var chartDom1 = document.getElementById('main1')
    var myChart1 = echarts.init(chartDom1)
    var option1

    option1 = {
      title: {
        text: '这里是标题',
				textStyle: {
      		color: '#fff'
    		}
      },
      dataset: {
        source: [
          ['score', 'amount', 'product'],
          [89.3, 58212, 'Matcha Latte'],
          [57.1, 78254, 'Milk Tea'],
          [74.4, 41032, 'Cheese Cocoa'],
          [50.1, 12755, 'Cheese Brownie'],
          [89.7, 20145, 'Matcha Cocoa'],
          [68.1, 79146, 'Tea'],
          [19.6, 91852, 'Orange Juice'],
          [10.6, 101852, 'Lemon Juice'],
          [32.7, 20112, 'Walnut Brownie']
        ]
      },
      grid: { containLabel: true },
      xAxis: { name: 'amount' },
      yAxis: { type: 'category' },
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'amount',
            // Map the "product" column to Y axis
            y: 'product'
          }
        }
      ]
    }

    option1 && myChart1.setOption(option1)

    let dataAxis = [
      220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133,
      334, 198, 123, 125, 220
    ]
    // prettier-ignore
    let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
    let yMax = 500
    let dataShadow = []
    for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax)
    }
    option = {
      title: {
        text: '这里是标题',
        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
				textStyle: {
      		color: '#fff'
    		}
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          },
          data: data
        }
      ]
    }
    // Enable data zoom when user click bar.
    const zoomSize = 6
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)])
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      })
    })

    option && myChart.setOption(option)
  }
}
</script>
<style lang="scss" scoped>
.home {
  // text-align: center;
  width: 100%;
  height: 100%;
  background-image: url(../assets/bg2.jpg);
  background-size: 100%;
}
.daBox {
  padding: 20px;
}
h2 {
  margin-left: 690px;
  padding: 15px;
  color: #0ae5f3;
}
img {
  width: 100%;
  height: 100%;
}
.biaoOne {
  padding: 15px;
  width: 200px;
  height: 100px;
  border: 1px solid #0259b8;
  margin-left: 15px;
}
h3 {
  color: #fff;
}
p {
  margin-top: 10px;
  color: #0ae5f3;
  font-size: 30px;
}
span {
  font-size: 10px;
  color: #fff;
}
.aBox {
  display: flex;
}
#main {
  padding: 15px;
  width: 500px;
  height: 200px;
  border: 1px solid #0259b8;
  color: #fff;
  margin-top: 15px;
  margin-left: 15px;
}
#main1 {
  padding: 13px;
  border: 1px solid #0259b8;
  width: 400px;
  height: 200px;
  margin-top: 15px;
  margin-left: 15px;
}
#main2 {
  padding: 15px;
  width: 500px;
  height: 193px;
  border: 1px solid #0259b8;
  color: #fff;
  margin-top: 15px;
  margin-left: 15px;
}
.dBox {
  padding: 11px;
  border: 1px solid #0259b8;
  width: 400px;
  height: 200px;
  margin-top: 15px;
  margin-left: 15px;
}
.bBox {
  display: flex;
}
.cBox {
  display: flex;
}
.kBox {
  margin-top: 20px;
  text-align: center;
  margin-left: 45px;
}
h1 {
  color: #0bd5ec;
}
.dfBox {
  display: flex;
  flex-wrap: wrap;
}
.caBox {
  display: flex;
}
#main3 {
  padding: 15px;
  border: 1px solid #0259b8;
  width: 440px;
  height: 230px;
  margin-top: 20px;
  // margin-left: 15px;
}
.topBox {
  padding: 10px;
  border: 1px solid #0259b8;
  width: 440px;
  height: 314px;
  margin-top: 20px;
  // margin-left: 15px;
}
.el-table::v-deep{
  // background-color: #00219C !important;
	background: #00219C !important;
}
</style>
