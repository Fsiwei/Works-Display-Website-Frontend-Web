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
                  <img :src="workData.avatar" alt="" />
                </div>
                <span>{{ workData.username }}</span>
              </div>
              <div class="info">
                <h3 class="title">作品名称：{{ workData.workName }}</h3>
                <p class="describe">
                  作品描述：{{ workData.workDescribe }}
                  <span class="tap"
                    >作品标签：
                    <span
                      v-for="(tap, index) in getWorkType(workData.workType)"
                      :key="index"
                    >
                      #{{ tap }}</span
                    >
                  </span>
                </p>
                <span
                  >发布日期：{{
                    dayjs(workData.uploadDate).format("YYYY-MM-DD HH:mm:ss")
                  }}</span
                >
              </div>
            </div>
          </template>
          <div class="footer">
            <div class="scene scene-one">
              <div class="review-state">
                <el-radio-group v-model="reviewParams.state">
                  <el-radio value="RELEASE" border>通过</el-radio>
                  <el-radio value="REJECT" border>驳回</el-radio>
                </el-radio-group>
              </div>
              <div class="review-content">
                <el-input
                  ref="inputElement"
                  style="width: 250px"
                  @keydown.enter="submit"
                  :trigger-on-focus="false"
                  placeholder="填写审核信息"
                  v-model="reviewParams.content"
                />
                <el-popconfirm title="确定提交？" @confirm="submit">
                  <template #reference>
                    <el-button
                      type="primary"
                      color="#333"
                      size="default"
                      @click="submit"
                      >提交</el-button
                    >
                  </template>
                </el-popconfirm>
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
import { reqReviewWork } from "@/api/review";
// 引入作品详情仓库的数据
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
// 获取仓库对象
const userStore = useUserStore();
let $router = useRouter();
let $route = useRoute();
// 定义一个响应式数据：决定展示内容
const workData = reactive({});
const reviewParams = reactive({
  authorId: null,
  username: null,
  adminId: null,
  workId: null,
  workName: null,
  state: null,
  reviewDescribe: null,
  reviewDate: null,
});
let scene = ref(0);
// 组件挂载完毕
onMounted(() => {
  if ($route.query.type == "video") {
    console.log("type", $route.query.type);
    // 切换场景为 1
    scene.value = 1;
  }
  getWorkDetail();
});

// 获取作品信息
const getWorkDetail = async () => {
  let id = $route.query.workId;
  try {
    if (id) {
      const res = await reqGetWorkByWorkId(id);
      console.log("Workres5555", res);
      if (res.code === "200") {
        Object.assign(workData, res.data);
        console.log("workData", workData);
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

const submit = async () => {
  reviewParams.authorId = workData.userId;
  reviewParams.username = workData.username;
  reviewParams.adminId = userStore.userInfo.id;
  reviewParams.workId = workData.workId;
  reviewParams.workName = workData.workName;
  reviewParams.reviewDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  try {
    let res = await reqReviewWork(reviewParams);
    if (res.code === "200") {
      // 跳转路由
      $router.push("/admin/work-list-table");
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
}
.work-detail .right .info span {
  font-size: 14px;
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

.work-detail .right .footer .scene {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

/* .work-detail .right .footer .scene .review-state::v-deep(.is-checked) {
    background-color: #333;
    border-color: #333;
    color: #333 !important;
  } */

.work-detail .right .footer .scene .review-content {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.work-detail .right .footer .scene::v-deep(.el-input__wrapper) {
  color: #aaa;
  border-radius: 50px;
}

.work-detail .right .footer .scene::v-deep(.el-button) {
  width: 80px;
  height: 30px;
  margin-left: 10px;
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
