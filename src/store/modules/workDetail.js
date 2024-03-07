import { defineStore } from "pinia ";
import {
  reqImageWorkInfo,
  reqImageWorkDetial,
  reqVideoWorkInfo,
  reqVideoWorkDetial,
} from "@api/works";
// 定义 work 仓库
const useWorkStroe = defineStore("Work", {
  state: () => {
    return {
      // 作品详情的数据
      imageWorkInfo: {},
      videoWorkInfo: {},
    };
  },
  actions: {
    // 获取图片作品的方法
    // 获取图片作品详情的方法
    async getImageWorkDetial(workcode) {
      let result = await reqImageWorkDetial(workcode);
      if (result.code == 200) {
        this.imageWorkInfo = result.data;
      }
    },
    // 获取视频作品的方法
    // 获取视频作品详情的方法
    async getVideoWorkDetial(workcode) {
      let result = await reqVideoWorkDetial(workcode);
      if (result.code == 200) {
        this.videoWorkInfo = result.data;
      }
    },
  },
  getters: {},
});

export default useWorkStroe;
