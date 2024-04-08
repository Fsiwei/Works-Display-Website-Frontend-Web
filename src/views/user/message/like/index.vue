<template>
  <div class="like">
    <el-card v-for="item in likeData" :key="item.likeId" shadow="always">
      <p>{{ item.username }}</p>
      <div class="tip">
        <span
          >点赞了你的《{{ item.workName }}》作品
          <span style="color: #999">{{
            dayjs(item.likeDate).format("YYYY-MM-DD HH:mm:ss")
          }}</span></span
        >
      </div>
      <!-- <span></span> -->
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import { ElMessage } from "element-plus";
import dayjs from "dayjs";
import { reqGetLikeByAuthorId } from "@/api/like";
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
const userStore = useUserStore();
const likeData = reactive({});
// 组件挂载完毕
onMounted(() => {
  getLike();
});

// 获取作品评论信息
const getLike = async () => {
  let authorId = userStore.userInfo.id;
  try {
    if (authorId) {
      const res = await reqGetLikeByAuthorId(authorId);
      console.log("authorIdLikeres", res);
      if (res.code === "200") {
        Object.assign(likeData, res.data);
        console.log("likeData", likeData);
      }
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
.like {
  width: 100%;
  height: 500px;
  overflow: auto;
}
.like::v-deep(.el-card) {
  margin-bottom: 10px;
}
.like::v-deep(.el-card):last-child {
  margin-bottom: 0;
}
.like .tip {
  margin: 10px 0;
}
.like .tip span {
  font-size: 13px;
}
</style>
