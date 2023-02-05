import Vue from 'vue'
import Vuex from 'vuex'
import staff from './model/staff'
import company from './model/company'
import permission from './model/permission'
import departMent from './model/departMent'
import attenDances from './model/attenDances'
import salarys from './model/salarys'
import instance from './model/instance'
Vue.use(Vuex)

export default new Vuex.Store({
  getters: {},
  modules: {
    namespaced: true,
    staff,
    company,
    permission,
    departMent,
    attenDances,
    salarys,
    instance
  }
})
