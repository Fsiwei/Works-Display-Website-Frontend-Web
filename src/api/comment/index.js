// 引入二次封装的 axios
import request from "@/utils/request";

// 发表评论接口
export const reqReleaseComment = (data) => {
  const res = request.post("/comment/releaseComment", data);
  return res;
};

// 通过作品ID获取评论的接口
export const reqGetCommentByWorkId = (workId) => {
  const params = {
    id: workId,
  };
  const res = request.get("/comment/getCommentByWorkId", { params });
  return res;
};

// 通过作者ID获取其作品的评论的接口
export const reqGetCommentByAuthorId = (authorId) => {
  const params = {
    id: authorId,
  };
  const res = request.get("/comment/getCommentByAuthorId", { params });
  return res;
};

// 通过用户ID获取对作品的评论的接口
export const reqGetCommentByUserId = (userId) => {
  const params = {
    id: userId,
  };
  const res = request.get("/comment/getCommentByUserId", { params });
  return res;
};
