
import Mock from "mockjs";
// 登录接口
Mock.mock("/user/login", "post", (params) => {
  // 请求参数
  console.log(params);
  console.log("post请求传入的参数是：", params.body);
  let loginData = JSON.parse(params.body);
  console.log(loginData);
  let data;
  // 用户名和密码正确才会返回token
  if (loginData.username == "zhangsan" && loginData.password == "123As@") {
    data = Mock.mock({
      token: "@id", // 随机生成一个18位省份证，模拟生成 token 值
    });
    console.log(data);
  }
  return {
    status: 200,
    message: "请求登录成功",
    tData: data,
  };
});
