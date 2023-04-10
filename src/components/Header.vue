<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/index'
import { Switch } from '@element-plus/icons-vue'

const store = useStore()

</script>

<template>
    <div class="header">
        <div class="banner">
            <div class="sider-collapse" @click="store.siderCollapse">
                <el-icon class="icon">
                    <Switch />
                </el-icon>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.header {
    position: relative;

    .banner {
        position: relative;
        height: 80px;
        background-color: #6777ef;
    }

    .sider-collapse {
        position: absolute;
        left: 15px;
        top: 15px;
        cursor: pointer;

        .icon {
            font-size: 24px;
            color: #fff;
        }
    }
}
</style>