<template>
  <div class="like">
    <el-card v-for="(item, index) in 10" :key="index" shadow="always">
      <p>用户名</p>
      <div class="tip">
        <span>点赞了你的作品 <span style="color: #999">YYYY-MM-DD</span></span>
      </div>
      <!-- <span></span> -->
    </el-card>
  </div>
</template>

<script setup>
import {} from "vue";
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
