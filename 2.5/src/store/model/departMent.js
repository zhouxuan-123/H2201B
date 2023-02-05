import {
  getList,
  section,
  city,
  getDetail,
  getDetailinfo,
  securitys,
  month
} from '@/api/departMent'

const state = {
  /**社保页面 */
  /**表格数据 */
  tableDataList: [],
  /**部门数据 */
  tableData: [],
  /**备份数据 */
  tableDataCopy: [],
  /**城市数据 */
  tableDataCity: [],
  total: 0,
  /**详情页面的表格数据 */
  detailTableData: [],
  userInfo: {},
  userSecurity: {},
  top: {},
  monthTableData: []
}
const mutations = {
  /**渲染的表格数据 */
  getTable(state, obj) {
    state.tableData = obj.rows
    state.tableDataCopy = obj.rows
    state.total = obj.total
  },
  /**渲染的部门数据 */
  getSection(state, obj) {
    state.tableDataList = obj.depts
  },
  /**渲染社保城市--公积金城市 */
  getCity(state, obj) {
    console.log(obj)
    state.tableDataCity = obj
  },
  /**详情 */
  getDetailTable(state, obj) {
    state.detailTableData = obj
  },
  getDetailinfo(state, obj) {
    state.userSecurity = obj.userSocialSecurity
    state.userInfo = obj.userInfo
  },
  /**历史归档 */
  historyJl(state, obj) {
    state.top = { ...obj }
  },
  month(state, obj) {
    state.monthTableData = obj
  }
}
const actions = {
  /**表格数据 */
  get(ctx, obj) {
    getList(obj).then((res) => {
      ctx.commit('getTable', res.data.data)
    })
  },
  /**部门 */
  getsection(ctx) {
    section().then((res) => {
      ctx.commit('getSection', res.data.data)
    })
  },
  /**社保城市--公积金城市 */
  getCity(ctx) {
    city().then((res) => {
      ctx.commit('getCity', res.data.data)
    })
  },
  /**详情 */
  getDetailTable(ctx) {
    getDetail().then((res) => {
      ctx.commit('getDetailTable', res.data.data)
    })
  },
  getDetailinfo(ctx, id) {
    getDetailinfo(id).then((res) => {
      console.log(res)
      ctx.commit('getDetailinfo', res.data.data)
    })
  },
  /**历史归档 */
  securitys(ctx) {
    securitys().then((res) => {
      console.log(res)
      ctx.commit('historyJl', res.data.data[0])
    })
  },
  /**月报表 */
  month(ctx, obj) {
    month(obj).then((res) => {
      console.log(res)
      ctx.commit('month', res.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
