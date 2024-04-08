<template>
  <div class="works">
    <!-- 搜索框 -->
    <!-- <Search /> -->
    <!-- 搜索结果展示区域 -->
    <div class="conent">
      <WorkDisplay :keyword="keyword"></WorkDisplay>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
// 引入搜索作品组件
import Search from "/src/components/search/index.vue";
import WorkDisplay from "/src/components/workDisplayPagination/index.vue";
import { useRouter, useRoute } from "vue-router";
let $router = useRouter();
let $route = useRoute();
let keyword = ref("");
onMounted(() => {
  keyword.value = $route.query.keyword;
  console.log("keyword.value", keyword.value);
});
// const getKeyword = (kw) => {
//   keyword.value = kw;
//   console.log("keyword", keyword.value);
// };
// 1. 通过emit获取Search组件的keyword
// 2. 再将keyword通过props传给WorkDisplay
// 3. 在WorkDisplay组件中发起请求获取数据传给ImageWork和VideoWork组件
</script>

<style scoped>
/* .works {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
} */
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}

.works {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0 20px;
  background: #fff;
  background-image: url(../../assets/images/grid.svg);
  background-repeat: repeat;
  background-size: 300px 300px;
}

.works .conent {
  margin: 0 auto;
  width: 1320px;
  margin-top: 20px;
  /* border-radius: 10px; */
  /* overflow: hidden; */
  /* background-color: #edededd2; */
  /* box-shadow: 0 0 15px 10px rgba(47, 47, 47, 0.08); */
}
</style>
