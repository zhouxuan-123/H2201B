import http from '../untils/request'
/**表格数据 */
export function getList(data) {
  return http({
    url: http.apis('/social_securitys/list'),
    method: 'POST',
    data
  })
}
/**部门数据 */
export function section() {
  return http({
    url: http.apis('/company/department'),
    method: 'GET'
  })
}
/**社保公积金 */
export function city() {
  return http({
    url: http.apis('sys/city'),
    method: 'GET'
  })
}
/**社保报表金额 */
export function securitys() {
  return http({
    url: http.apis('/social_securitys/historys/2020/list'),
    method: 'GET'
  })
}
/**社保报表 */
export function month(data) {
  return http({
    url: http.apis(
      `/social_securitys/historys/202002?month=${data.month}&opType=${data.opType}`
    ),
    method: 'GET'
  })
}

/*获取详情数据*/
export function getDetail() {
  return http({
    url: http.apis('/social_securitys/payment_item/1084825908823904256'),
    method: 'get'
  })
}

/*获取详情数据*/
export function getDetailinfo(data) {
  return http({
    url: http.apis(`/social_securitys/${data}`),
    method: 'get'
  })
}
