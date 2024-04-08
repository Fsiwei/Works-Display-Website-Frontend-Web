// 引入二次封装的 axios
import request from "@/utils/request";

// 用户登录接口
export const reqUserLogin = (data) => {
  // const datas = JSON.stringify(data)
  const res = request.post('/user/login', data);
  return res;
};

// 用户注册接口

// 用户登录接口
export const reqUserRegister = (data) => {
  // const datas = JSON.stringify(data)
  const res = request.post('/user/register', data);
  return res;
};

// 通过用户ID和文件类型获取作品的接口
export const reqGetAllUserPage = (pageNum, pageSize) => {
  const params = {
    pn: pageNum,
    ps: pageSize,
  };
  const res = request.get("/user/selectAllUserPage", { params });
  return res;
};

// export const reqUserRegister = (username, password, confirmPassword) => {
//   request.post(`/user/login/${username}/${password}/${confirmPassword}`);
// };
