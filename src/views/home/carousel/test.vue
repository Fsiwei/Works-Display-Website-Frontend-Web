<template>
  <div id="carousel">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in workStore.bannerList.data" :key="item.id">
        <img :src="item.imgUrl" alt="Image" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

// 引入作品详情仓库的数据
import useWorkStroe from "@/store/modules/test";
// 获取数据
let workStore = useWorkStroe();
onMounted(() => {
  // console.log(workStore, "banner-workStore");
});

// let imgList = ref([]);
// onMounted(() => {
//   // reqGetBannerList();
// });

// const imgList = ref([
//   "../../../assets/images/1.png",
//   "../../../assets/images/2.png",
//   "../../../assets/images/3.png",
//   "../../../assets/images/4.png",
//   "../../../assets/images/5.png",
//   "../../../assets/images/6.png",
// ]);
// const reqGetBannerList = async () => {
//   try {
//     let result = await axios.get("/mock/banner");
//     // imgList = result.data.data;
//     imgList = result.data;
//     // 在这里使用返回的data
//     console.log(imgList, "imgList");
//   } catch (error) {
//     // 处理错误
//     console.error(error);
//   }
// };
// const reqGetBannerList = async () => {
//   try {
//     imgList = await axios.get("/mock/banner").data.data;
//     // 在这里使用返回的data
//     console.log(imgList,"imgList");
//   } catch (error) {
//     // 处理错误
//     console.error(error);
//   }
// };
// const getImageUrl = async (item) => {
//   return new URL(item, import.meta.url).href;
// };
</script>

<style scoped>
#carousel {
  width: 100%;
}
#carousel::v-deep(.el-carousel) {
  width: 100%;
}
#carousel::v-deep(.el-carousel__container) {
  height: 600px;
}
#carousel img {
  width: 1800px;
}
</style>
