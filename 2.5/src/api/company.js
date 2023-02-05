import http from '../untils/request'
/**获取角色 */
export function role(data) {
  return http({
    url: http.apis(
      `/sys/role?page=${data.page}&pagesize=${data.pagesize}&total=${data.total}`
    ),
    method: 'GET',
    data
  })
}
/**删除*/
export function del(data) {
  return http({
    url: http.apis(`/sys/role/${data}`),
    method: 'DELETE'
  })
}
/**添加 */
export function addOrEdit(data) {
  return http({
    url: http.apis('/sys/role'),
    method: 'POST',
    data
  })
}
export function editList(id) {
  return http({
    url: http.apis(`/sys/role/${id}`),
    method: 'PUT'
  })
}
/**树状数据 */
export function treeList() {
  return http({
    url: http.apis('/sys/permission'),
    method: 'GET'
  })
}
//
/**分配权限 */
export function assignPrem(data) {
  return http({
    url: http.apis('/sys/role/assignPrem'),
    method: 'PUT',
    data
  })
}
/**角色信息 */
//
export function roleInfo() {
  return http({
    url: http.apis('/company/1'),
    method: 'GET'
  })
}
