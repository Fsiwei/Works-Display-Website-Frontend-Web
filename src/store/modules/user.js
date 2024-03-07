/* // 定义用户相关仓库
import { defineStore } from "pinia";
// 获取用户登录、注册的请求方法
import { reqUserLogin, reqUserRegister } from "@/api/user";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/user";
const useUserStore = defineStore("User", {
  state: () => {
    return {
      // 存储用户信息，如果本地存储有就从本地存储中取出，没有就赋值空对象
      userInfo: JSON.parse(GET_TOKEN()) || {},
    };
  },
  actions: {
    // 用户登录方法
    async userLogin(loginData) {
      // 登录请求
      let result = await reqUserLogin(loginData);
      if (result.code == 200) {
        this.userInfo = result.data;
        // 本地存储持久化存储用户数据
        SET_TOKEN(JSON.stringify(this.userInfo));
        // 返回成功的 Promise
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 用户注册方法
    async userRegister(registerData) {
      // 注册请求
      let result = await reqUserRegister(registerData);
      if (result.code == 200) {
        this.userInfo = result.data;
        SET_TOKEN(JSON.stringify(this.userInfo));
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 用户退出登录的方法
    loginOut() {
      // 清除仓库中用户的相关信息
      this.userInfo = { name: "", token: "" };
      // 清空本地存储的用户信息
      REMOVE_TOKEN();
    },
  },
  getters: {},
});

export default useUserStore; */

// 定义用户相关仓库
import { defineStore } from "pinia";
import axios from "axios";
// 获取用户登录、注册的请求方法 , reqUserRegister
import { reqUserLogin, reqUserRegister } from "@/api/user";
import { GET_TOKEN, SET_TOKEN, REMOVE_TOKEN } from "@/utils/user";
const useUserStore = defineStore("User", {
  state: () => {
    return {
      // 存储用户信息，如果本地存储有就从本地存储中取出，没有就赋值空对象
      userInfo: JSON.parse(GET_TOKEN()) || {},
    };
  },
  actions: {
    // 用户登录方法
    async userLogin(loginData) {
      /* mock 模拟请求
      console.log(username, "username");
      console.log(password, "password");
      // 登录请求
      let result = await axios.post("/mock/user" + loginData);
      console.log(result, "result2222"); 
      */
     // 登录请求
     let result = await reqUserLogin(loginData);
     console.log("result", result);
      if (result.code == 200) {
        this.userInfo = result.data;
        console.log("this.userInfo", this.userInfo);
        // 本地存储持久化存储用户数据
        SET_TOKEN(JSON.stringify(this.userInfo));
        // 返回成功的 Promise
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 用户注册方法
    async userRegister(registerData) {
      // 注册请求
      let result = await reqUserRegister(registerData);
      if (result.code == 200) {
        this.userInfo = result.data;
        SET_TOKEN(JSON.stringify(this.userInfo));
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 用户退出登录的方法
    loginOut() {
      // 清除仓库中用户的相关信息
      this.userInfo = { name: "", token: "" };
      // 清空本地存储的用户信息
      REMOVE_TOKEN();
    },
  },
  getters: {},
});

export default useUserStore;
