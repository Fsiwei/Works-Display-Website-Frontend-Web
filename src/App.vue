<template>
  <div class="container">
    <!-- 顶部的全局组件 -->
    <WebsiteHeader />
    <div class="content">
      <!-- 展示路由组件区域 -->
      <router-view></router-view>
    </div>
    <!-- 底部的全局组件 -->
    <WebsiteFooter />
  </div>
</template>

<script setup>
// import useUserStore from "@/store/modules/user";
// let userStore = useUserStore();
import {onMounted} from 'vue';
onMounted(() => {
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container .content {
  width: 100%;
  min-height: 700px;
  background-color: #ecf0f3;
}
</style>
