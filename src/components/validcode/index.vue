<template>
  <div class="ValidCode disabled-select" @click="refreshCode">
    <span
      v-for="(item, index) in codeLists"
      :key="index"
      :style="getStyle(item)"
      >{{ item.code }}</span
    >
  </div>
</template>

<script setup>
import {onMounted, ref, reactive} from "vue";
let length = ref(4);
let codeLists = ref([]);
onMounted(() => {
    createCode();
});
const refreshCode = () => {
    createdCode();
};
const createCode = () => {
    let len = length.value;
    let codeList = [];
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charsLen = chars.length;
    // 生成
    for(let i = 0; i < len; i++){
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)];
        codeList.push({
            code: chars.charAt(Math.floor(Math.random() * charsLen)),
            color: `rgb(${rgb})`,
            padding: `${[Math.floor(Math.random() * 5)]}px`,
            transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
    }
    // 指向
    // this.codeList = codeList;
    codeLists.value = codeList;
    // 将当前数据派发出去
    $emit('update', codeList.map(item => item.code).join(''));
};
const getStyle = (data) => {
    return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform};`
};

// let $emit = defineEmits(["getFlag"]);
let $emit = defineEmits(["update"]);
</script>

<style>
.ValidCode {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.ValidCode span {
  display: inline-block;
  font-size: 24px;
}
</style>
