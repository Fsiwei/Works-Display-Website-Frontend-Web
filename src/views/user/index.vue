<template>
  <div class="user">
    <div class="header">
      <div class="title">用户名个人中心</div>
      <img src="../../assets/images/background.png" alt="" />
    </div>
    <div class="main">
      <div class="container">
        <!-- 左侧显示导航区域 -->
        <div class="left">
          <div class="top">
            <div class="userInfo">
              <div class="userImg">
                <img src="../../assets/images/user.png" alt="" />
              </div>
              <span>作者名称xxxxxxxxx</span>
            </div>
            <div class="menu">
              <ul ref="menuItemUl">
                <li
                  ref="menuItem"
                  :class="{ active: $route.path == '/user/works' }"
                  @click="changeActive('/user/works')"
                >
                  我的作品
                </li>
                <li
                  ref="menuItem"
                  :class="{
                    active:
                      $route.path == '/user/message/comment' ||
                      $route.path == '/user/message/like' ||
                      $route.path == '/user/message/notice',
                  }"
                  @click="changeActive('/user/message/comment')"
                >
                  我的消息
                </li>
                <li
                  ref="menuItem"
                  :class="{ active: $route.path == '/user/information' }"
                  @click="changeActive('/user/information')"
                >
                  个人信息
                </li>
                <li
                  ref="menuItem"
                  :class="{ active: $route.path == '/user/setting' }"
                  @click="changeActive('/user/setting')"
                >
                  设置
                </li>
                <!-- <li></li> -->
              </ul>
            </div>
          </div>
          <!-- 以路由作为高亮标识 -->
        </div>
        <!-- 右侧展示个人中心二级路由组建区域 -->
        <div class="content">
          <!-- 子组件展示结构的位置 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
let menuItemUl = ref();
let menuItem = ref([]);
onMounted(() => {
  //   isActive();
  setTimeout(() => {
    console.log(menuItem.value, "menuItem.value");
  });
});
// 左侧导航路由跳转的函数
const changeActive = (path) => {
  $router.push({ path });
};
// const isActive = () => {
//   menuItem.forEach((element) => {
//     if (element === $route.path) {
//     }
//   });
// };
</script>

<style scoped>
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}

.user {
  box-sizing: border-box;
}

.user .header {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 500px;
}

.user .header .title {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-top: 5%;
  text-align: center;
  color: #fff9f1;
  color: #f8f8ff;
  font-family: SIMYOU, Arial, sans-serif;
  font-size: 3rem;
}

.user .header img {
  width: 100%;
  transform: translateY(-15%);
  transition: transform 1s ease;
}

.user .main {
  padding: 20px 0;
  background: #fff;
  background-image: url(../../assets/images/grid.svg);
  background-repeat: repeat;
  background-size: 300px 300px;
}
.user .main .container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1320px;
}
.user .main .left {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  height: 400px;
  border-radius: 5px;
  text-align: center;
  font-family: SIMYOU, Arial, sans-serif;
  /* background-color: rgb(70, 130, 180); */
  background-color: #8abcd1;
  background-color: rgb(68, 68, 68, 0.9);
}

.user .main .left .top .userInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.user .main .left .top .userInfo .userImg {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  overflow: hidden;
}

.user .main .left .top .userInfo .userImg img {
  width: 100px;
  height: 100px;
}
.user .main .left .top .userInfo span {
  margin-top: 15px;
  font-size: 1rem;
}
.user .main .left .menu {
  width: 264px;
  height: 500px;
}

.user .main .left .menu li {
  display: block;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
}

.user .main .left .menu li.active {
  background-color: rgb(51, 51, 51, 0.9);
}

.user .main .left .menu li:hover {
  background-color: rgb(51, 51, 51, 0.9);
  cursor: pointer;
}

.user .main .content {
  flex: 8;
  margin-left: 20px;
}
</style>
