import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
      {
        /**首页 */
        path: '/userIndex',
        name: 'userIndex',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/index/userIndex.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/index/my.vue')
      },
      {
        /**组织架构 */
        path: '/tissueIn',
        name: 'tissueIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/tissueIn/tissueIn.vue'
          )
      },
      {
        /**员工 */
        path: '/StaffIn',
        name: 'StaffIn',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/staff/StaffIn.vue')
      },
      {
        path: '/check',
        name: 'check',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/staff/check.vue')
      },
      {
        path: '/uploading',
        name: 'uploading',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/staff/uploading.vue')
      },
      {
        /**公司设置 */
        path: '/companyIn',
        name: 'companyIn',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/company/companyIn.vue'
          )
      },
      {
        /**权限设置 */
        path: '/permissionsIndex',
        name: 'permissionsIndex',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/permission/permissionsIndex.vue'
          )
      },
      {
        /**社保 */
        path: '/departMent',
        name: 'departMent',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/departMent/departMent.vue'
          )
      },
      {
        path: '/monthStatement',
        name: 'monthStatement',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/departMent/monthStatement.vue'
          )
      },
      {
        path: '/secdetail',
        name: 'secdetail',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/departMent/secdetail.vue'
          )
      },
      {
        path: '/securitys',
        name: 'securitys',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/departMent/securitys.vue'
          )
      },
      /**考勤 */

      {
        path: '/attendances',
        name: 'attendances',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/attenDances/attendances.vue'
          )
      },
      {
        path: '/attenimport',
        name: 'attenimport',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/attenDances/attenimport.vue'
          )
      },
      {
        path: '/attenhistory',
        name: 'attenhistory',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/attenDances/attenhistory.vue'
          )
      },
      {
        path: '/attport',
        name: 'attport',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/attenDances/attport.vue'
          )
      },
      /**工资 */
      {
        path: '/salarys',
        name: 'salarys',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/salarys/salarys.vue')
      },
      {
        path: '/setting',
        name: 'setting',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/salarys/setting.vue')
      },
      {
        path: '/statement',
        name: 'statement',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/salarys/statement.vue'
          )
      },
      {
        path: '/salaryDetails',
        name: 'salaryDetails',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/salarys/salaryDetails.vue'
          )
      },
      /**审批 */

      {
        path: '/instance',
        name: 'instance',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/instance/instance.vue'
          )
      },
      {
        path: '/instanceSetting',
        name: 'instanceSetting',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/instance/instanceSetting.vue'
          )
      },
      {
        path: '/appsee',
        name: 'appsee',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/instance/appsee.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
