<template>
  <div class="search">
    <el-input
      ref="inputElement"
      style="width: 600px"
      @keydown.enter="search"
      :trigger-on-focus="false"
      placeholder="请输入搜索内容"
      class="form"
      v-model="keyword"
    />
    <el-button type="primary" color="#333" size="default" @click="search">
      <svg
        t="1697730068855"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="6947"
        width="24"
        height="24"
      >
        <path
          d="M953.474215 908.234504l-152.576516-163.241391c61.92508-74.48211 95.81186-167.36973 95.81186-265.073744 0-229.294809-186.63531-415.930119-416.102133-415.930119-229.294809 0-415.930119 186.63531-415.930119 415.930119s186.63531 415.930119 415.930119 415.930119c60.032925 0 118.00168-12.55703 172.186125-37.327062 16.169326-7.396607 23.221905-26.318159 15.825298-42.315471-7.396607-16.169326-26.318159-23.221905-42.315471-15.825298-45.927768 20.813707-94.951789 31.478582-145.695952 31.478582-194.031917 0-351.94087-157.908953-351.94087-351.94087 0-194.031917 157.908953-351.94087 351.94087-351.94087 194.031917 0 351.94087 157.908953 351.94087 351.94087 0 91.339493-34.918864 177.86259-98.048043 243.743995-12.213002 12.729044-11.868974 33.026709 0.860071 45.239711 1.032085 0.860071 2.236183 1.204099 3.268268 2.064169 0.860071 1.204099 1.376113 2.752226 2.408198 3.956325l165.477574 177.00252c6.192508 6.70855 14.793214 10.148833 23.393919 10.148833 7.912649 0 15.653284-2.92424 21.845792-8.600706C964.827146 941.433227 965.515202 921.135562 953.474215 908.234504z"
          fill="#ffffff"
          p-id="6948"
        ></path>
      </svg>
    </el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// 引入请求方法
// import { reqWorksInfo } from "@/api/home";
// 引入路由器
import { useRoute, useRouter } from "vue-router";
import eventBus from "@/utils/eventBus";
// 创建路由器对象
let $route = useRoute();
let $router = useRouter();
let $emit = defineEmits(["getKeyword"]);
// 收集搜索的关键字（）
let keyword = ref("");
const search = () => {
  eventBus.emit("kw", keyword.value);
  // console.log("kwww", keyword.value);
  $router.push({ path: "/search" });
  // $router.push({ path: "/search", query: { keyword: keyword.value } });
};
// const fetchData = async (keyword, cb) => {
//   // 当用户输入完关键词后函数会执行一次，然后发起请求获取需要展示的数据
//   let result = await reqWorksByKeyword(keyword);
//   if (result.code == 200) {
//     // 整理数据，使获得的数据格式符合第三方库提供的组件所需的数据格式
//     let showData = result.data.map((item) => {
//       // 第三方库组件展示的数据是一个对象
//       return {
//         value: item.workname, // 展示作品名称
//         wordcode: item.wordcode, // 存储作品编码为后续点击跳转路由做准备
//       };
//     });
//     // 通过 cb 回调函数，给组件提供展示的数据
//     cb(showData);
//   }
// };
// // 点击某个推荐项，然后跳转路由
// const goDetail = (item) => {
//   // 路由跳转，跳转到作品详情页，并携带 query 参数
//   $router.push({ path: "/works/detail", query: { workcode: item.workcode } });
// };
// export default {
//   methods: {
//     blurInput() {
//       this.$refs.inputElement.blur();
//       console.log("123456");
//     },
//   },
// };
</script>

<!-- <script>
export default {
  name: "Search",
};
</script> -->

<style scoped>
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

.search::v-deep(.el-input__wrapper) {
  height: 50px;
  margin-right: 10px;
  border-radius: 50px;
}

.search::v-deep(.el-button) {
  width: 50px;
  height: 50px;
  border-radius: 50px;
}
</style>
