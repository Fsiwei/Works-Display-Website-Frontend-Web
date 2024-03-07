<template>
  <div class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <a href="index.html" class="logo">
              <img
                src="../../assets/images/logo.svg"
                alt="数媒作品展示网站logo"
              />
            </a>
            <ul class="nav">
              <li class="scroll-to-section">
                <a href="/home" :class="{ active: $route.path == '/home' }"
                  >首页</a
                >
              </li>
              <li class="scroll-to-section">
                <a href="/search" :class="{ active: $route.path == '/search' }"
                  >搜索</a
                >
              </li>
              <li class="scroll-to-section">
                <a
                  href="/workDetail"
                  :class="{ active: $route.path == '/workDetail' }"
                  >作品</a
                >
              </li>
              <li class="scroll-to-section">
                <a href="/upload" :class="{ active: $route.path == '/upload' }"
                  >上传</a
                >
              </li>
              <li class="scroll-to-section">
                <a
                  href="/user/works"
                  :class="{ active: $route.path.split('/')[1] == 'user' }"
                  >个人中心</a
                >
              </li>
              <li class="opration">
                <div
                  v-if="!userStore.userInfo.username"
                  class="gradient-button"
                  style="cursor: pointer"
                >
                  <a href="/login">登 录</a>
                </div>
                <!-- 有用户名显示用户名 -->
                <el-dropdown class="dropdown" v-else>
                  <span class="el-dropdown-link">
                    {{ userStore.userInfo.username }}
                    <el-icon class="el-icon--right">
                      <arrow-down />
                    </el-icon>
                  </span>
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item
                        @click="changeActive('/user/certification')"
                        >个人信息</el-dropdown-item
                      >
                      <el-dropdown-item @click="changeActive('/user/order')"
                        >我的消息</el-dropdown-item
                      >
                      <el-dropdown-item @click="changeActive('/user/patient')"
                        >设置</el-dropdown-item
                      >
                      <el-dropdown-item @click="loginOut"
                        >退出登录</el-dropdown-item
                      >
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
let $router = useRouter();

const goHome = () => {
  $router.push({ path: "/home" });
};

// 退出登录回调
const loginOut = () => {
  // 通知 pinia 小仓库清除用户相关的信息，还要清空本地存储的用户信息
  userStore.loginOut(); // 需要在小仓库中定义该方法
  // 编程式导航路由跳转，跳转到首页
  $router.push({ path: "/home" });
};

// 点击顶部菜单跳转路由
const changeActive = (path) => {
  $router.push({ path });
};

/* 
// 这里的数据再刷新后会丢失，需要存到仓库中
let markArr = ref([]);
let mark = ref("");
markArr = $route.path.split("/");
mark = markArr[1]; 
*/
</script>

<style scoped>
.header-area {
  background-color: transparent;
  border-bottom: 1px solid rgba(42, 42, 42, 0.2);
  /* position: absolute; */
  width: 100%;
  left: 0px;
  right: 0px;
  z-index: 100;
  height: 100px;
  -webkit-transition: all 0.5s ease 0s;
  -moz-transition: all 0.5s ease 0s;
  -o-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.header-area .container {
  margin: 0 auto;
  max-width: 1320px;
}

.header-area .container .main-nav {
  min-height: 80px;
  background: transparent;
}

.header-area .container .main-nav .logo {
  float: left;
  margin-top: 22px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.header-area .container .main-nav .logo img {
  width: 200px;
}

.header-area .container .main-nav .nav {
  float: right;
  margin-top: 30px;
  margin-right: 0px;
  background-color: transparent;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  position: relative;
  z-index: 999;
}

.header-area .container .main-nav .nav li {
  padding-left: 20px;
  padding-right: 20px;
}

.header-area .container .main-nav .nav li:last-child .gradient-button {
  background-color: #333;
  border-radius: 25px;
}
.header-area .container .main-nav .nav li:last-child .gradient-button a {
  padding: 0px 20px !important;
  font-weight: 400;
  color: #fff !important;
}
.header-area .container .main-nav .nav li:last-child .gradient-button:hover {
  background-color: #555;
}

.header-area .container .main-nav .nav li:last-child .gradient-button a:hover {
  color: #fff !important;
}
.header-area .container .main-nav .nav li a {
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #2a2a2a;
  text-transform: capitalize;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  height: 40px;
  line-height: 40px;
  border: transparent;
  letter-spacing: 1px;
}
.header-area .container .main-nav .nav li a.active {
  color: #4b8ef1 !important;
}

.header-area .container .main-nav .nav li a:hover a {
  color: #4b8ef1 !important;
}
.header-sticky {
  min-height: 80px;
}

.header-sticky .nav li a.active {
  color: #4b8ef1;
}

.header-sticky .nav .opration {
  display: flex;
  align-items: center;
}

.header-sticky .nav li .dropdown {
  font-size: 16px;
  color: #2a2a2a;
  border: none;
}

@media (max-width: 1200px) {
  .header-area .main-nav .nav li {
    padding-left: 12px;
    padding-right: 12px;
  }
  .header-area .main-nav:before {
    display: none;
  }
}

@media (max-width: 767px) {
  .header-area .main-nav .logo {
    color: #1e1e1e;
  }
  .header-area.header-sticky .nav li a:hover,
  .header-area.header-sticky .nav li a.active {
    color: #4b8ef1 !important;
    opacity: 1;
  }
  .header-area {
    background-color: #fff;
    padding: 0px 15px;
    height: 100px;
    box-shadow: none;
    text-align: center;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.03);
  }
  .header-area .container {
    padding: 0px;
  }
  .header-area .logo {
    margin-left: 30px;
  }
  .header-area .main-nav {
    overflow: hidden;
  }
  .header-area .main-nav .nav {
    float: none;
    width: 100%;
    display: none;
    -webkit-transition: all 0s ease 0s;
    -moz-transition: all 0s ease 0s;
    -o-transition: all 0s ease 0s;
    transition: all 0s ease 0s;
    margin-left: 0px;
  }
  .background-header .nav {
    margin-top: 80px;
  }
  .header-area.header-sticky .nav {
    margin-top: 100px;
  }
  .header-area .main-nav .nav li {
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e7e7e7;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .header-area .main-nav .nav li a {
    height: 50px !important;
    line-height: 50px !important;
    padding: 0px !important;
    border: none !important;
    background: #f7f7f7 !important;
    color: #191a20 !important;
  }
  .header-area .main-nav .nav li a:hover {
    background: #eee !important;
    color: #4b8ef1 !important;
  }
}

@media (min-width: 767px) {
  .header-area .main-nav .nav {
    display: flex !important;
  }
}
</style>
