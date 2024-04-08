<template>
  <div class="content">
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索作品的表单区  -->
    <Search />
    <!-- 底部展示作品的结构 -->
    <div class="works">
      <!-- 图片区 -->
      <ImageArea :worksData="imageWork" />
      <!-- 视频区 -->
      <VideoArea :worksData="videoWork" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
// 引入首页轮播图组件
import Carousel from "./carousel/test.vue";
// 引入首页搜索作品组件
import Search from "/src/components/search/index.vue";
// 引入图片作品组件
import ImageArea from "/src/components/imageArea/index.vue";
// 引入视频作品组件
import VideoArea from "/src/components/videoArea/index.vue";
// 引入小仓库
import useWorkStroe from "/src/store/modules/test";
import { reqGetWorkByFileType } from "@/api/work";
// 获取仓库对象
let detailStore = useWorkStroe();
// 组件挂载完毕：通知 pinia 仓库发请求获取作品详情的数据，存储在仓库中

const imageWork = reactive({});
const videoWork = reactive({});
onMounted(() => {
  // 组件一挂载就调用获取作品的方法
  getImageWork();
  getVideoWork();
});

const getImageWork = async () => {
  const fileType = "image";
  try {
    const res = await reqGetWorkByFileType(fileType);
    if (res.code === "200") {
      console.log("res.data", res.data);
      Object.assign(imageWork, res.data.slice(0, 5));
      console.log("imageWork", imageWork);
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

const getVideoWork = async () => {
  const fileType = "video";
  try {
    const res = await reqGetWorkByFileType(fileType);
    if (res.code === "200") {
      Object.assign(videoWork, res.data.slice(0, 5));
      console.log("videoWork", videoWork);
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};
</script>

<style scoped>
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px;
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
