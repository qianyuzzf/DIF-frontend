import axios from 'axios'
//
// function VerifyToken(response) {
//   if (response.status == 401) {
//     setTimeout(() => {
//       const origin = window.location.origin
//       window.location.href = origin + "/login"
//     }, 500)
//     return {
//       status: response.status,
//       data: {
//         msg: '身份信息过期，请重新登录',
//         suc: 0,
//         data: null,
//       },
//     }
//   }
//   return response
// }
//
// const headers = {}
//
// // axios config 添加请求拦截
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.withCredentials = true
// const AxiosRequest = {
//   request: 0,
//   success: 0,
//   error: 0
// }
// const cancelToken = axios.CancelToken
//
// // 保存需要取消的请求
// const cancelMap = new Map()
//
// // 如果设置了cancelToken，autoCancel不会生效
// // config.autoCancel为true或function，会将cancelToken的方法返回的cancel函数添加到cancelMap中
// // config.autoCancel为function，会将按照函数来计算k值，且autoCancel方法不应该返回null,undefined等值
//
// axios.interceptors.request.use(function (config: any) {
//   AxiosRequest.request++
//   config.headers = Object.assign(config.headers || {}, headers)
//   // fix ie get 请求来自缓存
//   if (config.method === 'get') {
//     if (Object.prototype.hasOwnProperty.call(config, 'params')) {
//       config.params._timestamp_str = Date.now()
//     } else {
//       config.params = {
//         _timestamp_str: Date.now()
//       }
//     }
//   }
//   if (config.autoCancel && !Object.prototype.hasOwnProperty.call(config, 'cancelToken')) {
//     let k = config.url
//     if (typeof config.autoCancel === 'function') {
//       k = config.autoCancel(k) || k
//     }
//     if (cancelMap.has(k) && typeof cancelMap.get(k) === 'function') {
//       cancelMap.get(k)()
//     }
//     config.cancelToken = new cancelToken(cancel => {
//       cancelMap.set(k, cancel)
//     })
//   }
//   return config
// }, function (error) {
//   console.log('request error', error)
//   AxiosRequest.error++
//   return Promise.reject(error)
// })
//
// axios.interceptors.response.use(function (response: any) {
//   const {config} = response
//   if (config.autoCancel && !Object.prototype.hasOwnProperty.call(config, 'cancelToken')) {
//     let k = config.url
//     if (typeof config.autoCancel === 'function') {
//       k = config.autoCancel(k) || k
//     }
//     // 请求成功删除cancelMap中对应的元素
//     cancelMap.delete(k)
//   }
//   AxiosRequest.success++
//   //如果请求response的status为401时(Token过期)，则跳至登录页
//   return VerifyToken(response)
// }, function (error) {
//   AxiosRequest.error++
//   console.log('response error', error)
//   // 对于 cancel 的请求 不处理Token
//   if (error.__CANCEL__) {
//     return error
//   }
//   //如果请求response的status为401时(Token过期)，则跳至登录页
//   return Promise.reject(VerifyToken(error.response))
// })

export default axios