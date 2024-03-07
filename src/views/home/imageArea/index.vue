<template>
  <div class="imageArea">
    <div class="top">
      <div class="title">
        <h2>图片展示区</h2>
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
        v-for="item in workStore.imageWorkInfo.data"
        :key="item.id"
        :body-style="{ padding: '0px' }"
        @click="goWorkDetail(item.id)"
      >
        <!-- <img src="../../../assets/images/3.jpg" alt="Image" class="image" /> -->
        <div class="imgwork">
          <img :src="item.imgUrl[0]" alt="Image" class="image" />
          <!-- {{ item.imgUrl }} -->
        </div>
        <div class="info" style="padding: 10px">
          <div class="user">
            <div class="userImg">
              <img :src="item.userProfile" alt="" />
            </div>
            <span>{{ item.username }}</span>
          </div>
          <div class="bottom">
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
                >{{ item.like > 99 ? 99 : item.like
                }}<span v-if="item.like > 99">+</span></span
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
                >{{ item.comment > 99 ? 99 : item.comment
                }}<span v-if="item.comment > 99">+</span></span
              >
            </div>
            <time class="time">{{ item.date }}</time>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
// 引入作品详情仓库的数据
import useWorkStroe from "@/store/modules/test";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
// 获取数据
let workStore = useWorkStroe();
onMounted(() => {
  // console.log(workStore, "workStore");
});
// let imgList = ref([]);
// onMounted(() => {
//   reqGetImageWorksList();
// });
// const reqGetImageWorksList = async () => {
//   try {
//     let result = await axios.get("/mock/imageWorks");
//     imgList = result.data.data;
//     // 在这里使用返回的data
//     console.log(imgList, "imgList");
//   } catch (error) {
//     // 处理错误
//     console.error(error);
//     console.log(error.message);
//   }
// };
const goWorkDetail = (id) => {
  console.log(id, "workStore.imageWorkInfo.data.id");
  $router.push({
    path: "/workDetail",
    query: { imageId: id, type: "image" },
  });
};
</script>

<style scoped>
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}
.imageArea {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imageArea .top {
  width: 100%;
  text-align: center;
}
.imageArea .top .title {
  font-family: SIMYOU, Arial, sans-serif;
  font-size: 2rem;
  margin: 20px 0 10px;
}
.imageArea .top .more {
  display: flex;
  float: right;
  align-items: center;
  margin-bottom: 5px;
  color: #555;
}

.imageArea .top .more:hover {
  cursor: pointer;
}

.imageArea .card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.imageArea .card::v-deep(.el-card) {
  margin-bottom: 10px;
}

.imageArea .card::v-deep(.el-card):hover {
  box-shadow: 0 0 20px 10px rgba(67, 67, 67, 0.08);
  /* box-shadow: 0 0 20px 10px #f9f9f9; */
  cursor: pointer;
}

.imageArea .card .imgwork {
  width: 235px;
  height: 236px;
}
.imageArea .card .info .user {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  /* overflow: hidden; */
}

.imageArea .card .imgwork .image {
  height: 236px;
}

.imageArea .card .info .user .userImg {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.imageArea .card .info .user .userImg img {
  width: 30px;
  height: 30px;
}

.imageArea .card .info .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 14px;
}

.imageArea .card .info .bottom .like,
.imageArea .card .info .bottom .comment {
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

</style>
