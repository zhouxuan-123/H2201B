import { Attendancetop, Attendancetable } from '@/api/attenDances'

const state = {
  /**头部组织架构数据 */
  AttentopList: [],
  /**表格数据 */
  tableData: [],
  /**备份 */
  _tableData: [],
  total: 0
}
const mutations = {
  /**头部组织架构 */
  Attendtop(state, obj) {
    state.AttentopList = obj.depts
    state.AttentopList.forEach((ele) => {
      ele.check = false
    })
  },
  /**表格数据 */
  getTable(state, obj) {
    state.tableData = obj.data.rows
    state._tableData = obj.data.rows
    state.total = obj.data.total
  }
}
const actions = {
  /**头部组织架构 */
  Attendtop(ctx) {
    Attendancetop().then((res) => {
      ctx.commit('Attendtop', res.data.data)
    })
  },
  /**表格数据 */
  getTable(ctx, obj) {
    Attendancetable(obj).then((res) => {
      console.log(res)
      ctx.commit('getTable', res.data.data)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
