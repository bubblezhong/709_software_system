/**
 * request-promise每次请求所需要的参数设置
 */

module.exports = {
  POST:  {
    method: 'POST',
    // uri: 'http://192.168.2.106:8000/software-in/start',  // url 后续填充
    // body: value,   // 后续填充
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic YWRtaW46YWRtaW4=",
    },
    json: true
  },
  URL: "http://localhost:8000/",
}