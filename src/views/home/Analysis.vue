<template>
  <PageWrapper>
    <div style="height: calc(100vh - 85px); background: white">
      <div style="margin-top: 0px;" class="top-container">
        <video style="flex: 1;width: 640px;height: 360px" src="../../assets/test/paperAirplane.mp4"></video>
        <div class="info radar" style="flex: 1;height: 340px; margin-left: 20px; background: #b3d4fc">
          <div class="course-info">
            <span>课程名称</span>
            <span>授课老师</span>
          </div>
          <div>雷达图</div>
        </div>
      </div>
      <div style="margin-top: 10px; height: 40px; background: dodgerblue" class="tag">
        <a-tag color="#f50">语音清晰度</a-tag>
        <a-tag color="#2db7f5">语速</a-tag>
        <a-tag color="#87d068">音量</a-tag>
        <a-tag color="#108ee9">走动距离</a-tag>
      </div>
      <div class="top-container">
        <div style="flex: 2;width: 640px;height: 200px; background: #b3d4fc">时间占比</div>
        <div class="info radar" style="flex: 1;height: 200px; margin-left: 20px; background: #b3d4fc">关键词</div>
      </div>
      <div class="top-container">
        <div style="flex: 1;width: 640px;height: 200px; background: #b3d4fc">布鲁姆</div>
        <div class="info radar" style="flex: 1;height: 200px; margin-left: 20px; background: #b3d4fc">课程内容摘要</div>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts">
  import { createVNode, defineComponent, reactive, ref, toRefs } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Input, Switch } from 'ant-design-vue';
  import { Button } from '/@/components/Button';
  import * as echarts from 'echarts';

  export default defineComponent({
    components: {
      PageWrapper,
      InputSearch: Input.Search,
      Button,
      Switch,
    },
    setup() {
      const loading = ref(false);


      return {
        loading,
      };
    },
    methods: {},
  });
</script>

<style lang="less" scoped>
  ::v-deep(.zebra-highlight) {
    background: #fafafa;
  }

  .reset-password-button-style {
    background: #4bc0c0;
    border-color: #4bc0c0;
    margin: 0 5px;
  }

  .reset-password-button-style:hover {
    background: #4bc08f;
    border-color: #4bc08f;
  }

  .top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    //padding: 0 15px;
    margin: 0 15px;
    margin-top: 15px;
    width: 100%;
    overflow: hidden;
    //background-color: #1c6ca1;
  }

</style>
