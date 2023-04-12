<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/index'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

const goBack = () => {
    console.log('go back')
}

</script>

<template>
    <el-page-header class="page-header" :icon="(store.isGoBack ? ArrowLeft : 'null')" @click="goBack">
        <template #content>
            <span class="title">
                <slot name="title">{{ router.currentRoute.value.name?.toString().toUpperCase() }}</slot>
            </span>
        </template>
    </el-page-header>
</template>

<style lang="less" scoped>
.page-header {
    display: flex;
    align-items: center;
    height: 55px;
    padding: 0 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.03);

    .title {
        font-weight: bold;
    }
}
</style>