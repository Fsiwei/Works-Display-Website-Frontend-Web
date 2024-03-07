<template>
  <div class="message">
    <div class="top">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item
          :class="{ active: $route.path == '/user/message/comment' }"
          @click="changeActive('/user/message/comment')"
          index="1"
          >评论</el-menu-item
        >
        <el-menu-item
          :class="{ active: $route.path == '/user/message/like' }"
          @click="changeActive('/user/message/like')"
          index="2"
          >点赞</el-menu-item
        >
        <el-menu-item
          :class="{ active: $route.path == '/user/message/notice' }"
          @click="changeActive('/user/message/notice')"
          index="3"
          >系统通知</el-menu-item
        >
      </el-menu>
    </div>
    <div class="content">
      <!-- 子组件展示结构的位置 -->
      <router-view></router-view>
      <!-- 评论 -->
      <!-- <div class="comment" v-if="$route.path === '/user/message/comment'">
        <el-card v-for="(item, index) in 10" :key="index" shadow="always">
          <p>用户名</p>
          <div class="tip">
            <span
              >评论了你的作品 <span style="color: #999">YYYY-MM-DD</span></span
            >
          </div>
          <span>评论的内容xxxxxxxxxx</span>
        </el-card>
      </div> -->
      <!-- 点赞 -->
      <!-- <div class="like" v-if="$route.path === '/user/message/like'">
        <el-card v-for="(item, index) in 10" :key="index" shadow="always">
          <p>用户名</p>
          <div class="tip">
            <span
              >点赞了你的作品 <span style="color: #999">YYYY-MM-DD</span></span
            >
          </div>
        </el-card>
      </div> -->
      <!-- 系统通知 -->
      <!-- <div class="notice" v-if="$route.path === '/user/message/notice'">
        <el-card v-for="(item, index) in 10" :key="index" shadow="always">
          <p>通知内容xxxxxxxxxxxxxxxx</p>
          <div class="tip">
            <span style="color: #999">YYYY-MM-DD</span>
          </div>
        </el-card>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
const changeActive = (path) => {
  $router.push(path);
};
console.log($route.path);
</script>

<style scoped>
.message {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.message .top .el-menu-demo {
  /* position: absolute; */
  box-shadow: 0 0 10px 2px rgba(153, 153, 153, 0.3);
  margin-bottom: 20px;
  border: 1px solid #ddd;
}
/* .message .top .el-menu-demo::v-deep(.el-menu) {
  border-radius: 5px;
  overflow: hidden;
} */
.message .top .el-menu-demo::v-deep(.el-menu-item):hover {
  background-color: rgb(102, 102, 102, 0.8);
  color: #fff;
}
.message .top .el-menu-demo::v-deep(.active) {
  background-color: rgb(51, 51, 51, 0.8);
  border-bottom: 0;
  color: #fff !important;
}
.message .content .comment,
.message .content .like,
.message .content .notice {
  width: 100%;
  height: 500px;
  overflow: auto;
}

.message .content .comment::v-deep(.el-card),
.message .content .like::v-deep(.el-card),
.message .content .notice::v-deep(.el-card) {
  margin-bottom: 10px;
}
.message .content .comment::v-deep(.el-card):last-child,
.message .content .like::v-deep(.el-card):last-child,
.message .content .notice::v-deep(.el-card):last-child {
  margin-bottom: 0;
}

.message .content .comment .tip,
.message .content .like .tip,
.message .content .notice .tip {
  margin: 10px 0;
}
.message .content .comment .tip span,
.message .content .like .tip span,
.message .content .notice .tip span {
  font-size: 13px;
}
</style>
