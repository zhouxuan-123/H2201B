<template>
  <div>
    <el-card shadow="always" class="card">
      <div class="c-one">
        <img src="../assets/img-1620346492054bfee0706218b987d50aceceaf0db08b9.jpg" alt="" class="img1" />
        <div class="c-two">
          <p>早安，1，祝你开心每一天!</p>
          <p>1 | 传智播客-总裁办</p>
        </div>
      </div>
    </el-card>

    <div class="content">
      <div class="c-left">
        <el-card shadow="always">
          <div class="c-top">工作日历</div>
          <el-calendar v-model="value"> </el-calendar>
        </el-card>
        <el-card shadow="always"> 
          <h3>公告</h3>
          <el-divider></el-divider>
          <div class="font">
            <img src="../assets/apple.jpeg" alt="" />
            <div>
              <p>
                <span>朱继柳 </span>发布了第1期"传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 15:21:38</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="font">
            <img src="../assets/apple.jpeg" alt="" />
            <div>
              <p>
                <span>朱继柳 </span>发布了第1期"传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 15:21:38</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="font">
            <img src="../assets/apple.jpeg" alt="" />
            <div>
              <p>
                <span>朱继柳 </span>发布了第1期"传智大讲堂”互动讨论获奖名单公布
              </p>
              <p>2018-07-21 15:21:38</p>
            </div>
          </div>
          <el-divider></el-divider>
           </el-card>
      </div>
      <div class="c-right">
        <el-card shadow="always"> 
          <div class="title">
            <h3>流程申请</h3>
          </div>
          <el-button>加班离职</el-button>
          <el-button>请假调休</el-button>
          <el-button>审批按钮</el-button>
          <el-button>我的信息</el-button>
           </el-card>
        <el-card shadow="always"> 
          <div class="c-top">绩效成绩</div>
          <div id="main"></div>
           </el-card>
        <el-card shadow="always"> 
          <div class="title">
            <h3>帮助链接</h3>
          </div>
          <div class="footer">
            <div>
              <div>
                <img src="../assets/5.png" alt="" />
              </div>
              <span>入门指南</span>
            </div>
            <div>
              <div>
                <img src="../assets/4.png" alt="" />
              </div>
              <span>在线帮助手册</span>
            </div>
            <div>
              <div>
                <img src="../assets/3.png" alt="" />
              </div>
              <span>联系技术支持</span>
            </div>
          </div>
           </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      value: new Date()
    }
  },
  methods: {},
  created() {},
  mounted() {
    var chartDom = document.getElementById("main")
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        text: "个人工作绩效表"
      },
      radar: {
        indicator: [
          { name: "考勤", max: 6500 },
          { name: "工资", max: 16000 },
          { name: "代码质量", max: 30000 },
          { name: "工作积极性", max: 38000 },
          { name: "加班时长", max: 52000 },
          { name: "bug数量", max: 25000 }
        ]
      },
      series: [
        {
          name: "Budget vs spending",
          type: "radar",
          data: [
            {
              value: [4200, 3000, 20000, 14000, 28000, 26000],
              name: "Allocated Budget"
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: "Actual Spending"
            }
          ]
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

<style lang='scss' scoped>
.card {
  margin: 5px;
}
.img1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.c-one {
  display: flex;
}
.c-two {
  margin-left: 10px;
  :nth-child(2) {
    font-size: 14px;
    margin-top: 10px;
    color: gray;
  }
}
.content {
  width: 100%;
  height: 100%;
  margin: 0 5px;
  display: flex;
  div {
    :nth-child(1){
      margin-bottom: 5px;
    }
  }
  .c-left{
    flex: 50%;
    // margin-right: 10px;
  }
  .c-right{
    flex: 45%;
    // padding: 0 5px;
    box-sizing: border-box;
    // margin-left: 10px;
    :nth-child(2){
      margin-bottom: 5px;
    }
  }
}
.c-top{
  font-size: 20px;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.096);
}
.font {
  display: flex;
  span {
    color: #8a97f8;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  p {
    margin-bottom: 15px;
  }
}
.title {
  width: 80px;
  height: 40px;
  border-bottom: 3px solid #8a97f8;
  margin: 20px 0;
}
#main {
  width: 100%;
  height: 300px;
}
.footer {
  display: flex;
  justify-content: space-around;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    margin: 10px 0;
    // background-color: rgba(255, 255, 255, 0);
  }
}
</style>
