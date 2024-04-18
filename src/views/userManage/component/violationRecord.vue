<template>
  <div>
    <el-dialog
      v-model="dialogTableVisible"
      title="用户名的违规记录"
      width="800"
    >
      <el-table :data="gridData">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const dialogTableVisible = ref(false);
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const gridData = [
  {
    date: "2016-05-02",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-04",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-01",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-03",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
];
</script>

<style scoped></style>
