<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

onMounted(() => {
    const chartDom = document.getElementById('main');
    const option: EChartsOption = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
        ]
    };

    if (chartDom) {
        const myChart = echarts.init(chartDom);
        option && myChart.setOption(option);
    }
})


</script>

<template>
    <div id="main"></div>
</template>

<style lang="less" scoped>
#main {
    width: 300px;
    height: 300px;
}
</style>