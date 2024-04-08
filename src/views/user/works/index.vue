<template>
  <div class="user-works">
    <div class="conent">
      <WorkDisplay></WorkDisplay>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import useUserStore from "@/store/modules/user";
import WorkDisplay from "/src/components/workDisplayPagination/index.vue";
import { ElMessage } from "element-plus";
const userStore = useUserStore();
const userId = userStore.userInfo.id;
onMounted(() => {});
</script>

<style scoped>
@font-face {
  font-family: SIMYOU;
  font-weight: 700;
  src: url(../../assets/fonts/SIMYOU.TTF) format("truetype");
  text-rendering: optimizeLegibility;
}

.user-works {
  background: #fff;
  background-image: url(../../assets/images/grid.svg);
  background-repeat: repeat;
  background-size: 300px 300px;
}

.user-works .conent {
  margin: 0 auto;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #edededd2;
  /* box-shadow: 0 0 15px 10px rgba(47, 47, 47, 0.08); */
}
</style>
