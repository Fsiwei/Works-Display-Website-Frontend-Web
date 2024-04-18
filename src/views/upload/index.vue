<template>
  <div class="upload">
    <div class="content">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>上传作品</span>
            <div class="button">
              <el-popconfirm title="确定提交？" @confirm="submit">
                <template #reference>
                  <el-button type="primary" color="#333">提交</el-button>
                </template>
              </el-popconfirm>
              <el-button type="info" @click="resetForm">重置</el-button>
            </div>
          </div>
        </template>
        <el-form
          ref="formRef"
          :rules="formRules"
          :model="workParams"
          label-width="120px"
          class="demo-ruleForm"
          status-icon
        >
          <el-form-item label="作品名称" prop="workName">
            <el-input style="width: 220px" v-model="workParams.workName" />
          </el-form-item>
          <el-form-item label="作品描述" prop="workDescribe">
            <el-input type="textarea" v-model="workParams.workDescribe" />
          </el-form-item>
          <el-form-item label="作品标签" prop="typeArray">
            <el-checkbox-group v-model="workParams.typeArray">
              <el-checkbox label="二维平面" value="二维平面" name="typeArray" />
              <el-checkbox label="二维动画" value="二维动画" name="typeArray" />
              <el-checkbox
                label="三维动画"
                value="三维动画"
                namel="typeArray"
              />
              <el-checkbox
                label="三维建模"
                value="三维建模"
                namel="typeArray"
              />
              <el-checkbox label="摄影" value="摄影" namel="typeArray" />
              <el-checkbox label="游戏设计" value="游戏设计" name="typeArray" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="上传作品">
            <el-upload
              class="upload-demo"
              action="http://localhost:5000/api/files/upload"
              multiple
              :limit="6"
              :file-list="fileList"
              :headers="{ token: user.token }"
              :on-success="handleFileUpload"
            >
              <el-button type="primary" color="#333">选取文件</el-button>
              <div class="el-upload__tip" style="margin-left: 10px">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
            <!-- <el-dialog v-model="dialogVisiable"> prop="urlArray"
              <img
                style="width: 100%; height: 100%"
                w-full
                alt="Preview Image"
              />
            </el-dialog> -->
          </el-form-item>
          <!-- <el-form-item>
            <el-button type="primary" color="#333" @click="submit"
              >提交</el-button
            >
            <el-button type="info" @click="reset">重置</el-button>
          </el-form-item> -->
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import { ElMessage } from "element-plus";
import { GET_TOKEN } from "../../utils/user";
import dayjs from "dayjs";
import { reqAddWork } from "../../api/work";

let $route = useRoute();
let $router = useRouter();
let userStore = useUserStore();
const formRef = ref();
const fileList = ref([]);
// const currentTime = ref(dayjs());
const workParams = reactive({
  userId: null,
  username: null,
  avatar: null,
  workName: null,
  workDescribe: null,
  typeArray: [],
  workType: null,
  uploadDate: null,
  fileType: null,
  workUrls: null,
  status: null,
});
let user = reactive({});
user = JSON.parse(GET_TOKEN() || "{}");
const urls = ref([]);

const formRules = reactive({
  workName: [
    {
      required: true,
      trigger: "blur",
      message: "请输入作品名称",
    },
  ],
  workDescribe: [
    {
      required: true,
      trigger: "blur",
      message: "请输入作品描述信息",
    },
  ],
  workType: [
    {
      required: true,
      trigger: "blur",
      message: "请选择作品标签",
    },
  ],
  workUrls: [
    {
      required: true,
      trigger: "blur",
      message: "请上传作品",
    },
  ],
});

const resetForm = () => {
  if (!formRef.value) return;
  fileList.value = [];
  formRef.value.resetFields();
  console.log("token", user.token);
};

const handleFileUpload = (response, file, fileList) => {
  // console.log("uploadFileList", uploadFileList);
  // urls.value = fileList.value.map((item) => item.response?.data);
  // console.log("urls.value", urls.value);
  console.log("file", file);
  if (file.raw.type === "video/mp4") {
    workParams.fileType = "video";
  } else {
    workParams.fileType = "image";
  }
  console.log("workParams.fileType", workParams.fileType);
  workParams.workUrls = fileList.map((item) => item.response?.data).join(",");
};

const submit = async () => {
  // 校验表单
  await formRef.value.validate();
  try {
    // 确认提交
    saveWork();
  } catch (error) {
    // 错误提示
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};

const saveWork = async () => {
  // 提交时获取用户ID
  workParams.userId = userStore.userInfo.id;
  workParams.username = userStore.userInfo.username;
  workParams.avatar = userStore.userInfo.avatar;
  // 提交时获取当前时间 YYYY-MM-DD HH:MM:SS
  // workParams.uploadDate = currentTime.value.format("YYYY-MM-DD HH:mm:ss");
  workParams.uploadDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
  // workParams.uploadDate = dayjs(currentTime.value).format(
  //   "YYYY-MM-DD HH:mm:ss"
  // );
  workParams.workType = workParams.typeArray.join(",");
  workParams.status = '待审核',
  console.log("workParams", workParams);
  try {
    // 表单上传操作
    const res = await reqAddWork(workParams);
    console.log("res", res);
    if (res.code === "200") {
      // 跳转路由
      $router.push("/user/works");
    } else {
      ElMessage({
        type: "error",
        message: res.message,
      });
    }
  } catch (error) {
    ElMessage({
      type: "error",
      message: error.message,
    });
  }
};
</script>

<style scoped>
.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.upload {
  width: 100%;
  height: 600px;
  /* padding-top: 40px; */
  display: flex;
  /* 主轴居中 */
  justify-content: center;
  /* 交叉轴居中 */
  align-items: center;
}
/* .upload .container {
  margin: 0 auto;
  width: 1320px;
} */
.upload .content {
  width: 800px;
}
.upload-demo ul {
  /* display: flex; */
  background-color: #f98080;
}
</style>
