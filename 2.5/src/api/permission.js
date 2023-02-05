import http from '../untils/request'
export function permission() {
  return http({
    url: http.apis('/sys/permission'),
    method: 'GET'
  })
}
export function delPer(id) {
  return http({
    url: http.apis(`/sys/permission/${id}`),
    method: 'DELETE'
  })
}
export function add(data) {
  return http({
    url: http.apis('/sys/permission'),
    method: 'POST',
    data
  })
}

export function edit(id) {
  return http({
    url: http.apis(`/sys/permission/${id}`),
    method: 'PUT'
  })
}
