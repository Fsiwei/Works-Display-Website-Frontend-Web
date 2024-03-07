<template>
  <div class="comment">
    <el-card v-for="(item, index) in 10" :key="index" shadow="always">
      <p>用户名</p>
      <div class="tip">
        <span>评论了你的作品 <span style="color: #999">YYYY-MM-DD</span></span>
      </div>
      <span>评论的内容xxxxxxxxxx</span>
    </el-card>
  </div>
</template>

<script setup>
import {} from "vue";
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
