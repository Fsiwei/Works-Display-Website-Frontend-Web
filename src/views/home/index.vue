<template>
  <div class="content">
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索作品的表单区  -->
    <Search />
    <!-- 底部展示作品的结构 -->
    <div class="works">
      <!-- 图片区 -->
      <ImageArea />
      <!-- 视频区 -->
      <VideoArea />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// 引入首页轮播图组件
import Carousel from "./carousel/test.vue";
// 引入首页搜索作品组件
import Search from "../../components/search/index.vue";
// 引入首页图片作品组件
import ImageArea from "./imageArea/index.vue";
// 引入首页视频作品组件
import VideoArea from "./videoArea/index.vue";
// 引入小仓库
import useWorkStroe from "../../store/modules/test";
// 获取仓库对象
let detailStore = useWorkStroe();
// 组件挂载完毕：通知 pinia 仓库发请求获取作品详情的数据，存储在仓库中
onMounted(() => {
  // 获取轮播图作品数据
  detailStore.getBannerList();
  // 获取图片作品数据
  detailStore.getImageWorkInfo();
  // 获取视频作品数据
  detailStore.getVideoWorkInfo();
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px;
  background: #fff;
  background-image: url(../../assets/images/grid.svg);
  background-repeat: repeat;
  background-size: 300px 300px;
}

.content .works {
  margin: 0 auto;
  width: 1320px;
}
/* 设置响应式 */
@media (max-width: 1200px) {
  .content .works {
    width: 1080px;
  }
}
@media (max-width: 1000px) {
  .content .works {
    width: 880px;
  }
}
@media (max-width: 800px) {
  .content .works {
    width: 680px;
  }
}
@media (max-width: 600px) {
  .content .works {
    width: 480px;
  }
}
</style>
