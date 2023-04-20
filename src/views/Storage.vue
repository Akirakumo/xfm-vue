<script setup lang="ts">
import { ref } from "vue"
import { ElMessage } from 'element-plus'
import Navigate from "@/components/Navigate.vue";
import { getDrives } from '@/api/storage'

// defineProps<{ msg: string }>();

getDrives().then(res => {
    console.log(res);
})

</script>

<template>
    <el-card class="storage-box">

    </el-card>
</template>

<style lang="less" scoped>
.storage-box {
    height: 100%;
}
</style>
