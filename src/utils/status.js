/*
 * @Description: 请求异常
 * @Author: 李超越
 * @Date: 2023-05-31 11:01:47
 * @LastEditTime: 2023-05-31 11:32:22
 * @LastEditors: 李超越
 */
export const showMessage = (status) => {
  const statusMap = new Map([
    [400, "请求错误(400)"],
    [401, "未授权，请重新登录(401)"],
    [403, "拒绝访问(403)"],
    [404, "请求出错(404)"],
    [408, "请求超时(408)"],
    [500, "服务器错误(500)"],
    [501, "服务未实现(501)"],
    [502, "网络错误(502)"],
    [503, "服务不可用(503)"],
    [504, "网络超时(504)"],
    [505, "HTTP版本不受支持(505)"],
  ]);
  return `${
    statusMap.has(status) ? statusMap.get(status) : `连接出错状态码-${status}!`
  }，请检查网络或联系管理员！`;
};