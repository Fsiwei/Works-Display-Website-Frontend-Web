import { defineStore } from "pinia";
import axios from "axios";
// 定义 work 仓库
const useWorkStroe = defineStore("Work", {
  state: () => {
    return {
      // 作品详情的数据
      bannerList: {},
      imageWorkInfo: {},
      imageWorkDetial: [],
      videoWorkInfo: {},
      videoWorkDetial: {},
    };
  },
  actions: {
    // 获取轮播图作品详情的方法
    async getBannerList() {
      let result = await axios.get("/mock/banner");
      // console.log(result, "banner-result");
      if (result.data.code == "200") {
        this.bannerList = result.data;
        // console.log(this.bannerList, "this.bannerList");
      } else {
        console.log(this.bannerList, "this.bannerList为空");
      }
    },
    // 获取图片作品的方法
    async getImageWorkInfo() {
      let result = await axios.get("/mock/imageWorks");
      // console.log(result, "result");
      if (result.data.code == "200") {
        this.imageWorkInfo = result.data;
        // console.log(this.imageWorkInfo, "this.imageWorkInfo");
      } else {
        console.log(this.imageWorkInfo, "this.imageWorkInfo为空");
      }
    },
    // 获取图片作品详情的方法
    async getImageWorkDetial(imageId) {
      // console.log(imageId, "Detial-imageId");
      let result = await axios.get(`/mock/imageWorks`);
      // console.log(result, "Detial-result");
      if (result.data.code == "200") {
        let images = result.data.data;
        // console.log(images, "images");
        images.forEach((item) => {
          // console.log(item.id, "Detial-result, item.id");
          if (item.id == imageId) {
            this.imageWorkDetial = item;
            console.log("imageWorkDetial");
            console.log(this.imageWorkDetial, "this.imageWorkDetial");
          } else {
            // console.log("item.id != imageId");
          }
        });
      } else {
        console.log(this.imageWorkDetial, "this.imageWorkDetial为空");
      }
    },
    // 获取视频作品的方法
    async getVideoWorkInfo() {
      let result = await axios.get("/mock/videoWorks");
      // console.log(result, "result");
      if (result.data.code == "200") {
        this.videoWorkInfo = result.data;
        // console.log(this.videoWorkInfo, "this.videoWorkInfo");
      } else {
        console.log(this.videoWorkInfo, "this.videoWorkInfo为空");
      }
    },
    // 获取视频作品详情的方法
    async getVideoWorkDetial(videoId) {
      let result = await axios.get("/mock/videoWorks");
      // console.log(result, "result");
      if (result.data.code == "200") {
        this.videoWorkInfo = result.data;
        // console.log(this.videoWorkInfo, "this.videoWorkInfo");
      } else {
        console.log(this.videoWorkInfo, "this.videoWorkInfo为空");
      }
    },
  },
  getters: {},
});

export default useWorkStroe;
