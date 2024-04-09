<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="作品名称" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.workName }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="作者" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="作品描述" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.workDescribe }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="标签" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.workType }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="文件类型" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.fileType }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="提交时间" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{
            dayjs(scope.row.uploadDate).format("YYYY-MM-DD HH:mm:ss")
          }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="状态" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-tag>{{ scope.row.status }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleReview(scope.$index, scope.row)"
          >审核</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleReject(scope.$index, scope.row)"
          >驳回</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    class="pagination"
    background
    layout="prev, pager, next,"
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    @prev-click="prev"
    @next-click="next"
  />
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import dayjs from "dayjs";
import { useRouter, useRoute } from "vue-router";
import { reqGetAllWorkPage } from "@/api/work";
const tableData = reactive([]);
let currentPage = ref(1);
let pageSize = ref(20);
let total = ref(0);
onMounted(() => {
  // 组件一挂载就调用获取作品的方法
  getAllWorkPage(currentPage.value);
});

const getAllWorkPage = async (pageNum) => {
  try {
    const res = await reqGetAllWorkPage(pageNum, pageSize.value);
    console.log("res", res);
    if (res.code === "200") {
      console.log("res.data", res.data);
      Object.assign(tableData, res.data.list);
      console.log("tableData", tableData);
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

const filterTag = (value, row) => {
  return row.tag === value;
};

const handleReview = (index, row) => {
  console.log(index, row);
};
const handleReject = (index, row) => {
  console.log(index, row);
};

const prev = () => {
  if (currentPage.value >= 1) {
    currentPage.value = currentPage.value - 1;
    getAllUserPage(currentPage.value);
  }
};

const next = () => {
  let max = Math.ceil(total.value / pageSize.value);
  if (currentPage.value <= max) {
    currentPage.value = currentPage.value + 1;
    getAllUserPage(currentPage.value);
  }
};
</script>

<!-- <script setup>
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

const getImageWork = async (userId, keyword) => {
  loading.value = false;
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
    } else if (keyword) {
      res = await reqGetWorkByKeywordImage(
        keyword,
        fileType
      );
      console.log("res2", res);
      if (res.code === "200") {
        imageWork = reactive(res.data);
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
  $router.push({ path: "/search", query: { keyword: keyword.value } });
};

// 监听路由变化，在特定的路由名时切换 className
watchEffect(() => {
  if ($route.name === "UserInfoWork") {
    console.log("$route.name", $route.name);
    flag.value = true;
  } else ($route.name === "Search") {
    flag.value = false;
  }
});
onMounted(() => {
  if (flag.value) {
    console.log("flag", flag.value);
    getImageWork(userId, null);
    getVideoWork(userId, null);
    flag.value = false;
  }
  keyword.value = $route.query.keyword;
  getImageWork(null, $route.query.keyword);
  getVideoWork(null, $route.query.keyword);
});
</script> -->
