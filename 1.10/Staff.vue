<template>
    <div>
      <!-- 员工 -->
      <el-card class="box-card">
        <div class="top">
          <div>
            <el-alert
              title="当前共有1850条记录"
              type="info"
              show-icon
              :closable="false"
            ></el-alert>
          </div>
          <div>
            <el-button type="danger">普通excel导出</el-button>
            <el-button type="warning">负责excel导出</el-button>
            <el-button type="success">excel导入</el-button>
            <el-button type="primary" disabled>新增员工</el-button>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="username" label="姓名" sortable>
          </el-table-column>
          <el-table-column prop="address" label="头像">
            <template slot-scope="scope">
              <img :src="scope.row.staffPhoto" alt="" class="imgs" />
            </template>
          </el-table-column>
          <el-table-column prop="mobile" label="手机号" sortable>
          </el-table-column>
          <el-table-column prop="workNumber" label="工号" sortable>
          </el-table-column>
          <el-table-column prop="address" label="聘用形式" sortable
            >正式
          </el-table-column>
          <el-table-column prop="departmentName" label="部门" sortable>
          </el-table-column>
          <el-table-column prop="timeOfEntry" label="入职时间" sortable>
          </el-table-column>
          <el-table-column prop="address" label="账户状态" sortable>
            <el-switch v-model="enableState"> </el-switch>
          </el-table-column>
          <el-table-column label="操作" sortable width="250">
            <template>
              <el-button type="text" size="small">查看</el-button>
              <el-button type="text" size="small">转正</el-button>
              <el-button type="text" size="small">调岗</el-button>
              <el-button type="text" size="small">离职</el-button>
              <el-button type="text" size="small">角色</el-button>
              <el-button type="text" class="color" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    components: {},
    computed: {},
    data() {
      return {
        // value: true,
        tableData: [
          {
            id: "604f764971f93f3ac8f365c2",
            mobile: "13800000002",
            username: "黄麒帆",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: "1",
            timeOfEntry: "2018-11-02",
            formOfEmployment: "1",
            workNumber: "001",
            correctionTime: "2018-11-30",
            departmentName: "总裁办",
            staffPhoto: "http://geek.itheima.net/uploads/1673363872025.png"
          },
          {
            id: "604f764971f93f3ac8f365c3",
            mobile: "13800000003",
            username: "黄麒帆",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: "1",
            timeOfEntry: "2018-11-04",
            formOfEmployment: "1",
            workNumber: "我给你添一个哈",
            correctionTime: "2018-11-20",
            departmentName: "市场部",
            staffPhoto:
              "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/Snipaste_2023-01-10_21-15-30.png"
          },
          {
            id: "604f764971f93f3ac8f365c4",
            mobile: "13800000004",
            username: "罗晓晓1",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: "1",
            timeOfEntry: "2018-12-02",
            formOfEmployment: 1,
            workNumber: "1111",
            correctionTime: "2018-12-31",
            departmentName: "人事部",
            staffPhoto:
              "http://qianxi-520-1316496593.cos.ap-guangzhou.myqcloud.com/v2-5ae21127525ff29fcafb0b4d8ea00f6a_720w.jpg"
          },
          {
            id: "604f764971f93f3ac8f365c5",
            mobile: "13400000001",
            username: "文吉星",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: 1,
            timeOfEntry: "2018-01-01",
            formOfEmployment: 1,
            workNumber: "1001",
            correctionTime: "1970-01-01",
            departmentName: "人事部",
            staffPhoto: ""
          },
          {
            id: "604f764971f93f3ac8f365c6",
            mobile: "13400000002",
            username: "巴思慧",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: "1",
            timeOfEntry: "2018-01-01",
            formOfEmployment: 1,
            workNumber: "1002",
            correctionTime: "1970-01-01",
            departmentName: "人事部",
            staffPhoto:
              "http://qianxi-520-1316496593.cos.ap-guangzhou.myqcloud.com/v2-0d283c8d476c3ab551d97ce47f276d5c_r.jpg"
          },
          {
            id: "604f764971f93f3ac8f365c7",
            mobile: "13500000001",
            username: "乔海",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: "1",
            timeOfEntry: "2018-01-01",
            formOfEmployment: 1,
            workNumber: "2001",
            correctionTime: "1970-01-01",
            departmentName: "总裁办",
            staffPhoto:
              "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/1hang.jpg"
          },
          {
            id: "604f764971f93f3ac8f365c8",
            mobile: "13500000002",
            username: "董昊空",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: "1",
            timeOfEntry: "2018-01-01",
            formOfEmployment: 1,
            workNumber: "2002",
            correctionTime: "1970-01-01",
            departmentName: "总裁办",
            staffPhoto:
              "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/Jay1.jpeg"
          },
          {
            id: "604f764971f93f3ac8f365c9",
            mobile: "13500000003",
            username: "周乐天",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: 1,
            timeOfEntry: "2018-01-01",
            formOfEmployment: 1,
            workNumber: "2003",
            correctionTime: "1970-01-01",
            departmentName: "财务部",
            staffPhoto: ""
          },
          {
            id: "604f764971f93f3ac8f365ca",
            mobile: "13600000001",
            username: "吕勇锐",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: 1,
            timeOfEntry: "1992-08-04",
            formOfEmployment: 1,
            workNumber: "0001",
            correctionTime: "2020-01-01",
            departmentName: "总裁办",
            staffPhoto: ""
          },
          {
            id: "604f764971f93f3ac8f365cb",
            mobile: "13600000002",
            username: "袁永安",
            password: "e10adc3949ba59abbe56e057f20f883e",
            enableState: 1,
            timeOfEntry: "1993-08-04",
            formOfEmployment: 1,
            workNumber: "0002",
            correctionTime: "2020-01-01",
            departmentName: "总裁办",
            staffPhoto: ""
          }
        ]
      }
    },
    created() {},
    methods: {},
    mounted() {},
    watch: {}
  }
  </script>
  
  <style lang="scss" scoped>
  .imgs {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
  .top {
    display: flex;
    justify-content: space-between;
  }
  .box-card {
    margin: 10px;
  }
  .color {
    color: #eee;
  }
  .el-alert {
    background-color: #e6f7ff;
    border: #91d5ff;
  }
  </style>