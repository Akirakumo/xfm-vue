<script setup lang="ts">
import { ref } from "vue"
import { ElMessage } from 'element-plus'
import { useStore } from '@/stores/index'
import Navigate from "@/components/Navigate.vue";

const store = useStore()

</script>

<template>
    <Navigate>
        <template #title>HOME</template>
    </Navigate>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
            </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
</template>

<style lang="less" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>
