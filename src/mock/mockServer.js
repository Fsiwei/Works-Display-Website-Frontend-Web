import Mock from "mockjs";
//把JSON数据格式引入进来[JSON数据格式根本没有对外暴露，但是可以引入]
//webpack默认对外暴露的：图片、JSON数据格式
import banner from "./banner.json";
import imageWorks from "./imageWorks.json";
import videoWorks from "./videoWorks.json";
import user from "./user.json";

//mock数据:第一个参数请求地址   第二个参数：请求数据
Mock.mock("/mock/banner", { code: 200, data: banner }); //模拟首页大的轮播图的数据
Mock.mock("/mock/imageWorks", { code: 200, data: imageWorks }); //模拟首页图片作品的数据
// Mock.mock("/mock/imageWorks/{id}", { code: 200, data: imageWorks }); //模拟首页图片作品的数据
Mock.mock("/mock/videoWorks", { code: 200, data: videoWorks }); //模拟首页视频作品的数据
Mock.mock("/mock/user", { code: 200, data: user }); // 模拟用户信息的数据