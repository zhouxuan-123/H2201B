import { role, del, roleInfo, treeList } from '@/api/company'
import { Message } from 'element-ui'
const state = {
  list: [],
  total: 0,
  infoList: {},
  getTreeList: []
}
const mutations = {
  companyList(state, obj) {
    state.total = obj.total
    state.list = obj.rows
  },
  delRole(state, id) {
    del(id).then((res) => {
      console.log(res)
    })
  },
  getInfo(state, obj) {
    state.infoList = obj
    console.log(state.infoList)
  },
  getTree(state, arr) {
    console.log(arr)
    // arr.forEach((item) => {
    //   if (item.pid == '') {
    //     state.getTreeList.push(item)
    //     state.getTreeList.forEach((item) => {
    //       item.children = []
    //       arr.forEach((ele) => {
    //         if (item.id == ele.pid) {
    //           item.children.push(ele)
    //         }
    //       })
    //     })
    //   }
    // })
    state.getTreeList = arr
    console.log(state.getTreeList)
  }
}
const actions = {
  getList(ctx, obj) {
    role(obj).then((res) => {
      console.log(res)
      ctx.commit('companyList', res.data.data)
    })
  },
  delRole(ctx, id) {
    console.log(id)
    del(id).then((res) => {
      Message({
        message: res.data.message,
        type: 'success'
      })
    })
  },
  xqroleInfo(ctx, val) {
    roleInfo(val).then((res) => {
      console.log(res)
      ctx.commit('getInfo', res.data.data)
    })
  },
  treeList(ctx, obj) {
    treeList(obj).then((res) => {
      console.log(res)
      ctx.commit('getTree', res.data.data)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
