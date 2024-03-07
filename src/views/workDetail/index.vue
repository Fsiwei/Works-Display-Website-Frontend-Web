<template>
  <div class="work-detail">
    <div class="container">
      <div class="work-display">
        <el-carousel :interval="5000" arrow="always" v-if="scene == 0">
          <el-carousel-item
            v-for="item in workStore.imageWorkDetial.imgUrl"
            :key="item.id"
          >
            <img :src="item" alt="Image" class="image" />
          </el-carousel-item>
        </el-carousel>
        <el-card :body-style="{ padding: '0px' }" v-else>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </div>
      <div class="right">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <div class="user">
                <div class="userImg">
                  <!-- <img src="../../assets/images/user.png" alt="" /> -->
                  <img :src="workStore.imageWorkDetial.userProfile" alt="" />
                </div>
                <span>{{ workStore.imageWorkDetial.username }}</span>
              </div>
              <div class="info">
                <h3 class="title">{{ workStore.imageWorkDetial.title }}</h3>
                <p class="describe">
                  {{ workStore.imageWorkDetial.describe }}
                  <a
                    v-for="(tap, index) in workStore.imageWorkDetial.tap"
                    :key="index"
                    >#{{ tap }}</a
                  >
                </p>
                <span>{{ workStore.imageWorkDetial.date }}</span>
              </div>
            </div>
          </template>
          <span style="color: rgba(51, 51, 51, 0.6)"
            >共 {{ workStore.imageWorkDetial.comment }} 条评论</span
          >
          <div
            v-for="(item, index) in workStore.imageWorkDetial.commentParams"
            :key="index"
            class="text item"
          >
            <div class="userImg">
              <img :src="item.userProfile" alt="" />
            </div>
            <div class="right-info">
              <span style="color: rgba(51, 51, 51, 0.8)" class="name">{{
                item.username
              }}</span>
              <p>{{ item.text }}</p>
            </div>
          </div>
          <div class="footer">
            <div class="scene scene-one">
              <el-button size="large" style="width: 200px" round
                >说点什么...</el-button
              >
              <div class="like">
                <!-- 点赞前 -->
                <svg
                  v-if="true"
                  t="1697735696656"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10780"
                  width="18"
                  height="18"
                >
                  <path
                    d="M707.392 93.355c-77.264 0-149.104 38.759-196.389 102.673-47.258-63.929-119.083-102.673-196.389-102.673-139.281 0-252.596 123.888-252.596 276.181 0 90.853 40.585 154.588 73.209 205.797 94.816 148.743 333.217 333.849 343.314 341.653 9.727 7.52 21.1 11.282 32.447 11.282 11.373 0 22.73-3.761 32.447-11.282 10.11-7.804 248.524-192.91 343.313-341.653 32.64-51.209 73.238-114.944 73.238-205.797-0.001-152.292-113.316-276.181-252.596-276.181zM840.628 540.182c-90.254 141.629-329.64 326.614-329.64 326.614s-239.359-184.986-329.641-326.614c-33.296-52.287-63.11-101.983-63.11-170.647 0-118.568 87.912-214.725 196.376-214.725 80.155 0 148.967 52.588 179.494 127.875l0-0.375 0.082 0c2.274 7.851 8.905 13.575 16.798 13.575 7.921 0 14.552-5.723 16.812-13.575l0.232 0c30.597-75.062 99.313-127.499 179.359-127.499 108.438 0 196.376 96.157 196.376 214.725 0 68.663-29.816 118.359-63.14 170.647z"
                    fill="#E5404F"
                    p-id="10781"
                  ></path>
                </svg>
                <!-- 点赞后 -->
                <svg
                  v-else
                  t="1697734738021"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="8304"
                  width="18"
                  height="18"
                >
                  <path
                    d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                    fill="#E5404F"
                    p-id="8305"
                  ></path>
                </svg>
                <span style="margin-left: 2px"
                  >{{
                    workStore.imageWorkDetial.like > 99
                      ? 99
                      : workStore.imageWorkDetial.like
                  }}<span v-if="workStore.imageWorkDetial.like > 99"
                    >+</span
                  ></span
                >
              </div>
              <div class="comment">
                <svg
                  t="1697734947848"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="9372"
                  width="18"
                  height="18"
                >
                  <path
                    d="M896 138.66666667H128c-38.4 0-64 25.6-64 64V746.66666667c0 38.4 25.6 64 64 64h128v128c83.2 0 166.4-44.8 256-128h384c38.4 0 64-25.6 64-64V202.66666667c0-38.4-25.6-64-64-64z m0 608H486.4l-19.2 19.2c-51.2 51.2-102.4 83.2-147.2 96V746.66666667H128V202.66666667h768V746.66666667z"
                    p-id="9373"
                    fill="#515151"
                  ></path>
                  <path
                    d="M320 477.86666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                    p-id="9374"
                    fill="#515151"
                  ></path>
                  <path
                    d="M512 477.86666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                    p-id="9375"
                    fill="#515151"
                  ></path>
                  <path
                    d="M704 477.86666667m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"
                    p-id="9376"
                    fill="#515151"
                  ></path>
                </svg>
                <span style="margin-left: 2px"
                  >{{
                    workStore.imageWorkDetial.comment > 99
                      ? 99
                      : workStore.imageWorkDetial.comment
                  }}<span v-if="workStore.imageWorkDetial.comment > 99"
                    >+</span
                  ></span
                >
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
// 引入作品详情仓库的数据
import useWorkStroe from "@/store/modules/test";
// import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
// 获取仓库对象
// let userStore = useUserStore();
let detailStore = useWorkStroe();
let $router = useRouter();
let $route = useRoute();
// 获取数据
let workStore = useWorkStroe();
// 定义一个响应式数据：决定展示内容
let scene = ref(0);
// 组件挂载完毕
onMounted(() => {
  // 判断:当前这个路由组件是从image / video 来?
  //   if ($route.query.type == "image") {
  //     // 切换场景为 0
  //     scene.value = 0;
  //   }
  if ($route.query.type == "video") {
    // 切换场景为 1
    scene.value = 1;
  }
  // 获取图片作品数据
  detailStore.getImageWorkDetial($route.query.imageId);
  // 获取视频作品数据
  detailStore.getVideoWorkDetial($route.query.videoId);
});
// // 获取作品信息
// const getImageWorkDetail = async () => {
//   let result: DoctorInfoData = await reqGetDoctorInfo(
//     $route.query.docId as string
//   );
//   if (result.code == 200) {
//     doctorInfo.value = result.data;
//   }
// };
</script>

<style scoped>
.work-detail {
  margin: 20px;
  box-sizing: border-box;
}
.work-detail .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 1320px;
}
.work-detail .work-display {
  flex: 7;
  border-radius: 5px;
  overflow: hidden;
}
.work-detail .work-display::v-deep(.el-carousel__container) {
  height: 600px;
}

.work-detail .work-display .image {
  width: 920px;
}
.work-detail .right {
  flex: 3;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-detail .right .box-card {
  width: 100%;
}
.work-detail .right .user {
  display: flex;
  align-items: center;
}
.work-detail .right .user .userImg {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
}
.work-detail .right img {
  width: 50px;
}
.work-detail .right .user span {
  margin-left: 10px;
  font-size: 20px;
}

.work-detail .right .info {
  margin-top: 10px;
}
.work-detail .right .info .title {
  font-size: 20px;
  font-weight: bold;
}
.work-detail .right .info .describe {
  margin: 10px 0;
  line-height: 1.2;
}
.work-detail .right .info .describe a {
  color: #13386c;
  cursor: pointer;
}
.work-detail .right .info span {
  font-size: 14px;
  color: rgba(51, 51, 51, 0.6);
}

.work-detail .right .item {
  display: flex;
  /* align-items: center; */
  margin-top: 15px;
}
.work-detail .right .item .userImg {
  /* width: 132px; */
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
}
.work-detail .right .item .right-info {
  width: 302px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.work-detail .right .item .right-info p {
  margin-top: 5px;
  /* white-space: pre-wrap; */
  word-wrap: break-word;
  /* word-break: break-all; */
  /* white-space: pre-wrap; */
}
.work-detail .right .footer {
  border-top: 1px solid #ddd;
  padding-top: 20px;
  margin-top: 20px;
}
.work-detail .right .footer .scene {
  display: flex;
  align-items: center;
}
.work-detail .right .footer .scene::v-deep(.el-button) {
  color: #aaa;
}
.work-detail .right .footer .scene::v-deep(.el-button):hover {
  background-color: #fff;
  color: #aaa;
  border: 1px solid #ddd;
}
.work-detail .right .footer .scene .like,
.work-detail .right .footer .scene .comment {
  margin-left: 10px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

/* 设置响应式 */
@media (max-width: 1200px) {
  .work-detail .container {
    width: 1080px;
  }
  .work-detail .right .item .right-info {
    width: 247px;
  }
}
@media (max-width: 1000px) {
  .work-detail .container {
    width: 880px;
  }
  .work-detail .right .item .right-info {
    width: 302px;
  }
}
@media (max-width: 800px) {
  .work-detail .container {
    width: 680px;
  }
  .work-detail .right .item .right-info {
    width: 1550px;
  }
}
@media (max-width: 600px) {
  .work-detail .container {
    width: 480px;
  }
  .work-detail .right .item .right-info {
    width: 1090px;
  }
}
</style>
