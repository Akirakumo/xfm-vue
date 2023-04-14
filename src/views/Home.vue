<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Clock, Cpu, Histogram } from '@element-plus/icons-vue'
import Card from '@/components/Card.vue'
import EChartLine from '@/components/EChartLine.vue'
import Calendar from '@/components/Calendar.vue'
import { useStore } from '@/stores/index'
import { getSystemInfo } from '@/api/system'


const store = useStore()
const state = reactive({
    localTime: '',
    systemInfo: {}
})

const updata_time = () => {
    setInterval(() => {
        state.localTime = new Date().toLocaleString()
    }, 1000)
}

updata_time()

getSystemInfo().then(res => {
    console.log(res.data)
    state.systemInfo = res.data

})

</script>

<template>
    <div class="home">
        <div class="list">
            <Card>
                <template #icon>
                    <Cpu />
                </template>
                <template #title>系统信息</template>
                <template #content>
                    <ul>
                        <li v-for="(item, index) in Object.entries(state.systemInfo)" :key="index">
                            <span>{{ item[0] }} : </span>
                            <span>{{ item[1] }}</span>
                        </li>
                    </ul>
                </template>
            </Card>
            <Card>
                <template #icon>
                    <Histogram />
                </template>
                <template #title>系统监控</template>
                <template #content>
                    <EChartLine />
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
                    <ul class="time-list">
                        <li class="net-time"><span class="label">北京时间 (UTC+8)：</span></li>
                        <li class="system-time"><span class="label">系统时间 (UTC+8)：</span></li>
                        <li class="local-time"><span class="label">本地时间 (UTC+8)：</span><span>{{ state.localTime }}</span>
                        </li>
                    </ul>
                </template>
            </Card>
            <Card>
                <template #icon>
                    <Clock />
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
}
</style>
