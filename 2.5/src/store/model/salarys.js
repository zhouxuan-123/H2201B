import {
  getWagetop,
  getWagetable,
  getchangeSalary,
  getsetting,
  getreport
} from '@/api/salarys'
import { Message } from 'element-ui'

const state = {
  /**头部部门 */
  WagesTop: [],
  /**表格数据 */
  tableData: [],
  /**备份数据*/
  _tableData: [],
  /**总条数 */
  total: 0,
  /**调薪*/
  salary: {},
  /**详情数据 */
  seesalary: {},
  /**设置 */
  setting: {},
  /**月报表 */
  statementTable: []
}
const mutations = {
  /**头部部门 */
  getTopList(state, obj) {
    state.WagesTop = obj.depts
    state.WagesTop.forEach((ele) => {
      ele.checked = false
    })
  },
  /**表格数据 */
  getTable(state, obj) {
    state.tableData = obj.rows
    state._tableData = obj.rows
    state.total = obj.total
  },
  /**调薪 */
  getSalary(state, obj) {
    console.log(obj)
    state.salary = obj
  },
  /**查看详情 */
  getDetail(state, obj) {
    state.seesalary = obj
  },
  /**设置 */
  getsetting(state, obj) {
    state.setting = obj
  },
  /**月报表 */
  getreport(state, obj) {
    state.statementTable = obj.data
    Message(obj.message)
  }
}
const actions = {
  /**头部部门 */
  getWagetop(ctx) {
    getWagetop().then((res) => {
      ctx.commit('getTopList', res.data.data)
    })
  },
  /**表格数据 */
  getWagetable(ctx, obj) {
    getWagetable(obj).then((res) => {
      ctx.commit('getTable', res.data.data)
    })
  },
  /**调薪 */
  getchangeSalary(ctx, id) {
    getchangeSalary(id).then((res) => {
      ctx.commit('getSalary', res.data.data)
    })
  },
  /**查看详情 */
  getDetail(ctx, id) {
    getchangeSalary(id).then((res) => {
      ctx.commit('getDetail', res.data.data)
    })
  },
  /**设置 */
  getsetting(ctx) {
    getsetting().then((res) => {
      ctx.commit('getsetting', res.data.data)
    })
  },
  /**月报表 */
  getreport(ctx, obj) {
    getreport(obj).then((res) => {
      console.log(res)
      ctx.commit('getreport', res.data)
    })
  }
}
//导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
