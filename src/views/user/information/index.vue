<template>
  <div class="information">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>个人信息</span>
        </div>
      </template>
      <!-- 展示个人信息的结构 -->
      <div class="userInfo" v-if="scene === 0">
        <el-descriptions
          class="margin-top"
          title="作者名称xxxxxxxxx"
          :column="1"
          :size="size"
          :style="blockMargin"
          border
        >
          <template #extra>
            <el-button type="primary" color="#333" @click="changeScene"
              >修改信息</el-button
            >
          </template>
          <el-descriptions-item label="用户名：">张三</el-descriptions-item>
          <el-descriptions-item label="性别：">男</el-descriptions-item>
          <el-descriptions-item label="年龄：">20</el-descriptions-item>
          <el-descriptions-item label="标签：">
            <el-tag size="small" class="tag" type="success">二维平面</el-tag>
            <el-tag size="small" class="tag" type="info">二维动画</el-tag>
            <el-tag size="small" class="tag" type="warning">三维动画</el-tag>
            <el-tag size="small" class="tag" type="danger">游戏设计</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="简介："
            >一起来分享吧！</el-descriptions-item
          >
        </el-descriptions>
      </div>
      <!-- 修改个人信息的结构 -->
      <el-form v-else label-width="120px" class="demo-ruleForm" status-icon>
        <el-form-item label="用户名">
          <el-input style="width: 220px" />
        </el-form-item>
        <el-form-item label="性别" prop="resource">
          <el-radio-group>
            <el-radio label="男" />
            <el-radio label="女" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-select placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="标签" prop="type">
          <el-checkbox-group>
            <el-checkbox label="二维平面" name="type" />
            <el-checkbox label="二维动画" name="type" />
            <el-checkbox label="三维动画" name="type" />
            <el-checkbox label="游戏设计" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="你的想法" prop="desc">
          <el-input type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" color="#333" @click="submit"
            >提交</el-button
          >
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import axios from "axios";
// import {reqGetUser, reqUpdateUser} from '@/api/user';
// import {ElMessage} from "element-plus";
let scene = ref(0);
let user = ref([]);

// 组件一挂载就发送请求获取用户信息
onMounted(() => {
  axios.get("http://localhost:5000/user/selectAllUser").then((res) => {
    console.log(res.data);
    user.value = res.data.data;
    console.log(user.value);
  });
});

/* let userParams = reactive({
  userName: "",
  sexy: 0,
  age: 18,
  tag: [],
  think: "",
});
// 组件一挂载就发送请求获取用户信息
onMounted(() => {
  getUserInfo();
});
// 定义获取用户信息的回调
const getUserInfo = async () => {
  let result = await reqGetUser();
  if (result.code == 200) {
    // 存储用户信息
  }
};
const changeScene = (userInfo) => {
  // 切换场景
  scene.value = 1;
  // 收集用户信息用于另外一个场景
  // userInfo为数据库中的数据
  Object.assign(userParam, userInfo);
};
// 提交按钮的方法回调
const submit = async () => {
  // 更新信息
  try {
    // 信息更新成功
    await reqUpdateUser(userParams);
    // 提示信息
    ElMessage({
      type: success,
      message: "更新成功",
    });
    // 切换场景
    scene.value = 0;
  } catch (error) {
    ElMessage({
      type: "error",
      message: "更新失败",
    });
  }
};
// 重置按钮的方法回调
const reset = () => {
  // 将用户信息置空
  Object.assign(userParams, {
    userName: "",
      sexy: 0,
      age: 18,
      tag: [],
      think: "",
  });
}; */
</script>

<style scoped>
.information .userInfo {
  padding: 0 20px;
}
.information .userInfo .tag {
  margin-right: 10px;
}

.information .userInfo .tag:last-child {
  margin-right: 0;
}
</style>
