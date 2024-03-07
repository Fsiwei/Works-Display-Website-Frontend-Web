<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, context) {
    import * as echarts from "echarts";

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById("main")!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      title: {
        text: "Multiple Radar",
      },
      radar: [
        {
          indicator: [
            { text: "Brand", max: 100 },
            { text: "Content", max: 100 },
            { text: "Usability", max: 100 },
            { text: "Function", max: 100 },
          ],
          center: ["25%", "40%"],
          radius: 80,
        },
      ],
      series: [
        {
          type: "radar",
          tooltip: {
            trigger: "item",
          },
          areaStyle: {},
          data: [
            {
              value: [60, 73, 85, 40],
              name: "A Software",
            },
          ],
        },
      ],
    };

    option && myChart.setOption(option);

    return {};
  },
});
</script>

<style scoped></style>
