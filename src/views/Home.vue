<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Clock, Cpu, Histogram, Calendar as CalendarIcon } from '@element-plus/icons-vue'
import Card from '@/components/Card.vue'
import EChartLine from '@/components/EChartLine.vue'
import EChartRing from '@/components/EChartRing.vue'
import Calendar from '@/components/Calendar.vue'
import { useStore } from '@/stores/index'
import { getSystemInfo, getSystemUsage, getSystemTime } from '@/api/system'
import { indexOf } from 'lodash'

interface SystemUsage {
    cpuUsage: any[],
    memUsage: any[]
}

const store = useStore()

let timer: any = null;
const localTime = ref<string>('');
const systemTime = ref<string>('');
const systemInfo = reactive<Record<any, any>>({});
const systemUsage = reactive<SystemUsage>({
    cpuUsage: new Array(60).fill(0),
    memUsage: new Array(60).fill(0)
});

getSystemInfo().then(res => {
    Object.entries(res.data).forEach(([key, value]) => {
        systemInfo[key] = value
    })
})

const updata = () => {
    localTime.value = new Date().toLocaleString()
    getSystemTime().then(res => {
        systemTime.value = res.data
    }).catch(err => {
        clearInterval(timer)
        ElMessage({
            message: 'getSystemTime Error',
            type: 'error',
        })
    })
    getSystemUsage().then(res => {
        const { data } = res
        Object.entries(data).forEach(([key, value]) => {
            if (['cpuUsage', 'memUsage'].indexOf(key) > -1) {
                systemUsage[key].shift()
                systemUsage[key].push(value)
            }
        })
    }).catch(err => {
        clearInterval(timer)
        ElMessage({
            message: 'getSystemUsage Error',
            type: 'error',
        })
    })
}

onMounted(() => {
    timer = setInterval(updata, 1000)
})

onUnmounted(() => {
    clearInterval(timer)
})

</script>

<template>
    <div class="home">
        <div class="list">
            <Card>
                <template #icon>
                    <Cpu />
                </template>
                <template #title>设备信息</template>
                <template #content>
                    <el-descriptions :column="1">
                        <el-descriptions-item label="设备">{{ systemInfo.hostname }}</el-descriptions-item>
                        <el-descriptions-item label="CPU">{{ systemInfo.cpu }}</el-descriptions-item>
                        <el-descriptions-item label="核心">{{ systemInfo.core }}</el-descriptions-item>
                        <el-descriptions-item label="内存">{{ systemInfo.mem }}</el-descriptions-item>
                        <el-descriptions-item label="系统">
                            {{ systemInfo.system }}
                            <el-tag size="small">{{ systemInfo.machine }}</el-tag>
                        </el-descriptions-item>
                        <el-descriptions-item label="磁盘">
                            <el-table :data="systemInfo.driveList" size="small" :show-header="false" table-layout="auto">
                                <el-table-column prop="mounted" label="" />
                                <el-table-column prop="capacity" label="" />
                                <el-table-column prop="blocks" label="" />
                            </el-table>
                        </el-descriptions-item>
                        <el-descriptions-item label="网络">
                            <el-table :data="systemInfo.networks" size="small" :show-header="false" table-layout="auto">
                                <el-table-column prop="family" label="" />
                                <el-table-column prop="mac" label="" />
                                <el-table-column prop="address" label="" />
                            </el-table>
                        </el-descriptions-item>
                    </el-descriptions>
                </template>
            </Card>
            <Card>
                <template #icon>
                    <Histogram />
                </template>
                <template #title>系统监控</template>
                <template #content>
                    <EChartLine :data="systemUsage" />
                </template>
            </Card>
        </div>
        <div class="list">
            <Card>
                <template #icon>
                    <Clock />
                </template>
                <template #title>时间</template>
                <template #content>
                    <el-descriptions :column="1">
                        <el-descriptions-item label-class-name="large-label" label="北京时间">
                            {{ localTime }}
                        </el-descriptions-item>
                        <el-descriptions-item label-class-name="large-label" label="设备时间">
                            {{ systemTime }}
                        </el-descriptions-item>
                        <el-descriptions-item label-class-name="large-label" label="本地时间">
                            {{ localTime }}
                        </el-descriptions-item>
                    </el-descriptions>
                </template>
            </Card>
            <Card>
                <template #icon>
                    <CalendarIcon />
                </template>
                <template #title>日历</template>
                <template #content>
                    <Calendar />
                </template>
            </Card>
        </div>
    </div>
</template>

<style lang="less">
.home {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;

    .list>.card {
        margin-bottom: 20px;
    }

    .time-list {
        li {
            margin-bottom: 10px;

            &:last-child {
                margin: 0;
            }
        }
    }


    .el-descriptions__cell {
        display: flex;

        .el-descriptions__label {
            flex: 0 0 60px;
            margin: 0;
            vertical-align: top;
        }

        .large-label {
            flex: 0 0 80px;
        }

        .el-descriptions__content {
            flex: 1 0 auto;
        }
    }
}
</style>
