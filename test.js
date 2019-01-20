import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import {showFullScreenLoading, tryHideFullScreenLoading} from '../assets/common/loading'

const downloadUrl = url => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = url
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

const service = axios.create({
  baseURL: '/api', // api的base_url
  timeout: 30000,                  // 请求超时时间2、

})
// request拦截器
service.interceptors.request.use(config => {
  showFullScreenLoading();
  return config;
}, error => {
  // Do something with request error
  console.error(error) // for debug
  Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()

    /** -- 文件下载处理  -- **/
    let patt=new RegExp("attachment;");
    if (patt.test(response.headers['content-disposition'])) {
        downloadUrl(response.request.responseURL)
        return
    }
    const res = response.data;
    if (res.returnCode == '1000') {
      return res;
    }
    if (res.returnCode == '100') {
      return res.returnData;
    } else if (res.returnCode == "20011") {
      Message({
        showClose: true,
        message: res.returnMsg,
        type: 'error',
        duration: 500,
        onClose: () => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        }
      });
      return Promise.reject("未登录")
    } else {
      Message({
        message: res.returnMsg,
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(res)
    }
  },
  error => {
    console.error('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)
export default service
