// axios 二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import 'nprogress/nprogress.css';

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
})

// 添加请求拦截器
requests.interceptors.request.use(function (config) {
  // 进度条开始
  nProgress.start()
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
  // 进度条结束
  nProgress.done()
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default requests;