<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="用户名" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="性别" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="邮箱" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="tag"
      label="角色"
      width="100"
      :filters="[
        { text: 'User', value: 'User' },
        { text: 'Admin', value: 'Admin' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.tag === 'User' ? '' : 'Admin'"
          disable-transitions
          >{{ scope.row.tag }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="启用状态" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-switch v-model="status" />
        </div>
      </template>
    </el-table-column>
    <el-table-column label="性别" width="180">
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small" @click="handleReview(scope.$index, scope.row)"
          >审核</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleReject(scope.$index, scope.row)"
          >驳回</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { Timer } from "@element-plus/icons-vue";

const tableData = reactive([]);

const handleReview = (index, row) => {
  console.log(index, row);
};
const handleReject = (index, row) => {
  console.log(index, row);
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped></style>
