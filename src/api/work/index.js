// 引入二次封装的 axios
import request from "@/utils/request";

// 文件上传接口
export const reqAddWork = (data) => {
  const res = request.post("/work/addWork", data);
  return res;
};

// 通过文件类型获取作品的接口
export const reqGetWorkByFileType = (fileType) => {
  const params = {
    fileType: fileType,
  };
  const res = request.get("/work/getWorkByFileType", { params });

  // const res = request.get(`/work/getWorkByUseridAndFiletype?id=${userId}&fileType=${fileType}`);
  return res;
};

// 通过用户ID和文件类型获取作品的接口
export const reqGetWorkByUserIdAndFileType = (userId, fileType) => {
  const params = {
    id: userId,
    fileType: fileType,
  };
  const res = request.get("/work/getWorkByUserIdAndFileType", { params });

  // const res = request.get(`/work/getWorkByUseridAndFiletype?id=${userId}&fileType=${fileType}`);
  return res;
};

// 通过用户输入的关键词和文件类型获取作品的接口
export const reqGetWorkByKeywordImage = (keyword, fileType) => {
  const params = {
    keyword: keyword,
    fileType: fileType,
  };
  const res = request.get("/work/getWorkByKeywordImage", { params });
  return res;
};

// 通过用户输入的关键词和文件类型获取作品的接口
export const reqGetWorkByKeywordVideo = (keyword, fileType) => {
  const params = {
    keyword: keyword,
    fileType: fileType,
  };
  const res = request.get("/work/getWorkByKeywordVideo", { params });
  return res;
};

// 通过作品ID获取作品的接口
export const reqGetWorkByWorkId = (workId) => {
  const params = {
    id: workId,
  };
  const res = request.get("/work/getWorkByWorkId", { params });
  return res;
};
