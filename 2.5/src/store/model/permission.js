import { permission, delPer, add, edit } from '@/api/permission'
import { Message } from 'element-ui'

const state = {
  list: [],
  total: 0
}
const mutations = {
  /**修改数据 */
  staffList(state, arr) {
    arr.forEach((item) => {
      if (item.pid == '0') {
        state.list.push(item)
        state.list.forEach((item) => {
          item.children = []
          arr.forEach((ele) => {
            if (item.id == ele.pid) {
              item.children.push(ele)
            }
          })
        })
      }
    })
    state.total = arr.total
  },
  /**删除 */
  del(state, obj) {
    delPer(obj.id).then((res) => {
      Message.error(res.data.message)
    })
  }
}
const actions = {
  /**获取数据 */
  getList(ctx) {
    permission().then((res) => {
      ctx.commit('staffList', res.data.data)
    })
  },
  /**添加或者编辑 */
  addOrEdit(ctx, obj) {
    console.log(obj)
    if (!obj.id) {
      add(obj).then((res) => {
        console.log(res)
        Message({
          message: res.data.message,
          type: 'success'
        })
      })
    } else {
      edit(obj.id).then((res) => {
        Message.error(res.data.message)
      })
    }
  }
}
//导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
