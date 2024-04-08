<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="用户名" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="性别" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.gender }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="邮箱" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.email }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="tag"
      label="角色"
      width="100"
      :filters="[
        { text: 'USER', value: 'USER' },
        { text: 'ADMIN', value: 'ADMIN' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.role === 'USER' ? '' : 'ADMIN'"
          disable-transitions
          >{{ scope.row.role }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="启用状态" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-switch v-model="scope.row.active" />
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { reqGetAllUserPage } from "@/api/user";
const tableData = reactive([]);
onMounted(() => {
  // 组件一挂载就调用获取作品的方法
  getAllUserPage();
});

const getAllUserPage = async () => {
  try {
    const res = await reqGetAllUserPage(1, 8);
    if (res.code === "200") {
      console.log("res.data", res.data);
      Object.assign(tableData, res.data.list);
      console.log("tableData", tableData);
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

const handleReview = (index, row) => {
  console.log(index, row);
};
const handleReject = (index, row) => {
  console.log(index, row);
};
</script>

<style scoped></style>
