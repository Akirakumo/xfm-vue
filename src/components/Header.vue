<script setup lang="ts">
import { ref } from 'vue'
import { Fold } from '@element-plus/icons-vue'
const isCollapse = ref(false)
</script>

<template>
    <el-header class="header">
        <el-icon>
            <Fold />
        </el-icon>
    </el-header>
</template>

<style lang="less" scoped>
.header {
    background-color: #6777ef;
}
</style>