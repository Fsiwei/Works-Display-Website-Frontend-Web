<template>
  <div class="login">
    <div class="shell">
      <!-- 注册页面 -->
      <div class="container a-container" id="a-container" v-if="!(scene == 0)">
        <el-form
          class="form"
          ref="registerForm"
          id="a-form"
          :rules="rules"
          :model="registerParams"
        >
          <h2 class="form_title title">创建账号</h2>
          <div class="iconfont form_icons">
            <!-- 小图标 -->
            <!-- QQ -->
            <svg
              t="1697458776612"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2329"
              width="32"
              height="32"
            >
              <path
                d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                p-id="2330"
                fill="#707070"
              ></path>
            </svg>
            <!-- WX -->
            <svg
              t="1698072242600"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2346"
              width="32"
              height="32"
            >
              <path
                d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                fill="#707070"
                p-id="2347"
              ></path>
            </svg>
          </div>
          <span class="form_span">选择注册方式或用户名密码注册</span>
          <el-form-item prop="username">
            <el-input
              class="form_input"
              placeholder="请输入用户名"
              v-model="registerParams.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="form_input"
              placeholder="请输入密码"
              type="password"
              v-model="registerParams.password"
            />
          </el-form-item>
          <el-form-item prop="confirmPassword">
            <el-input
              class="form_input"
              placeholder="请输入确认密码"
              type="password"
              v-model="registerParams.confirmPassword"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              class="form_button button submit"
              type="primary"
              @click="register"
              >注册</el-button
            >
          </el-form-item>
        </el-form>
      </div>

      <!-- 登录页面 -->
      <div class="container b-container" id="b-container" v-else>
        <el-form
          ref="loginForm"
          class="form"
          id="b-form"
          :rules="rules"
          :model="loginParams"
        >
          <h2 class="form_title title">登入账号</h2>
          <div class="iconfont form_icons">
            <!-- 小图标 -->
            <!-- QQ -->
            <svg
              t="1697458776612"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2329"
              width="32"
              height="32"
            >
              <path
                d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                p-id="2330"
                fill="#707070"
              ></path>
            </svg>
            <!-- WX -->
            <svg
              t="1698072242600"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2346"
              width="32"
              height="32"
            >
              <path
                d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                fill="#707070"
                p-id="2347"
              ></path>
            </svg>
          </div>
          <span class="form_span">选择登录方式或用户名密码注册</span>
          <el-form-item prop="username">
            <el-input
              class="form_input"
              placeholder="请输入用户名"
              v-model="loginParams.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="form_input"
              placeholder="请输入密码"
              type="password"
              v-model="loginParams.password"
            />
          </el-form-item>
          <div style="display: flex; align-items: center; width: 350px">
            <el-form-item prop="validcode">
              <el-input
                class="form_input"
                placeholder="请输入验证码"
                v-model="validCode"
                style="flex: 2; width: 300px"
              />
              <div style="flex: 1; height: 40px">
                <ValidCode @update:value="getCode" />
              </div>
            </el-form-item>
          </div>
          <!-- <el-form-item>
            <a href="#" class="form_link">忘记密码?</a>
          </el-form-item> -->
          <el-form-item>
            <el-button
              class="form_button button submit"
              type="primary"
              @click="login"
              >登录</el-button
            ></el-form-item
          >
        </el-form>
      </div>

      <!-- 转换开关 -->
      <div class="switch" id="switch-cnt">
        <div class="switch_circle"></div>
        <div class="switch_circle switch_circle-t"></div>
        <!-- 登录 -->
        <div v-if="!(scene == 0)" class="switch_container" id="switch-c1">
          <h2 class="switch_title title" style="letter-spacing: 0">
            欢迎回来！
          </h2>
          <p class="switch_description description">已有账号，登入账号！</p>
          <button
            class="switch_button button switch-btn"
            @click="changeToLoginScene"
          >
            登录
          </button>
        </div>
        <!-- 注册 -->
        <div v-else class="switch_container" id="switch-c2">
          <h2 class="switch_title title" style="letter-spacing: 0">你好！</h2>
          <p class="switch_description description">注册账号！</p>
          <button
            class="switch_button button switch-btn"
            @click="changeToRegisterScene"
          >
            注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import useUserStore from "@/store/modules/user";
// 引入验证码组件
import ValidCode from "../../components/validcode/index.vue";
let $router = useRouter();
let $route = useRoute();
// 控制两个场景的响应式数据，登陆场景为 0
let scene = ref(0);
// 验证码
let validCode = ref("");
// 获取表单按钮
let userStore = useUserStore();
let loginForm = ref();
let registerForm = ref();
let password = ref("");
// 收集登录表单数据---用户名、密码
let loginParams = reactive({
  // 收集用户名
  username: "",
  // 收集密码
  password: "",
});
// 收集注册表单数据---用户名、密码、确认密码
let registerParams = reactive({
  // 收集用户名
  username: "",
  // 收集密码
  password: "",
  // 确认密码
  confirmPassword: "",
});

onMounted(() => {
  // 通知 pinia 小仓库清除用户相关的信息，还要清空本地存储的用户信息
  userStore.loginOut();
});

// 点击登录按钮回调
const login = async () => {
  // 保证表单校验两项都符合条件，通过后发送请求，返回一个 Promise？
  await loginForm.value.validate();
  // 发送登录请求
  // 登录请求成功：跳转到之前的路由，否则跳转到首页
  // 登录请求失败：弹出对应登录失败的错误信息
  // 调用小仓库中定义的方法，并传递 username 和 password
  try {
    // 用户登录成功
    let res = await userStore.userLogin(loginParams);
    console.log("登录的数据", res);
    if (res.code === "200") {
      // 跳转路由
      let redirect = $route.query.redirect;
      if (redirect) {
        $router.push(redirect);
        ElMessage({
          type: "success",
          message: "登录成功",
        });
      } else {
        $router.push("/home");
        ElMessage({
          type: "success",
          message: "登录成功",
        });
      }
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

// 点击登录按钮回调
const register = async () => {
  // 保证表单校验两项都符合条件，通过后发送请求，返回一个 Promise？
  await registerForm.value.validate();
  // 发送登录请求
  // 登录请求成功：跳转到之前的路由，否则跳转到首页
  // 登录请求失败：弹出对应登录失败的错误信息
  // 调用小仓库中定义的方法，并传递 username 和 password
  try {
    console.log(registerParams);
    // 用户登录成功
    let res = await userStore.userRegister(registerParams);
    if (res.code === "200") {
      scene.value = 0;
      ElMessage({
        type: "success",
        message: "注册成功，请登录",
      });
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

// 自定义用户名的校验规则
const validateUsername = (rule, value, callBack) => {
  //用户名正则，4到16位（数字、字母、下划线）
  const reg = /^[0-9A-Za-z_]{4,16}$/;
  if (!value) {
    callBack(new Error("用户名不能为空"));
  } else {
    if (reg.test(value)) {
      // 符合规则，放行
      callBack();
    } else {
      callBack(new Error("用户名长度4-16位（数字、字母、下划线）"));
    }
  }
};

// 自定义密码的校验规则
const validatePassword = (rule, value, callBack) => {
  // 密码正则
  // 至少1个大写字母，1个小写字母，1个数字，1个特殊字符长度为6-20位
  const reg = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/;
  if (!value) {
    callBack(new Error("密码不能为空"));
  } else {
    if (reg.test(value)) {
      password = value;
      callBack();
    } else {
      callBack(
        new Error(
          "密码长度6-20位（至少1个大写字母，1个小写字母，1个数字，1个特殊字符）"
        )
      );
    }
  }
};

// 自定义验证码的校验规则
const validateValidCode = (rule, value, callBack) => {
  if (!value) {
    callBack(new Error("密码不能为空"));
  } else {
    if (value.toLowerCase() == validCode.value) {
      // password = value;
      callBack();
    } else {
      callBack(
        new Error(
          "密码长度6-20位（至少1个大写字母，1个小写字母，1个数字，1个特殊字符）"
        )
      );
    }
  }
};

// 自定义确认密码的校验规则
const validateConfirmPassword = (rule, value, callBack) => {
  if (!value) {
    callBack(new Error("确认密码不能为空"));
  } else {
    if (value == password) {
      callBack();
    } else {
      callBack(new Error("密码同时包含英文字母和数字（至少其中一种）"));
    }
  }
};

// 表单校验规则
const rules = {
  // 表单的自定义校验
  username: [
    {
      required: true,
      validator: validateUsername,
      message: "用户名长度4-16位（数字、字母、下划线）",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      validator: validatePassword,
      message: "密码同时包含英文字母和数字（至少其中一种）",
      trigger: "change",
    },
  ],
  validCode: [
    {
      required: true,
      validator: validateValidCode,
      message: "验证码输入错误",
      trigger: "change",
    },
  ],
  confirmPassword: [
    {
      required: true,
      validator: validateConfirmPassword,
      message: "确认密码要与密码一致",
      trigger: "change",
    },
  ],
};

// 获取验证码
const getCode = (code) => {
  validCode.value = code.toLowerCase();
};

// // mock时，登录按钮的回调
// const login = () => {
//   console.log(validCode.value);
//   form.value
//     .validate()
//     .then(() => {
//       console.log("表单校验通过");
//       // mock模拟请求  传入参数：username password
//       // post请求的第一个参数是请求路径，第二个参数是携带的请求参数
//       axios
//         .post("/user/login", {
//           // 参数绑定表单的内容
//           username: loginParams.username,
//           password: loginParams.password,
//         })
//         .then((res) => {
//           console.log(res.data);
//           // 存储token
//           let token = res.data.tData.token;
//           console.log("登录成功获取token值：", token);
//           $router.push("/home");
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// 切换登录场景按钮的回调
const changeToLoginScene = async () => {
  // 切换场景为登录
  scene.value = 0;
  console.log(scene.value);
};

// 切换注册场景按钮的回调
const changeToRegisterScene = async () => {
  // 切换场景为注册
  scene.value = 1;
  console.log(scene.value);
};
</script>

<style scoped>
/* 设置响应式 */
@media (max-width: 1200px) {
  .login {
    transform: scale(0.7);
  }
}
@media (max-width: 1000px) {
  .login {
    transform: scale(0.6);
  }
}
@media (max-width: 800px) {
  .login {
    transform: scale(0.5);
  }
}
@media (max-width: 600px) {
  .login {
    transform: scale(0.4);
  }
}
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: #ecf0f3;
  /* background-image: url(../../assets/images/grid.svg); */
  background-repeat: repeat;
  background-size: 300px 300px;
  color: #a0a5a8;
}
.shell {
  position: relative;
  width: 1000px;
  min-width: 1000px;
  height: 600px;
  min-height: 600px;
  padding: 25px;
  background-color: #ecf0f3;
  box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
  border-radius: 12px;
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 200px;
  width: 600px;
  height: 100px;
  padding: 25px;
  margin-top: 30px;
  background-color: #ecf0f3;
  transition: 1.25s;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.icon {
  margin: 0 5px;
  border: 2px solid rgb(0, 0, 0, 0.5);
  border-radius: 50%;
  font-size: 25px;
  padding: 3px;
  opacity: 0.5;
  transition: 0.1s;
}
.icon:hover {
  opacity: 1;
  transition: 0.15s;
  cursor: pointer;
}

.form_input {
  width: 350px;
  height: 40px;
  margin: 4px 0;
  padding-left: 25px;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: none;
  outline: none;
  background-color: #ecf0f3;
  transition: 0.25s ease;
  border-radius: 8px;
  box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.form_input:focus {
  box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}

.form_span {
  margin-top: 30px;
  margin-bottom: 12px;
}
.form_link {
  color: #181818;
  font-size: 15px;
  margin-top: 10px;
  border-bottom: 1px solid #a0a5a8;
  line-height: 2;
}

.form_title {
  font-size: 34px;
  font-weight: 700;
  line-height: 3;
  color: #181818;
  letter-spacing: 1.6;
}

.description {
  margin-top: 5px;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-align: center;
  line-height: 1.6;
}

.button {
  width: 180px;
  height: 50px;
  border-radius: 25px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.15px;
  background-color: #333;
  color: #f9f9f9;
  box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
  border: none;
  outline: none;
}

.submit:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}
.a-container {
  z-index: 100;
  left: calc(100% - 600px);
}
.b-container {
  z-index: 100;
  left: calc(100% - 600px);
}
.switch {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  padding: 50px;
  z-index: 200;
  transition: 1.25s;
  background-color: #ecf0f3;
  overflow: hidden;
  box-shadow: 4px 4px 10px #d1d9e6, -4px -4px 10px #d1d9e6;
}

.switch_circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #ecf0f3;
  box-shadow: inset 8px 8px 12px #b8bec7, inset -8px -8px 12px #fff;
  bottom: -60%;
  left: -60%;
  transition: 1.25s;
}
.switch_circle-t {
  top: -30%;
  left: 60%;
  width: 300px;
  height: 300px;
}
.switch_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 400px;
  padding: 50px 55px;
  transition: 1.25s;
}
.switch_button {
  margin-top: 50px;
  cursor: pointer;
}
.switch_button:hover,
.submi:hover {
  box-shadow: 6px 6px 10px #d1d9e6, -6px -6px 10px #f9f9f9;
  transform: scale(0.985);
  transition: 0.25s;
}
.switch_button:active,
.switch_button:focus {
  box-shadow: 2px 2px 6px #d1d9e6, -2px -2px 6px #f9f9f9;
  transform: scale(0.97);
  transition: 0.25s;
}
.is-yxr {
  left: calc(100%-400px);
  transition: 1.25s;
  transform-origin: left;
}
.is-txl {
  left: 0;
  transition: 0.25s;
  transform-origin: right;
}
.is-z {
  z-index: 200;
  transition: 1.25s;
}
.is-hidden {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: 1.25s;
}
.is-gx {
  animation: is-gx 1.25s;
}
@keyframes is-gx {
  0%,
  10%,
  100% {
    width: 400px;
  }
  30%,
  50% {
    width: 500px;
  }
}
</style>
