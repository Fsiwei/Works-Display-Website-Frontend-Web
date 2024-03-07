// 本地存储用户信息的方法
// 写入用户相关数据
export const SET_TOKEN = (userInfo) => {
  localStorage.setItem("USERINFO", userInfo);
};
// 获取用户相关数据
export const GET_TOKEN = () => {
  return localStorage.getItem("USERINFO");
};
// 清空本地存储的用户相关数据
export const REMOVE_TOKEN = () => {
  localStorage.removeItem("USERINFO");
};
