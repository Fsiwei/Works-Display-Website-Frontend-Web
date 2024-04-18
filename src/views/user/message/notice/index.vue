<template>
  <div class="notice">
    <el-card v-for="item in messageData" :key="item.id" shadow="always">
      <p>{{ item.connent }}</p>
      <div class="tip">
        <span style="color: #999">{{
          dayjs(item.date).format("YYYY-MM-DD HH:mm:ss")
        }}</span>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, watch } from "vue";
import { ElMessage } from "element-plus";
import dayjs from "dayjs";
import { reqGetMessageByAuthorId } from "@/api/message";
import useUserStore from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
const userStore = useUserStore();
const messageData = reactive({});
// 组件挂载完毕
onMounted(() => {
  getMessage();
});

// 获取消息通知
const getMessage = async () => {
  let authorId = userStore.userInfo.id;
  try {
    if (authorId) {
      const res = await reqGetMessageByAuthorId(authorId);
      console.log("authorIdMessage", res);
      if (res.code === "200") {
        Object.assign(messageData, res.data);
        console.log("messageData", messageData);
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
.notice {
  width: 100%;
  height: 500px;
  overflow: auto;
}
.notice::v-deep(.el-card) {
  margin-bottom: 10px;
}
.notice::v-deep(.el-card):last-child {
  margin-bottom: 0;
}
.notice .tip {
  margin: 10px 0;
}
.notice .tip span {
  font-size: 13px;
}
</style>
