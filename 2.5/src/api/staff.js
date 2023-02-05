import http from '../untils/request'

export function user(data) {
  return http({
    url: http.apis(
      `/sys/user?page=${data.page}&size=${data.size}&total=${data.total}`
    ),
    method: 'GET'
  })
}
export function userInfo(data) {
  return http({
    url: http.apis(`/sys/user/${data}`),
    method: 'GET'
  })
}
export function job(data) {
  return http({
    url: http.apis(`/employees/${data}/jobs`),
    method: 'GET'
  })
}
