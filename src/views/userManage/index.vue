<template>
  <div class="content">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户名" width="160">
        <template #default="scope">
          <div style="display: flex; align-items: center; text-align: center">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="100">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.gender }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="220">
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
      <el-table-column label="启用状态" width="100">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-switch
              v-model="scope.row.isActive"
              :disabled="scope.row.id === currentUserId"
              inline-prompt
              active-text="启用"
              inactive-text="禁用"
              @change="isActive(scope.row.id, !scope.row.isActive)"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next,"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total"
      @prev-click="prev"
      @next-click="next"
    />
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { reqGetAllUserPage } from "@/api/user";
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();
const currentUserId = userStore.userInfo.id;
const tableData = reactive([]);
let currentPage = ref(1);
let pageSize = ref(8);
let total = ref(0);
onMounted(() => {
  console.log("currentPage", currentPage.value);
  // 组件一挂载就调用获取作品的方法
  getAllUserPage(currentPage.value);
});

const getAllUserPage = async (pageNum) => {
  try {
    const res = await reqGetAllUserPage(pageNum, pageSize.value);
    if (res.code === "200") {
      console.log("res.data", res.data);
      Object.assign(tableData, res.data.list);
      total.value = res.data.count;
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

const filterTag = (value, row) => {
  return row.tag === value;
};

const isActive = (id, isActive) => {
  console.log(index, row);
};

const prev = () => {
  if (currentPage.value >= 1) {
    currentPage.value = currentPage.value - 1;
    getAllUserPage(currentPage.value);
  }
};

const next = () => {
  let max = Math.ceil(total.value / pageSize.value);
  if (currentPage.value <= max) {
    currentPage.value = currentPage.value + 1;
    getAllUserPage(currentPage.value);
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  height: 1000px;
  background-color: #c99797;
}
</style>
