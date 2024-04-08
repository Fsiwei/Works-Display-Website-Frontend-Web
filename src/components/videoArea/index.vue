<template>
  <div class="videoArea">
    <div class="top" v-if="isShow">
      <div class="title">
        <h2>视频展示区</h2>
      </div>
      <div class="more">
        <svg
          t="1697739378236"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="17520"
          width="20"
          height="20"
        >
          <path
            d="M759.466667 533.333333L469.333333 243.2l29.866667-29.866667 320 320-320 320-29.866667-29.866666 290.133334-290.133334z m-298.666667 0L170.666667 243.2l29.866666-29.866667 320 320L200.533333 853.333333l-29.866666-29.866666 290.133333-290.133334z"
            fill="#8a8a8a"
            p-id="17521"
          ></path>
        </svg>
        <span>更多</span>
      </div>
    </div>
    <div :class="cardClassName">
      <el-card
        v-for="item in worksData"
        :key="item.workId"
        :body-style="{ padding: '0px' }"
      >
        <div class="videowork" @click="goWorkDetail(item.workId)">
          <!-- <img :src="item.videoUrl" alt="Image" class="image" /> -->
          <!-- <img src="../../../assets/images/3.png" class="image" /> -->
          <video :src="item.workUrls" muted loop class="video"></video>
          <div class="video-overlay"></div>
        </div>
        <div class="info" style="padding: 10px">
          <div class="works_title" @click="goWorkDetail(item.workId)">
            <p>{{ item.workName }}</p>
          </div>
          <div class="bottom">
            <div class="user">
              <div class="userImg">
                <img :src="item.avatar" alt="" />
              </div>
              <span>{{ item.username }}</span>
            </div>
            <time class="time">{{
              dayjs(item.uploadDate).format("YYYY-MM-DD")
            }}</time>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
// 引入作品详情仓库的数据
import useWorkStroe from "@/store/modules/test";
import dayjs from "dayjs";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
// 获取数据
let workStore = useWorkStroe();
// 接收父组件传来的作品数据
const props = defineProps(["worksData"]);
console.log("props", props.worksData);
let cardClassName = ref("card"); // 默认样式的 className
let isShow = ref(true);

// 监听路由变化，在特定的路由名时切换 className
watchEffect(() => {
  if ($route.name === "UserInfoWork") {
    cardClassName.value = "card card-userinfo-work"; // 切换为特殊样式的 className
  } else if ($route.name === "Search") {
    cardClassName.value = "card card-search-work"; // 切换为特殊样式的 className
  } else {
    cardClassName.value = "card"; // 切换回默认样式的 className
  }
  if ($route.name === "Search" || $route.name === "UserInfoWork") {
    isShow.value = false; // 不显示顶部文字
  }
});
onMounted(() => {
  // console.log(workStore, "workStore");
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.muted = true; // 确保视频被静音
    video.addEventListener("mouseenter", () => {
      video.play();
    });
    video.addEventListener("mouseleave", () => {
      video.pause();
    });
  });
});

const goWorkDetail = (id) => {
  $router.push({ path: "/workDetail", query: { workId: id, type: "video" } });
};

// 1. 本页面通过 props 获取视频作品的信息
// 2. 将作品ID通过路由传递给作品详情页，从数据库中获取作品的所有信息
</script>

<style scoped>
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}
.videoArea {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.videoArea .top {
  width: 100%;
  text-align: center;
}
.videoArea .top .title {
  font-family: SIMYOU, Arial, sans-serif;
  font-size: 2rem;
  margin: 20px 0 10px;
}
.videoArea .top .more {
  display: flex;
  float: right;
  align-items: center;
  margin-bottom: 5px;
  color: #555;
}

.videoArea .top .more:hover {
  cursor: pointer;
}

.videoArea .card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.videoArea .card-userinfo-work {
  justify-content: flex-start;
  gap: 19.3px; /* 设置卡片之间的间距 */
}

.videoArea .card-search-work {
  justify-content: flex-start;
  gap: 26.3px; /* 设置卡片之间的间距 */
}

.videoArea .card::v-deep(.el-card) {
  height: 230px;
}

.videoArea .card::v-deep(.el-card):hover {
  box-shadow: 0 0 20px 10px rgba(67, 67, 67, 0.08);
  cursor: pointer;
}

/* .videoArea .card::v-deep(.el-card) img {
  height: 150px;
} */

.videoArea .videowork {
  position: relative; /* 子元素使用绝对定位 */
  width: 235px;
  /* height: 150px; */
  height: 0; /* 防止容器折叠 */
  padding-top: 56.25%; /* 16:9 宽高比，也可以调整为其它宽高比 */
  overflow: hidden; /* 隐藏超出容器的视频部分 */
}

.videoArea .videowork .video {
  /* width: 235px; */
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 覆盖整个容器，可能会被裁切 */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 缩放视频以完全适应容器 */
  object-position: center; /* 视频居中 */
  transform: translate(-50%, -50%); /* 使用transform来精确居中 */
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1); /* 黑色蒙版，50%不透明度 */
  transition: opacity 0.5s ease; /* 平滑的透明度变化 */
}

.videowork:hover .video-overlay {
  opacity: 0; /* 鼠标悬浮时蒙版消失 */
}

.videowork:hover video {
  cursor: pointer;
}

.videoArea .info .works_title {
  width: 215px;
  height: 45px;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 5px;
}
.videoArea .info .works_title p {
  /* word-wrap: break-word; */
  word-break: break-all;
}

.videoArea .info .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 14px;
}

.videoArea .info .user {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  /* overflow: hidden; */
}

.videoArea .info .user .userImg {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.videoArea .info .user .userImg img {
  width: 30px;
  height: 30px;
}
</style>
