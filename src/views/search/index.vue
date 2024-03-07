<template>
  <div class="works">
    <!-- 搜索框 -->
    <Search />
    <!-- 搜索结果展示区域 -->
    <div class="container">
        
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
// 引入搜索作品组件
import Search from "../../components/search/index.vue";
</script>

<style scoped>
.works {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
}

</style>
