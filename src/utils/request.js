// 对 axios 进行二次封装
// 引入 axios
import axios from "axios";
import { ElMessage } from "element-plus";
// 引入仓库
import useUserStore from "@/store/modules/user.js";
// 利用 axios.create 方法创建一个 axios 实例：该实例可以设置基础路径、超时时间等
const request = axios.create({
  baseURL: "/api", // 设置请求的基础路径
  timeout: 5000, // 设置超时时间，如果请求超出 5s ，请求失败
});
// 为创建的 axios 添加请求拦截器和响应拦截器
// 请求拦截器，注入一个回调
request.interceptors.request.use((config) => {
  // 获取用户仓库
  let userStore = useUserStore();
  // 如果有用户的 token，请求头需要携带 token
  if (userStore.userInfo.token) {
    config.headers.token = userStore.userInfo.token;
  }
  return config;
});

// 响应拦截器，成功回调，失败回调
request.interceptors.response.use(
  (response) => {
    // 响应拦截器成功的回调
    return response.data;
  },
  (error) => {
    // 处理 HTTP 网络错误
    let status = error.response.status;
    switch (status) {
      case 404:
        // 错误提示信息
        ElMessage({
          type: "error",
          message: "请求路径出现问题",
        });
        break;
      case 500 | 501 | 502 | 503 | 504 | 505:
        ElMessage({
          type: "error",
          message: "服务器出错了",
        });
        break;
      case 401:
        ElMessage({
          type: "error",
          message: "请登录",
        });
        break;
    }
    return Promise.reject(new Error(error.message));
  }
);

// 暴露 axios
export default request;
