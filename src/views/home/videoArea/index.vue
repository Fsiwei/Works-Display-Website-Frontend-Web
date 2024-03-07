<template>
  <div class="videoArea">
    <div class="top">
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
    <div class="card">
      <el-card
        v-for="item in workStore.videoWorkInfo.data"
        :key="item.id"
        :body-style="{ padding: '0px' }"
        @click="goWorkDetail(item.id)"
      >
        <div class="videowork">
          <!-- <img :src="item.videoUrl" alt="Image" class="image" /> -->
          <!-- <img src="../../../assets/images/3.png" class="image" /> -->
          <video :src="item.videoUrl" class="video"></video>
        </div>
        <div class="info" style="padding: 10px">
          <div class="works_title">
            <p>{{ item.workname }}</p>
          </div>
          <div class="bottom">
            <div class="user">
              <span>{{ item.username }}</span>
            </div>
            <time class="time">{{ item.date }}</time>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// 引入作品详情仓库的数据
import useWorkStroe from "@/store/modules/test";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
// 获取数据
let workStore = useWorkStroe();
onMounted(() => {
  console.log(workStore, "workStore");
});
const goWorkDetail = (id) => {
  $router.push({ path: "/workDetail", query: { videoId: id, type: "video" } });
};
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
  margin-top: 20px;
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
}

.videoArea .card::v-deep(.el-card) {
  height: 220px;
  margin-bottom: 10px;
}

.videoArea .card::v-deep(.el-card):hover {
  box-shadow: 0 0 20px 10px rgba(67, 67, 67, 0.08);
  cursor: pointer;
}

/* .videoArea .card::v-deep(.el-card) img {
  height: 150px;
} */

.videoArea .card .videowork {
  width: 235px;
  /* height: 150px; */
}

.videoArea .card .videowork .video {
  width: 235px;
}

.videoArea .card .info .works_title {
  width: 215px;
  height: 45px;
  font-size: 18px;
  line-height: 1.2;
  margin-bottom: 5px;
}
.videoArea .card .info .works_title p {
  /* word-wrap: break-word; */
  word-break: break-all;
}

.videoArea .card .info .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 14px;
}

</style>
