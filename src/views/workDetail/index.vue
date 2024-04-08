<template>
  <div class="work-detail">
    <div class="container">
      <div class="work-display">
        <el-carousel :interval="5000" arrow="always" v-if="scene == 0">
          <el-carousel-item
            v-for="(item, index) in getImageUrl(workData.workUrls)"
            :key="index"
          >
            <img :src="item" alt="Image" class="image" />
          </el-carousel-item>
        </el-carousel>
        <el-card :body-style="{ padding: '0px' }" v-else>
          <div class="video-display">
            <video
              class="video"
              :src="workData.workUrls"
              controls
              autoplay
              volume="0.1"
            ></video>
          </div>
          <div style="padding: 30px 20px; font-size: 20px">
            <span>{{ workData.workName }}</span>
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
                  <img :src="workData.avatar" alt="" />
                </div>
                <span>{{ workData.username }}</span>
              </div>
              <div class="info">
                <h3 class="title">{{ workData.workName }}</h3>
                <p class="describe">
                  {{ workData.workDescribe }}
                  <span class="tap">
                    <a
                      v-for="(tap, index) in getWorkType(workData.workType)"
                      :key="index"
                    >
                      #{{ tap }}</a
                    >
                  </span>
                </p>
                <span>{{
                  dayjs(workData.uploadDate).format("YYYY-MM-DD")
                }}</span>
              </div>
            </div>
          </template>
          <span style="color: rgba(51, 51, 51, 0.6)"
            >共 {{ workData.comment ? workData.comment : 0 }} 条评论</span
          >
          <el-scrollbar class="comment-box" max-height="360px">
            <div
              v-for="item in commentData.commentList"
              :key="item.commentId"
              class="text item"
            >
              <div class="userImg">
                <img :src="item.avatar" alt="" />
              </div>
              <div class="right-info">
                <span style="color: rgba(51, 51, 51, 0.8)" class="name">{{
                  item.username
                }}</span>
                <p>{{ item.content }}</p>
                <p>{{ dayjs(item.commentDate).format("YYYY-MM-DD") }}</p>
              </div>
            </div>
          </el-scrollbar>
          <!-- <div class="comment-box">
            <div
              v-for="item in commentData.commentList"
              :key="item.commentId"
              class="text item"
            >
              <div class="userImg">
                <img :src="item.avatar" alt="" />
              </div>
              <div class="right-info">
                <span style="color: rgba(51, 51, 51, 0.8)" class="name">{{
                  item.username
                }}</span>
                <p>{{ item.content }}</p>
                <p>{{ dayjs(item.commentDate).format("YYYY-MM-DD") }}</p>
              </div>
            </div>
          </div> -->
          <div class="footer">
            <div class="scene scene-one">
              <el-input
                ref="inputElement"
                style="width: 250px"
                @keydown.enter="releaseComment"
                :trigger-on-focus="false"
                placeholder="说点什么..."
                v-model="commentParams.content"
              />
              <div class="like" style="width: 50px">
                <!-- 点赞前 -->
                <svg
                  v-if="!likeFlag"
                  t="1697735696656"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="10780"
                  width="18"
                  height="18"
                  @click="likeThis()"
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
                  @click="unLike()"
                >
                  <path
                    d="M512 901.746939c-13.583673 0-26.122449-4.179592-37.093878-13.061225-8.881633-7.314286-225.697959-175.020408-312.424489-311.379592C133.746939 532.37551 94.040816 471.24898 94.040816 384.522449c0-144.718367 108.146939-262.269388 240.326531-262.269388 67.395918 0 131.657143 30.82449 177.632653 84.636735 45.453061-54.334694 109.191837-84.636735 177.110204-84.636735 132.702041 0 240.326531 117.55102 240.326531 262.269388 0 85.159184-37.093878 143.673469-67.395919 191.216327l-1.044898 1.567346c-86.726531 136.359184-303.542857 304.587755-312.424489 311.379592-10.44898 8.359184-22.987755 13.061224-36.571429 13.061225z"
                    fill="#E5404F"
                    p-id="8305"
                  ></path>
                </svg>
                <span style="margin-left: 3px"
                  >{{
                    workData.workLike > 99
                      ? 99
                      : workData.workLike
                      ? workData.workLike
                      : 0
                  }}<span v-if="workData.workLike > 99">+</span></span
                >
              </div>
              <div class="comment" style="width: 50px">
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
                <span style="margin-left: 3px"
                  >{{
                    workData.comment > 99
                      ? 99
                      : workData.comment
                      ? workData.comment
                      : 0
                  }}<span v-if="workData.comment > 99">+</span></span
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
import { ElMessage } from "element-plus";
import dayjs from "dayjs";
import { reqGetWorkByWorkId } from "@/api/work";
import { reqReleaseComment, reqGetCommentByWorkId } from "@/api/comment";
import {
  reqReleaseLike,
  reqIsLikeByUserIdAndWorkId,
  reqCancelLikeByUserIdAndWorkId,
} from "@/api/like";
// 引入作品详情仓库的数据
import useWorkStroe from "@/store/modules/test";
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
// 获取仓库对象
const userStore = useUserStore();
let detailStore = useWorkStroe();
let $router = useRouter();
let $route = useRoute();
// 获取数据
let workStore = useWorkStroe();
// 定义一个响应式数据：决定展示内容
const workData = reactive({});
const commentData = reactive({});
const commentParams = reactive({
  userId: null,
  username: null,
  avatar: null,
  authorId: null,
  workId: null,
  workName: null,
  content: null,
  commentDate: null,
});
const likeParams = reactive({
  userId: null,
  username: null,
  avatar: null,
  authorId: null,
  workId: null,
  workName: null,
  commentDate: null,
});
let scene = ref(0);
let likeFlag = ref(false);
// 组件挂载完毕
onMounted(() => {
  // 判断:当前这个路由组件是从image / video 来?
  //   if ($route.query.type == "image") {
  //     // 切换场景为 0
  //     scene.value = 0;
  //   }
  if ($route.query.type == "video") {
    console.log("type", $route.query.type);
    // 切换场景为 1
    scene.value = 1;
  }
  getWorkDetail();
  getWorkComment();
  isLike();

  // // 获取图片作品数据
  // detailStore.getImageWorkDetial($route.query.imageId);
  // // 获取视频作品数据
  // detailStore.getVideoWorkDetial($route.query.videoId);
});

// 发表评论
const releaseComment = async () => {
  commentParams.userId = userStore.userInfo.id;
  commentParams.username = userStore.userInfo.username;
  commentParams.avatar = userStore.userInfo.avatar;
  commentParams.authorId = workData.userId;
  commentParams.workId = workData.workId;
  commentParams.workName = workData.workName;
  commentParams.commentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  console.log("commentParams", commentParams);
  try {
    // 表单上传操作
    const res = await reqReleaseComment(commentParams);
    console.log("Releaseres", res);
    if (res.code === "200") {
      // 页面刷新获取新的评论数据
      getWorkDetail();
      getWorkComment();
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

// 获取作品信息
const getWorkDetail = async () => {
  let id = $route.query.workId;
  try {
    if (id) {
      const res = await reqGetWorkByWorkId(id);
      console.log("Workres11111", res);
      if (res.code === "200") {
        Object.assign(workData, res.data);
        console.log("workData", workData);
        // workData = res.data;
      }
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

// 获取作品评论信息
const getWorkComment = async () => {
  let id = $route.query.workId;
  try {
    if (id) {
      const res = await reqGetCommentByWorkId(id);
      console.log("Commentres", res);
      if (res.code === "200") {
        Object.assign(commentData, res.data);
        console.log("commentData", commentData);
        // workData = res.data;
      }
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

const getImageUrl = (workUrls) => {
  if (workUrls) {
    const urls = workUrls.split(",");
    return urls.length > 0 ? urls : "";
  } else {
    return "";
  }
};

const getWorkType = (workType) => {
  if (workType) {
    const type = workType.split(",");
    return type.length > 0 ? type : "";
  } else {
    return "";
  }
};

// 判断当前用户是否点赞过该作品
const isLike = async () => {
  let workId = $route.query.workId;
  let userId = userStore.userInfo.id;
  try {
    const res = await reqIsLikeByUserIdAndWorkId(workId, userId);
    console.log("IsLikeres", res);
    if (res.code === "200") {
      // 页面刷新获取新的点赞数据
      console.log("更新点赞数据的操作", res.data);
      likeFlag.value = res.data;
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

// 点赞处理
const likeThis = async () => {
  likeParams.userId = userStore.userInfo.id;
  likeParams.username = userStore.userInfo.username;
  likeParams.avatar = userStore.userInfo.avatar;
  likeParams.authorId = workData.userId;
  likeParams.workId = workData.workId;
  likeParams.workName = workData.workName;
  likeParams.likeDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  console.log("likeParams", likeParams);
  try {
    // 表单上传操作
    const res = await reqReleaseLike(likeParams);
    console.log("ReleaseLikeres", res);
    if (res.code === "200") {
      // 页面刷新获取新的评论数据
      isLike();
      getWorkDetail();
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

// 取消点赞
const unLike = async () => {
  let workId = $route.query.workId;
  let userId = userStore.userInfo.id;
  try {
    // 表单上传操作
    const res = await reqCancelLikeByUserIdAndWorkId(workId, userId);
    console.log("UNLikeres", res);
    if (res.code === "200") {
      // 页面刷新获取新的点赞数据
      console.log("取消点赞", res.data);
      likeFlag.value = res.data;
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
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

.work-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0 40px;
  background: #fff;
  background-image: url(../../assets/images/grid.svg);
  background-repeat: repeat;
  background-size: 300px 300px;
}

/* .work-detail {
  margin: 20px;
  box-sizing: border-box;
} */
.work-detail .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 1320px;
}
.work-detail .work-display {
  flex: 7;
  height: 600px;
  border-radius: 5px;
  box-shadow: 0 0 15px 7px rgba(67, 67, 67, 0.08);
  overflow: hidden;
}
.work-detail .work-display::v-deep(.el-carousel__container) {
  /* width: 910px; */
  position: relative; /* 子元素使用绝对定位 */
  height: 600px;
  overflow: hidden;
  background-color: #e3e3e3;
}

.work-detail .work-display .image {
  /* width: 920px; */
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 缩放视频以完全适应容器 */
  object-position: center; /* 视频居中 */
  transform: translate(-50%, -50%); /* 使用transform来精确居中 */
  /* height: 100%;
  object-fit: cover;
  object-position: center; */
}

.work-detail .work-display .video-display {
  position: relative; /* 子元素使用绝对定位 */
  height: 520px;
  padding-top: 56.25%; /* 16:9 宽高比，也可以调整为其它宽高比 */
  overflow: hidden; /* 隐藏超出容器的视频部分 */
}

.work-detail .work-display .video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 缩放视频以完全适应容器 */
  object-position: center; /* 视频居中 */
  transform: translate(-50%, -50%); /* 使用transform来精确居中 */
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
.work-detail .right .info .describe .tap {
  margin-top: 10px;
  display: block;
  color: rgb(1, 104, 222);
}
.work-detail .right .info span {
  font-size: 14px;
  color: rgba(51, 51, 51, 0.6);
}

.work-detail .right .comment-box {
  margin-top: 15px;
}

.work-detail .right .item {
  display: flex;
  /* align-items: center; */
  border-top: 1px solid #ddd;
  padding: 10px 0;
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
  /* margin-top: 20px; */
}
.work-detail .right .footer .scene {
  display: flex;
  align-items: center;
}
.work-detail .right .footer .scene::v-deep(.el-input__wrapper) {
  color: #aaa;
  border-radius: 50px;
}
/* .work-detail .right .footer .scene::v-deep(.el-button):hover {
  background-color: #fff;
  color: #aaa;
  border: 1px solid #ddd;
} */
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
