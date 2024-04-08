<template>
  <div class="upload">
    <div class="content">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>上传作品</span>
            <div class="button">
              <!-- <el-button type="primary" color="#333" @click="submit"
                >提交</el-button
              > -->
              <el-popconfirm title="确定提交？" @confirm="submit(formRef)">
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
          <el-form-item label="作品名称" name="workName">
            <el-input style="width: 220px" v-model="workParams.workName" />
          </el-form-item>
          <!-- <el-form-item label="作品描述" prop="describe"> -->
          <el-form-item label="作品描述">
            <el-input type="textarea" v-model="workParams.workDescribe" />
          </el-form-item>
          <el-form-item label="作品标签">
            <el-checkbox-group v-model="workParams.workType">
              <el-checkbox label="二维平面" value="二维平面" name="workType" />
              <el-checkbox label="二维动画" value="二维动画" name="workType" />
              <el-checkbox label="三维动画" value="三维动画" namel="workType" />
              <el-checkbox label="游戏设计" value="游戏设计" name="workType" />
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
            <!-- <el-dialog v-model="dialogVisiable">
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

<script>
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import { ElMessage } from "element-plus";
import { GET_TOKEN } from "../../utils/user";
import dayjs from "dayjs";

export default defineComponent({
  components: {},
  setup() {
    let $route = useRoute();
    let $router = useRouter();
    let userStore = useUserStore();
    const formRef = ref();
    const fileList = ref([]);
    const currentTime = ref(dayjs());
    const workParams = reactive({
      userId: null,
      workName: null,
      workDescribe: null,
      workType: [],
      uploadDate: null,
      workUrls: [],
    });
    let user = reactive({});
    user = JSON.parse(GET_TOKEN() || "{}");
    const urls = ref([]);

    const formRules = {
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
    };

    return {
      formRef,
      formRules,
      fileList,
      workParams,
      currentTime,
      userStore,
      user,
      urls,
    };
  },
  methods: {
    resetForm() {
      console.log("resetForm");
      // if (!this.formRef) return;
      if (!this.formRef) {
        console.log("formRef非空");
      }
      this.formRef.resetFields();
    },
    handleFileUpload(response, file, fileList) {
      this.urls = fileList.map((item) => item.response?.data);
      this.workParams.workUrls = fileList.map((item) => item.response?.data);
    },
    async submit(formRef) {
      // 表单上传前的校验
      console.log("this.formRef", this.formRef);
      console.log("formRef", formRef);
      // 校验表单
      await formRef.validateField((valid, fields) => {
        if (valid) {
          console.log("提交");
          this.saveWork();
        } else {
          console.log("错误提示");
          // 错误提示
          ElMessage({
            type: "error",
            message: error.message,
          });
        }
      });
      // await this.formRef.validateField();
      // await formRef.value.validate();
      // await formRef.validate();
      // try {
      //   // 确认提交
      //   this.saveWork();
      // } catch (error) {
      //   // 错误提示
      //   ElMessage({
      //     type: "error",
      //     message: error.message,
      //   });
      // }
    },
    saveWork() {
      // 提交时获取用户ID
      this.workParams.userId = this.userStore.userInfo.id;
      // 提交时获取当前时间 YYYY-MM-DD HH:MM:SS
      this.workParams.uploadDate = dayjs(this.currentTime.value).format(
        "YYYY-MM-DD HH:mm:ss"
      );
      console.log("workParams", this.workParams);
      // 表单上传操作
      // 表单上传
    },
  },
});
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
