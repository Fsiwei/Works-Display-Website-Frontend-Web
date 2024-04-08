<template>
  <div class="comment">
    <el-scrollbar class="comment-box" max-height="500px">
      <el-card
        v-for="item in commentData"
        :key="item.commentId"
        shadow="always"
      >
        <p>{{ item.username }}</p>
        <div class="tip">
          <span
            >评论了你的《{{ item.workName }}》作品
            <span style="color: #999">{{
              dayjs(item.commentDate).format("YYYY-MM-DD HH:mm:ss")
            }}</span></span
          >
        </div>
        <span>{{ item.content }}</span>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import { ElMessage } from "element-plus";
import dayjs from "dayjs";
import { reqGetCommentByAuthorId } from "@/api/comment";
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
const userStore = useUserStore();
const commentData = reactive({});
// 组件挂载完毕
onMounted(() => {
  getComment();
});

// 获取作品评论信息
const getComment = async () => {
  let authorId = userStore.userInfo.id;
  try {
    if (authorId) {
      const res = await reqGetCommentByAuthorId(authorId);
      console.log("authorIdCommentres", res);
      if (res.code === "200") {
        Object.assign(commentData, res.data);
        console.log("commentData", commentData);
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
.comment {
  width: 100%;
  height: 500px;
  overflow: auto;
}
.comment::v-deep(.el-card) {
  margin-bottom: 10px;
}
.comment::v-deep(.el-card):last-child {
  margin-bottom: 0;
}
.comment .tip {
  margin: 10px 0;
}
.comment .tip span {
  font-size: 13px;
}
</style>
