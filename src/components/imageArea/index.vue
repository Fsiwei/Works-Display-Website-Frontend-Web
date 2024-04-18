<template>
  <div class="imageArea">
    <div class="top" v-if="isShow">
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
    <div :class="cardClassName">
      <el-card
        v-for="item in worksData"
        :key="item.workId"
        :body-style="{ padding: '0px' }"
      >
        <!-- <img src="../../../assets/images/3.jpg" alt="Image" class="image" /> -->
        <div class="imgwork">
          <img
            :src="firstUrl(item.workUrls)"
            alt="Image"
            class="image"
            @click="goWorkDetail(item.workId)"
          />
          <!-- {{ item.imgUrl }} -->
        </div>
        <div class="info" style="padding: 10px">
          <div class="user">
            <div class="user-info" v-if="!isTag">
              <div class="userImg">
                <img :src="item.avatar" alt="" />
              </div>
              <span style="margin-left: 4px">{{ item.username }}</span>
            </div>
            <div class="statusTag" v-else>
              <el-tag
                :type="item.status=='已发布' ? 'success': item.status=='驳回' ? 'danger' : 'primary'"
                effect="dark"
              >
                {{ item.status }}
              </el-tag>
            </div>
            <time class="time" style="text-align: right">{{
              dayjs(item.uploadDate).format("YYYY-MM-DD")
            }}</time>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect, watch } from "vue";
import { ElMessage } from "element-plus";
import useUserStore from "@/store/modules/user";
import { reqReleaseLike, reqIsLikeByUserIdAndWorkId } from "@/api/like";
import { useRouter, useRoute } from "vue-router";
import dayjs from "dayjs";
// 获取仓库对象
const userStore = useUserStore();
const userId = userStore.userInfo.id;
let $router = useRouter();
let $route = useRoute();
// 接收父组件传来的作品数据
// const maxCardsToShow = $route.name === "Home" ? 5 : 4;
// const slicedWorksData = props.worksData.slice(0, maxCardsToShow);
const props = defineProps(["loading", "worksData"]);
console.log("props211", props.worksData);
let cardClassName = ref("card"); // 默认样式的 className
let isShow = ref(true);
let likeFlag = ref(false);
let isTag = ref(false);

// 监听路由变化，在特定的路由名时切换 className
watchEffect(() => {
  if ($route.name === "UserInfoWork") {
    cardClassName.value = "card card-userinfo-work"; // 切换为特殊样式的 className
    isTag.value = true;
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
});

// 获取第一个URL
const firstUrl = (workUrls) => {
  if (workUrls) {
    const urls = workUrls.split(",");
    return urls.length > 0 ? urls[0] : "";
  } else {
    return "";
  }
};

// 点赞处理
const likeThis = (id) => {
  likeFlag.value = true;
};

// 取消点赞处理
const unLike = (id) => {
  likeFlag.value = false;
};

const isLike = async (wid, uid) => {
  let workId = wid;
  let userId = uid;
  try {
    // 表单上传操作
    const res = await reqIsLikeByUserIdAndWorkId(workId, userId);
    console.log("IsLikeres", res);
    if (res.code === "200") {
      // 页面刷新获取新的点赞数据
      console.log("更新点赞数据的操作", res.data);
      return res.data;
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

// 跳转详情页
const goWorkDetail = (id) => {
  $router.push({ path: "/workDetail", query: { workId: id, type: "image" } });
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
  width: 100%;
}

.imageArea .card-userinfo-work {
  justify-content: flex-start;
  gap: 19.3px; /* 设置卡片之间的间距 */
}

.imageArea .card-search-work {
  justify-content: flex-start;
  gap: 26.2px; /* 设置卡片之间的间距 */
}

.imageArea .card::v-deep(.el-card):hover {
  box-shadow: 0 0 15px 10px rgba(67, 67, 67, 0.08);
  /* box-shadow: 0 0 20px 10px #f9f9f9; */
  cursor: pointer;
}

.imageArea .imgwork {
  width: 235px;
  height: 236px;
}

.imageArea .info .user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}

.imageArea .imgwork .image {
  height: 236px;
}

.imageArea .info .user .user-info {
  display: flex;
  align-items: center;
}

.imageArea .info .user .user-info .userImg {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.imageArea .info .user .user-info .userImg img {
  width: 30px;
  height: 30px;
}

/* .imageArea .info .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #555;
  font-size: 14px;
}

.imageArea .info .bottom .like,
.imageArea .info .bottom .comment {
  display: flex;
  align-items: center;
} */
</style>
