<template>
  <div class="jur">
    <div class="social-box">
      <el-card class="social-one">
        <div class="abc">
          <div class="one-box">
            <i class="el-icon-info" style="color: #5687fe"></i>
            本月0：入职0 离职0 调薪0 未定薪0
          </div>
          <div class="tow">
            <el-button type="danger">设置</el-button>
            <el-button type="primary">202001报表</el-button>
          </div>
        </div>
      </el-card>
      <el-card>
        <div class="laoliu">
          <div class="one">
            聘用形式：<span><input type="checkbox" />正式</span
            ><span><input type="checkbox" />非正式</span>
          </div>
        </div>
        <div class="laoliu">
          <div class="one">
            员工状态： <span><input type="checkbox" />在职</span
            ><span><input type="checkbox" />离职</span>
          </div>
        </div>
        <div class="made">
          <div class="con-zero">
            <p>部门:</p>
          </div>
          <div class="con">
            <div class="con-one" v-for="(item, index) in lists" :key="index">
              <input type="checkbox" />
              <div class="names">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </el-card>
      <el-table class="tab" :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="60" />
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="mobile" label="手机" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column label="聘用形式"> 未知 </el-table-column>
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column label="入职时间">
          <template slot-scope="scope">
            {{ scope.row.timeOfEntry | filtimer }}
          </template>
        </el-table-column>
        <el-table-column label="工资基数">
          <template slot-scope="scope">
            {{ scope.row.currentPostWage + scope.row.currentBasicSalary }}
          </template>
        </el-table-column>
        <el-table-column label="津贴方案">通用方案</el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button type="primary">调薪</el-button>
            <el-button type="text">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="20">
    </el-pagination>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "",
  data() {
    return {
      lists: [
        { name: "总裁办" },
        { name: "行政部" },
        { name: "人事部" },
        { name: "财务部" },
        { name: "技术部" },
        { name: "运营部" },
        { name: "市场部" },
        { name: "财务核算部" },
        { name: "税务管理部" },
        { name: "Java研发部" },
        { name: "Python研发部" },
        { name: "Phy研发部" },
        { name: "北京事业部" },
        { name: "上海事业部" },
        { name: "前端" },
        { name: "前端程序员" }
      ],
      tableData: [
        {
          departmentName: "总裁办",
          timeOfEntry: "2018-11-02T08:00:00.000+0000",
          id: "1063705989926227968",
          username: "等风来,不如追风去",
          mobile: "13800000002",
          workNumber: "9002",
          currentBasicSalary: 123,
          currentPostWage: 456,
          departmentId: "1175310929766055936",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          timeOfEntry: "2018-11-04T08:00:00.000+0000",
          currentPostWage: 20,
          workNumber: "111",
          mobile: "13800000003",
          currentBasicSalary: 20,
          id: "1066370498633486336",
          departmentId: "1175311466846683136",
          departmentName: "市场部",
          username: "孙财",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          username: "罗晓晓",
          timeOfEntry: "2018-12-02T08:00:00.000+0000",
          currentBasicSalary: 3,
          workNumber: "1111",
          id: "1071632760222810112",
          mobile: "13800000004",
          departmentName: "人事部",
          currentPostWage: 3,
          departmentId: "1175311267684352000",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          workNumber: "1001",
          username: "文吉星",
          departmentName: "人事部",
          id: "1074238801330704384",
          currentBasicSalary: 5000,
          departmentId: "1175311267684352000",
          mobile: "13400000001",
          currentPostWage: 5000,
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01T00:00:00.000+0000",
          formOfEmployment: 1
        },
        {
          workNumber: "1002",
          currentBasicSalary: 100,
          departmentName: "人事部",
          currentPostWage: 100,
          mobile: "13400000002",
          id: "1074238801402007552",
          username: "巴思慧",
          departmentId: "1175311267684352000",
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01T00:00:00.000+0000",
          formOfEmployment: 1
        },
        {
          departmentName: "总裁办",
          currentBasicSalary: 7,
          id: "1075383133106425856",
          username: "乔海",
          mobile: "13500000001",
          currentPostWage: 7,
          departmentId: "1175310929766055936",
          workNumber: "2001",
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01T00:00:00.000+0000",
          formOfEmployment: 1
        },
        {
          username: "董昊空",
          departmentName: "总裁办",
          workNumber: "2002",
          currentPostWage: 123,
          mobile: "13500000002",
          id: "1075383135371350016",
          currentBasicSalary: 123,
          departmentId: "1175310929766055936",
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01T00:00:00.000+0000",
          formOfEmployment: 1
        },
        {
          workNumber: "2003",
          departmentName: "财务部",
          departmentId: "1175311325720936448",
          mobile: "13500000003",
          username: "周乐天",
          id: "1075383135459430400",
          currentPostWage: 10,
          currentBasicSalary: 10,
          inServiceStatus: 1,
          timeOfEntry: "2018-01-01T00:00:00.000+0000",
          formOfEmployment: 1
        },
        {
          timeOfEntry: "1992-08-04T08:00:00.000+0000",
          id: "1235396724497268736",
          departmentName: "总裁办",
          currentBasicSalary: 8888,
          mobile: "13600000001",
          workNumber: "0001",
          currentPostWage: 8888,
          username: "吕勇锐",
          departmentId: "1175310929766055936",
          inServiceStatus: 1,
          formOfEmployment: 1
        },
        {
          username: "袁永安",
          mobile: "13600000002",
          workNumber: "0002",
          currentPostWage: null,
          departmentName: "总裁办",
          currentBasicSalary: null,
          id: "1235396819959627776",
          departmentId: "1175310929766055936",
          timeOfEntry: "1993-08-04T08:00:00.000+0000",
          inServiceStatus: 1,
          formOfEmployment: 1
        }
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  created() {},
}
</script>
  
  <style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.jur {
  padding: 20px;
}

.social-box {
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
}

.social-one {
  height: 80px;
  line-height: 35px;
  width: 100%;
  margin-bottom: 10px;

  .abc {
    display: flex;
    position: relative;

    .one-box {
      height: 30px;
      font-size: 15px;
      text-align: center;
      width: 400px;
      line-height: 30px;
      background-color: #e6f7ff;
      border: 1px solid #9fdaff;
    }

    .tow {
      position: absolute;
      right: 10px;

      .el-button {
        padding: 8px 15px 8px 15px;
      }
    }
  }
}

.made {
  display: flex;
  padding: 10px;

  .con-zero {
    width: 80px;
    font-weight: 600;

    p {
      width: 80px;
      text-align: right;
    }
  }
}

.con {
  display: flex;
  flex-flow: wrap;
}

.con-one {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 15px;

  .names {
    margin-left: 5px;
    font-size: 12px;
  }
}

.laoliu {
  margin: 10px;
  margin-left: 25px;

  div {
    width: 200px;
    text-align: right;
    font-weight: 550;

    span {
      margin-left: 10px;
      font-weight: 400;
      font-size: 12px;

      input {
        margin-right: 5px;
      }
    }
  }
}

.tab {
  margin-top: 20px;
  padding: 10px;
}
.one {
  display: flex;
}
</style>