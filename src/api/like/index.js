// 引入二次封装的 axios
import request from "@/utils/request";

// 发表点赞接口
export const reqReleaseLike = (data) => {
  const res = request.post("/like/releaseLike", data);
  return res;
};

// 通过作品ID获取点赞数的接口
export const reqGetLiketByWorkId = (workId) => {
  const params = {
    id: workId,
  };
  const res = request.get("/like/getLiketByWorkId", { params });
  return res;
};

// 通过用户ID和作品ID，判断该用户是否点赞
export const reqIsLikeByUserIdAndWorkId = (workId, userId) => {
  const params = {
    wid: workId,
    uid: userId,
  };
  const res = request.get("/like/isLikeByUserIdAndWorkId", { params });
  return res;
};

// 通过用户ID和作品ID处理取消点赞
export const reqCancelLikeByUserIdAndWorkId = (workId, userId) => {
  const params = {
    wid: workId,
    uid: userId,
  };
  const res = request.get("/like/cancelLikeByUserIdAndWorkId", { params });
  return res;
};

// 通过作者ID获取其作品的点赞的接口
export const reqGetLikeByAuthorId = (authorId) => {
  const params = {
    id: authorId,
  };
  const res = request.get("/like/getLikeByAuthorId", { params });
  return res;
};

// 通过用户ID获取对作品的点赞的接口
export const reqGetLikeByUserId = (userId) => {
  const params = {
    id: userId,
  };
  const res = request.get("/like/getLikeByUserId", { params });
  return res;
};
