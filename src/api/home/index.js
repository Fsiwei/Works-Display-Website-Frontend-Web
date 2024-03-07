// 封装首页的所有请求，统一管理首页模块接口
// 引入二次封装的 axios
import request from "@/utils/request";

/* 
// 通过枚举管理首页模块的接口地址
enum API {
    // 获取图片作品数据的接口地址
    IMAGEWORK_URL = '/work/imageWork/findByImageId',
    // 获取视频作品数据的接口地址
    VIDEOWORK_URL = '/work/videoWork/findByVideoId',
}

// 获取图片作品数据
export const reqImageWorkDetial = (imageWorkId) => request.get(API.IMAGEWORK_URL + `${imageWorkId}/`)
// 获取视频作品数据
export const reqVideoWorkDetial = (videoWorkId) => request.get(API.VIDEOWORK_URL + `${videoWorkId}/`)
 */

export const reqImageWorkDetial = (imageWorkId) =>{
    request.get(`/work/imageWork/findByImageId/${imageWorkId}/`)
}

export const reqVideoWorkDetial = (videoWorkId) =>{
    request.get(`/work/videoWork/findByVideoId/${videoWorkId}/`)
}