<script setup lang="ts">
import { ref, reactive } from "vue"
import { ElMessage } from 'element-plus'
import { Clock } from '@element-plus/icons-vue'
import { useStore } from '@/stores/index'
import Navigate from '@/components/Navigate.vue'
import Card from '@/components/Card.vue'
import EChartLine from '@/components/EChartLine.vue'

const store = useStore()

const state = reactive({
    local_time: ''
})

const updata_time = () => {
    setInterval(() => {
        state.local_time = new Date().toLocaleString()
    }, 1000)
}

updata_time()

</script>

<template>
    <div class="home">
        <Navigate>
            <template #title>HOME</template>
        </Navigate>
        <div class="list">
            <Card type="normal">
                <template #icon>
                    <Clock />
                </template>
                <template #title>时间</template>
                <template #content>
                    <div class="sys-time"><span class="label">系统时间(UTC+8)：</span></div>
                    <div class="my-time"><span class="label">本地时间(UTC+8)：</span><span>{{ state.local_time }}</span></div>
                </template>
            </Card>
            <Card size="large">
                <template #icon>
                    <Clock />
                </template>
                <template #title>系统信息</template>
                <template #content>
                    <EChartLine />
                </template>
            </Card>
        </div>
    </div>
</template>

<style lang="less" scoped>
.list {
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 20px 20px;

    .label {
        font-weight: bold;
    }
}
</style>
