<template>
  <div class="upload">
    <div class="content">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>上传作品</span>
          </div>
        </template>
        <el-form label-width="120px" class="demo-ruleForm" status-icon>
          <el-form-item label="作品名称">
            <el-input style="width: 220px" />
          </el-form-item>
          <el-form-item label="作品描述" prop="desc">
            <el-input type="textarea" />
          </el-form-item>
          <el-form-item label="作品标签" prop="type">
            <el-checkbox-group>
              <el-checkbox label="二维平面" name="type" />
              <el-checkbox label="二维动画" name="type" />
              <el-checkbox label="三维动画" name="type" />
              <el-checkbox label="游戏设计" name="type" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="上传作品">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              list-type="picture"
            >
              <el-button type="primary" color="#333">点击上传</el-button>
              <template #tip>
                <div class="el-upload__tip">大小小于500kb的jpg/png文件</div>
              </template>
            </el-upload>
            <!-- <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :on-change="handleChange"
            >
              <el-button type="primary">Click to upload</el-button>
              <template #tip>
                <div class="el-upload__tip">
                  jpg/png files with a size less than 500kb
                </div>
              </template>
            </el-upload> -->
            <el-dialog v-model="dialogVisiable">
              <img
                style="width: 100%; height: 100%"
                w-full
                alt="Preview Image"
              />
            </el-dialog>
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
  </div>
</template>

<script setup>
import {} from "vue";
</script>

<style scoped>
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
</style>
