<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption

const option: EChartsOption = {
    color: ['#00DDFF', '#80FFA5', '#FFBF00', '#37A2FF', '#FF0087'],
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['CPU', '内存']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                length: 0
            },
            data: new Array(60).fill('').fill(15, 14, 15).fill(30, 28, 29).fill(45, 44, 45).fill(60, 58, 59),
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'CPU',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.4,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(0, 221, 255)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(77, 119, 255)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [43.3, 85.8, 93.7, 33, 100, 55]
        },
        {
            name: '内存',
            type: 'line',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.6,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: [83.1, 73.4, 55.1, 55, 55, 60]
        }
    ]
};

const lineChartDom = ref()

onMounted(() => {
    if (lineChartDom.value) {
        const lineChart = echarts.init(lineChartDom.value)
        option && lineChart.setOption(option)
    }
})

</script>

<template>
    <div ref="lineChartDom" class="line-chart"></div>
</template>

<style lang="less" scoped>
.line-chart {
    width: 100%;
    height: 300px;
}
</style>