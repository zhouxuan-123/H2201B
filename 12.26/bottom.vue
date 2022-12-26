<template>
  <div class="boBox">
    <div>
      <div class="dingBox">
        <div class="center">
          <ul>
            <li class="AllBox">订单量</li>
            <li>销售额</li>
            <li>用户名</li>
            <li>退单量</li>
          </ul>
        </div>
        <div class="ssBox">
          <div class="luBox">
            <p>实时订单趋势图</p>
            <span>Taday's Solos</span>
            <h2>23,242</h2>
            <span>周围比增长率</span>
            <div class="seBox">2.32%</div>
          </div>
          <div id="main11"></div>
        </div>
        <div class="imgwxBox">
          <img src="../assets/微信图片_20221226202624.png" alt="" />
        </div>
      </div>
    </div>
    <div class="diBox">
        <p>地区商家销售排行</p>
        <img src="../assets/微信图片_20221226203656.png" alt="">
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    var chartDom = document.getElementById("main11");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: "category",
        data: [
          "13:53:34",
          "13:50:43",
          "13:53:2",
          "13:54:12",
          "13:54:32",
          "13:54:42",
          "13:54:53",
          "13:55:4",
          "13:56:13",
          "13:55:23",
          "13:55:32",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [1220, 932, 901, 1134, 1290, 730, 920, 870, 1100, 600, 1180],
          type: "line",
          smooth: true,
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.boBox {
  display: flex;
}
.center {
  margin-left: 10px;
  display: flex;
  width: 720px;
  background-color: #35383f;
  margin-top: 10px;
  height: 30px;
  ul {
    display: flex;
    li {
      text-align: center;
      line-height: 30px;
      list-style: none;
      color: #fff;
      width: 165px;
    }
    .AllBox {
      background-color: #b7ce86;
    }
  }
}
.ssBox {
  padding: 10px;
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  width: 700px;
  background-color: #424345;
  height: 110px;
  p {
    color: #fff;
  }
  span {
    font-size: 10px;
    color: #fff;
  }
  h2 {
    color: #fff;
  }
  .seBox {
    color: #b1d17a;
  }
}
#main11 {
  width: 580px;
  height: 200px;
  margin-top: -50px;
}
.imgwxBox {
  margin-top: 5px;
  margin-left: 10px;
  display: flex;
  width: 720px;
  background-color: #424345;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
  }
}
.diBox{
    padding: 10px;
    width: 425px;
    background-color: #363636;
    height: 205px;
    margin-top: 10px;
    margin-left: 10px;
    p{
        color: #fff;
    }
    img{
        width: 425px;
        height: 190px;
    }
}
</style>
