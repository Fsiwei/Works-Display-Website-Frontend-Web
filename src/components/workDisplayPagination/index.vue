<template>
  <div class="search" v-if="flag">
    <el-input
      ref="inputElement"
      style="width: 600px"
      @keydown.enter="search"
      :trigger-on-focus="false"
      placeholder="请输入搜索内容"
      class="form"
      v-model="keyword"
    />
    <el-button type="primary" color="#333" size="default" @click="search">
      <svg
        t="1697730068855"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6947"
        width="24"
        height="24"
      >
        <path
          d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z"
          fill="#ffffff"
          p-id="6948"
        ></path>
      </svg>
    </el-button>
  </div>
  <div class="container">
    <el-tabs type="border-card" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>图片类作品</span>
          </span>
        </template>
        <ImageArea v-if="loading" :worksData="imageWork" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span>视频类作品</span>
          </span>
        </template>
        <VideoArea v-if="loading" :worksData="videoWork" />
      </el-tab-pane>
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next,"
        :total="1000"
      />
    </el-tabs>
    <!-- <el-pagination
      class="pagination"
      background
      layout="prev, pager, next,"
      :total="1000"
    /> -->
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect } from "vue";
import { ElMessage } from "element-plus";
import useUserStore from "@/store/modules/user";
// 引入图片作品组件
import ImageArea from "/src/components/imageArea/index.vue";
// 引入视频作品组件
import VideoArea from "/src/components/videoArea/index.vue";
import eventBus from "@/utils/eventBus";
import {
  reqGetWorkByUserIdAndFileType,
  reqGetWorkByFileType,
  reqGetWorkByKeywordImage,
  reqGetWorkByKeywordVideo,
} from "@/api/work";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
const userStore = useUserStore();
const userId = userStore.userInfo.id;
const props = defineProps(["keyword"]);
let imageWork = reactive({});
let videoWork = reactive({});
let keyword = ref("");
let kw = ref("");
let loading = ref(true);
let flag = ref(false);

// eventBus.on("kw", (data) => {
//   // 处理接收到的数据
//   console.log("dataa", data);
//   kw.value = data;
// });
// console.log("kw", kw.value);
// console.log("222222222props.keyword:", props.keyword);

const getImageWork = async (userId, keyword) => {
  loading.value = false;
  // console.log("111111111props.keyword:", props.keyword);
  const fileType = "image";
  let res = {};
  try {
    if (userId) {
      res = await reqGetWorkByUserIdAndFileType(userId, fileType);
      console.log("res1", res);
      if (res.code === "200") {
        // Object.assign(imageWork, res.data);
        imageWork = reactive(res.data);
        loading.value = true;
      } else {
        ElMessage({
          type: "error",
          message: res.message,
        });
      }
    } else if (keyword || props.keyword) {
      // imageWork = {};
      console.log("keyword:", keyword);
      res = await reqGetWorkByKeywordImage(
        keyword ? keyword : props.keyword,
        fileType
      );
      console.log("res2", res);
      if (res.code === "200") {
        // Object.assign(imageWork, res.data);
        imageWork = reactive(res.data);
        console.log("imageWork", imageWork);
        loading.value = true;
      } else {
        ElMessage({
          type: "error",
          message: res.message,
        });
      }
    } else {
      res = await reqGetWorkByFileType(fileType);
      console.log("res3", res);
      if (res.code === "200") {
        // Object.assign(imageWork, res.data);
        imageWork = reactive(res.data);
        loading.value = true;
      } else {
        ElMessage({
          type: "error",
          message: res.message,
        });
      }
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

const getVideoWork = async (userId, keyword) => {
  loading.value = false;
  const fileType = "video";
  let res = {};
  try {
    if (userId) {
      res = await reqGetWorkByUserIdAndFileType(userId, fileType);
      if (res.code === "200") {
        videoWork = reactive(res.data);
        loading.value = true;
      } else {
        ElMessage({
          type: "error",
          message: res.message,
        });
      }
    } else if (keyword || props.keyword) {
      res = await reqGetWorkByKeywordVideo(
        keyword ? keyword : props.keyword,
        fileType
      );
      if (res.code === "200") {
        videoWork = reactive(res.data);
        loading.value = true;
      } else {
        ElMessage({
          type: "error",
          message: res.message,
        });
      }
    } else {
      res = await reqGetWorkByFileType(fileType);
      if (res.code === "200") {
        videoWork = reactive(res.data);
        loading.value = true;
      } else {
        ElMessage({
          type: "error",
          message: res.message,
        });
      }
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

const search = () => {
  getImageWork(null, keyword.value);
  getVideoWork(null, keyword.value);
};

// 监听路由变化，在特定的路由名时切换 className
watchEffect(() => {
  if ($route.name === "UserInfoWork") {
    console.log("$route.name", $route.name);
    flag.value = true;
  } else if ($route.name === "Search") {
    flag.value = false;
  }
  // if (flag.value) {
  //   console.log("flag", flag.value);
  //   getImageWork(userId, null);
  //   getVideoWork(userId, null);
  //   flag.value = false;
  // } else {
  //   console.log("flag", flag.value);
  //   getImageWork(null, props.keyword);
  //   getVideoWork(null, props.keyword);
  // }
});
onMounted(() => {
  // console.log("keyword", props.keyword);
  eventBus.on("kw", (data) => {
    console.log("dataa", data);
    // 处理接收到的数据
    kw.value = data;
  });
  console.log("kwww", kw.value);
  if (flag.value) {
    console.log("flag", flag.value);
    getImageWork(userId, null);
    getVideoWork(userId, null);
    flag.value = false;
  }
  search();
  //  else {
  //   console.log("flag", flag.value);
  //   // getImageWork(null, props.keyword);
  //   // getVideoWork(null, props.keyword);
  //   getImageWork();
  //   getVideoWork();
  // }
});
</script>

<style scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.search::v-deep(.el-input__wrapper) {
  height: 50px;
  margin-right: 10px;
  border-radius: 50px;
}

.search::v-deep(.el-button) {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}

.container {
  display: grid;
  width: 100%;
  min-height: 700px;
  border-radius: 10px;
  overflow: hidden;
  /* background-color: #8bcaf9; */
  /* background-color: #ecf0f3; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}

.container .demo-tabs .pagination {
  justify-self: end;
  margin: 20px 0;
}
</style>
