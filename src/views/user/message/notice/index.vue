<template>
  <div class="notice">
    <el-card v-for="(item, index) in 10" :key="index" shadow="always">
      <p>通知内容xxxxxxxxxxxxxxxx</p>
      <div class="tip">
        <span style="color: #999">YYYY-MM-DD</span>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {} from "vue";
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
