<template>
  <div>
    <!-- 设置 -->
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="角色管理" name="first">
          <div class="top">
            <el-button type="primary">新增角色</el-button>
          </div>
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column type="index" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="name" label="名称"> </el-table-column>
            <el-table-column prop="description" label="描述"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="success">分配权限</el-button>
                <el-button type="primary">编辑</el-button>
                <el-button type="danger" @click="del">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination layout="prev, pager, next" :total="100">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="公司信息" name="second">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          >
          </el-alert>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="公司名称">
              <el-input v-model="form.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input v-model="form.companyAddress" disabled></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="form.mailbox" disabled></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                type="textarea"
                v-model="form.remarks"
                disabled
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {},
  data() {
    return {
      activeName: "first",
      form: {
        id: "1",
        name: "江苏传智播客教育科技股份有限公司",
        managerId: "abc",
        version: "12",
        renewalDate: null,
        expirationDate: null,
        companyArea: null,
        companyAddress: "北京市昌平区建材城西路金燕龙办公楼一层",
        businessLicenseId: null,
        legalRepresentative: "",
        companyPhone: "400-618-9090",
        mailbox: "bd@itcastcn",
        companySize: null,
        industry: null,
        remarks: "传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质",
        auditState: "0",
        state: 1,
        balance: 0,
        createTime: "2018-11-07T13:30:05.000+0000"
      },
      tableData: [
        {
          id: "604e2aeb488be61b90b68776",
          name: "系统管理员",
          description: "管理整合平台，可以操作企业所有功能"
        },
        {
          id: "604e2b03488be61b90b68777",
          name: "人事经理",
          description: "负责整合人事部门"
        },
        {
          id: "604e2b12488be61b90b68779",
          name: "人事专员",
          description: "只能操作员工菜单"
        },
        {
          id: "604e2b19488be61b90b6877a",
          name: "薪资专员",
          description: "绩效管理"
        },
        {
          id: "604e2b25488be61b90b6877b",
          name: "员工",
          description: "员工"
        },
        {
          id: "63beaa9e81b4da1595e82e23",
          name: "211221",
          description: "22121"
        },
        {
          id: "63beab8e81b4da1595e82e29",
          name: "ewg ",
          description: "ewg "
        },
        { id: "63beac3d81b4da1595e82e30", name: "1", description: "1" },
        { id: "63beac3f81b4da1595e82e32", name: "1", description: "1" },
        {
          id: "63beb17e81b4da1595e82e53",
          name: "老八",
          description: "sssssss"
        }
      ]
    }
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    del() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    }
  },
  mounted() {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-form {
  margin: 30px 0;
  width: 500px;
}
.top {
  margin: 10px 0;
}
</style>
