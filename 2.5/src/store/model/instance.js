import { instance, getAppinfo, getApptask } from '@/api/instance'

const state = {
  /**表格数据 */
  instanceTable: [],
  /**数量总数 */
  total: 0,
  /**审批中-审批通过-审批驳回 */
  ok: [],
  off: [],
  nOk: [],
  /**申请人的信息 */
  info: {},
  /**申请过程记录 */
  task: {}
}
const mutations = {
  /**表格数据 */
  getTable(state, obj) {
    state.instanceTable = obj.rows
    ;(state.total = obj.total),
      (state.ok = obj.rows.filter((ele) => {
        return ele.processState == 2
      }))
    state.off = obj.rows.filter((ele) => {
      return ele.processState == 1
    })
    state.nOk = obj.rows.filter((ele) => {
      return ele.processState == 3
    })
  },
  /**申请人信息 */
  getAppinfo(state, obj) {
    state.info = obj
  },
  /**申请过程信息 */
  getApptask(state, obj) {
    state.task = obj
  }
}
const actions = {
  /**表格数据 */
  getTable(ctx, obj) {
    instance(obj).then((res) => {
      ctx.commit('getTable', res.data.data)
    })
  },
  /**申请人信息 */
  getAppinfo(ctx, obj) {
    getAppinfo(obj).then((res) => {
      ctx.commit('getAppinfo', res.data.data)
    })
  },
  getApptask(ctx, obj) {
    getApptask(obj).then((res) => {
      ctx.commit('getApptask', res.data.data)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
