import { user } from '@/api/staff'
const state = {
  list: [],
  total: 0
}
const mutations = {
  staffList(state, obj) {
    state.total = obj.total
    state.list = obj.rows
  }
}
const actions = {
  getList(ctx, obj) {
    user(obj).then((res) => {
      ctx.commit('staffList', res.data.data)
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
