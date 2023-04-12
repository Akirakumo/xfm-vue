<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { ElMessage } from 'element-plus'
import { Clock } from '@element-plus/icons-vue'
import Card from '@/components/Card.vue'
import EChartLine from '@/components/EChartLine.vue'
import { useStore } from '@/stores/index'
import { getSystemInfo } from "@/api/system"

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
    state.systemInfo = res.data
})

</script>

<template>
    <div class="home">
        <div class="left">
            <!-- <Card>
                                                                                                                                                                                                                                    <template #icon>
                                                                                                                                                                                                                                        <Clock />
                                                                                                                                                                                                                                    </template>
                                                                                                                                                                                                                                    <template #title>系统信息</template>
                                                                                                                                                                                                                                    <template #content>
                                                                                                                                                                                                                                        <EChartLine />
                                                                                                                                                                                                                                        {{ state.systemInfo }}
                                                                                                                                                                                                                                    </template>
                                                                                                                                                                                                                                </Card> -->
        </div>
        <div class="right">
            <!-- <Card>
                                                                                                                                                                                                                                    <template #icon>
                                                                                                                                                                                                                                        <Clock />
                                                                                                                                                                                                                                    </template>
                                                                                                                                                                                                                                    <template #title>时间</template>
                                                                                                                                                                                                                                    <template #content>
                                                                                                                                                                                                                                        <div class="sys-time"><span class="label">系统时间(UTC+8)：</span></div>
                                                                                                                                                                                                                                        <div class="my-time"><span class="label">本地时间(UTC+8)：</span><span>{{ state.localTime }}</span></div>
                                                                                                                                                                                                                                    </template>
                                                                                                                                                                                                                                </Card> -->
        </div>
    </div>
</template>

<style lang="less" scoped>
.home {

    .left {
        width: 70%;
        height: 1800px;
        background-color: #eee;
    }

    .right {
        width: 30%;
        height: 500px;
        background-color: #bfa;
    }

}
</style>
