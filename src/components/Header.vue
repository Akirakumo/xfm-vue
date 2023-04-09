<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/index'
import { Fold } from '@element-plus/icons-vue'

const store = useStore()

const goBack = () => {
    console.log('go back')
}

</script>

<template>
    <div class="header">
        <div class="banner">
            <div class="sider-collapse" @click="store.siderCollapse">
                <el-icon class="icon">
                    <Fold />
                </el-icon>
            </div>
        </div>
        <el-page-header @back="goBack">
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
        </el-page-header>
    </div>
</template>

<style lang="less" scoped>
.header {
    .banner {
        position: relative;
        height: 115px;
        background-color: #6777ef;
    }

    .sider-collapse {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        .icon {
            font-size: 24px;
            color: #fff;
        }
    }


}
</style>