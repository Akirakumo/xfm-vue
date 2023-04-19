<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption

var option: EChartsOption

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    selectedMode: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      startAngle: 180,
      label: {
        show: true,
        formatter(param) {
          return param.name + ' (' + param.percent! * 2 + '%)';
        }
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
        {
          value: 1048 + 735 + 580 + 484 + 300,
          itemStyle: {
            color: 'none',
            decal: {
              symbol: 'none'
            }
          },
          label: {
            show: false
          }
        }
      ]
    }
  ]
}

const ringChartDom = ref()

onMounted(() => {
  if (ringChartDom.value) {
    const lineChart = echarts.init(ringChartDom.value)
    option && lineChart.setOption(option)
  }
})

</script>

<template>
  <div ref="ringChartDom" class="line-chart"></div>
</template>

<style lang="less" scoped>
.line-chart {
  width: 50%;
  height: 300px;
}
</style>