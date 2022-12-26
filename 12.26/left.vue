<template>
 <div>
    <div class="daBox">
        <p>慕课外用户总数</p>
        <span>User Total Count</span>
        <h2>1,739,919</h2>
        <div class="mBox">每日增长率:73.90%<div class="mmBox">每月增长率:117.37%</div></div>
        <div class="tBox">
            <div class="ttBox"></div>
            <div class="tttBox"></div>
        </div>
    </div>
    <div class="waiBox">
        <div class="sanBox">慕课外卖用户年龄&平均年龄<h2>30.08<span>岁</span></h2></div>
        <span class="span">Dwrbulton of Age</span>
        <div class="lBox">
            <div class="llBox"></div>
            <div class="lllBox"></div>
            <div class="llllBox"></div>
        </div>
        <ul>
            <li>0</li>
            <li>300.00</li>
            <li>600.00</li>
            <li>900.00</li>
            <li>1200.00</li>
            <li>1500.00</li>
            <li>1739.00</li>
        </ul>
        <div class="siBox">
            <h3>304.378</h3>
            <h3>505.391</h3>
            <h3>725.216</h3>
            <h3>204.934</h3><br>
        </div>
        <div class="yBox">
            <span>0.20</span>
            <span>20.30</span>
            <span>56.50</span>
            <span>>50</span>
        </div>
    </div>
    <div class="beiBox">
        <div id="main"></div>
        <div>
            <div class="taiBox">
            <div>
                <p>慕课外卖</p>
                <span>User Total</span>
            </div>
            <h2>1,365,633<span>台</span></h2>
        </div>
         <div class="siiBox">
            <h3>522.041</h3>
            <h3>417.645</h3>
            <h3>371.947</h3><br>
        </div>
        <div class="yBox">
            <span>Andirod</span>
            <span>ios</span>
            <span>PC</span>
        </div>
        </div>
    </div>
    <div class="nanBox">
        <div class="renBox">
            <img src="../assets/微信图片_20221225205817.png" alt="">
            <div>
                <p>男性用户人数</p>
                <span>User Total Count</span>
                <h3>869.913<span>万</span></h3>
            </div>
        </div>
        <div class="renBox">
            <img src="../assets/微信图片_20221225205817.png" alt="">
            <div>
                <p>女性用户人数</p>
                <span>User Total Count</span>
                <h3>870.006<span>万</span></h3>
            </div>
        </div>
    </div>
    <div id="main1"></div>
    <div id="main2"></div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
 data () {
 return {

 }
 },
 mounted () {
var chartDom2 = document.getElementById('main2');
var myChart2 = echarts.init(chartDom2);
var option2;

option2 = {
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
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};

option2 && myChart2.setOption(option2);



var chartDom1 = document.getElementById('main1');
var myChart1 = echarts.init(chartDom1);
var option1;

option1 = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 720],
      type: 'line',
      smooth: true
    },
    {
      data: [120, 532, 701, 534, 1090, 1130, 620],
      type: 'line',
      smooth: true
    }
  ]
};

option1 && myChart1.setOption(option1);



var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  backgroundColor: '#2A2B2D',
  title: {
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 274, name: 'Union Ads' },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#B4CC80',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};

option && myChart.setOption(option);
 },
}
</script>

<style lang='scss' scoped>
img{
    width: 35px;
    height: 35px;
}
.daBox{
    width: 300px;
    height: 110px;
    background-color: #424345;
    padding: 10px 20px;
    border-bottom: 5px solid #3A3B3F;
}
span{
    font-size: 3px;
    color: #fff;
}
h2{
    margin-top: 7px;
    color: #fff;
}
p{
    color: #fff;
}
.mBox{
    margin-top: 5px;
    font-size: 8px;
    display: flex;
    color: #BCDE81;
    .mmBox{
        color: #6B9636;
        margin-left: 10px;
    }
}
.tBox{
    margin-top: 8px;
    position: relative;
}
.ttBox{
    background-color: #939496;
    position: absolute;
    left: 0;
    width: 210px;
    height: 6px;
}
.tttBox{
    width: 280px;
    height: 5px;
    border: 1px solid #939496;
    position: absolute;
    left: 0;
}
.waiBox{
    background-color: #2A2B2D;
    width: 300px;
    height: 130px;
    padding: 10px 20px;
    border-bottom: 5px solid #3A3B3F;
    .span{
        display: block;
        margin-top: -10px;
    }
}
.sanBox{
    display: flex;
    color: #fff;
}
.lBox{
    display: flex;
    margin-top: 10px;
    .llBox{
        width: 100px;
        height: 5px;
        background-color: #7EA345;
    }
    .lllBox{
        height: 5px;
        width: 220px;
        background-color: #C5F177;
    }
    .llllBox{
        height: 5px;
        width: 250px;
        background-color: #F8FB9D;
    }
}
ul{
    margin-top: 10px;
    display: flex;
    li{
        list-style: none;
        color: #ccc;
        font-size: 5px;
        margin-left: 7px;
    }
}
.siBox{
    display: flex;
    h3{
        color: #fff;
        font-size: 15px;
        margin-left: 10px;
    }
}
.yBox{
    span{
        margin-left: 35px;
    }
}
.beiBox{
    background-color: #2A2B2D;
    width: 300px;
    height: 90px;
    padding: 10px 20px;
    border-bottom: 5px solid #3A3B3F;
    display: flex;
}
.taiBox{
    display: flex;
}
#main{
    width: 100px;
    height: 100px;
}
.siiBox{
    display: flex;
    margin-top: 10px;
    h3{
        color: #fff;
        font-size: 15px;
        margin-left: 10px;
    }
}
.nanBox{
    background-color: #2A2B2D;
    width: 300px;
    height: 60px;
    padding: 10px 20px;
    border-bottom: 5px solid #3A3B3F;
    display: flex;
}
.renBox{
    display: flex;
}
#main1{
    background-color: #2A2B2D;
    width: 300px;
    height: 60px;
    padding: 10px 20px;
    border-bottom: 5px solid #3A3B3F;
}
#main2{
    background-color: #2A2B2D;
    width: 300px;
    height: 56px;
    padding: 10px 20px;
    border-bottom: 5px solid #3A3B3F;
}
h3{
    color: #fff;
}
</style>
