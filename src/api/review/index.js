// 引入二次封装的 axios
import request from "@/utils/request";

// 提交审核信息
export const reqReviewWork = (data) => {
  const res = request.post("/like/submitReviewWork", data);
  return res;
};

// 通过作者ID和作品ID，获取审核信息
export const reqIsLikeByUserIdAndWorkId = (workId, authorId) => {
    const params = {
      wid: workId,
      aid: authorId,
    };
    const res = request.get("/like/isLikeByUserIdAndWorkId", { params });
    return res;
  };