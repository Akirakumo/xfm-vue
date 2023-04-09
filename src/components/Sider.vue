<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { Notebook, Menu as IconMenu, House, VideoPlay, Headset, Setting } from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

defineProps({
    isCollapse: Boolean
})

const list = reactive({
    home: {
        id: 0,
        name: 'HOME',
        icon: 0
    }
})
</script>

<template>
    <div class="sider">
        <div class="logo">
            <img src="@/assets/icon/帕朵菲莉丝_拖走.png">
            <span>Pardo</span>
        </div>
        <el-menu default-active="1" class="sider-menu" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
                <el-icon>
                    <House />
                </el-icon>
                <template #title>HOME</template>
            </el-menu-item>
            <el-menu-item index="2">
                <el-icon>
                    <Notebook />
                </el-icon>
                <template #title>COMIC</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <VideoPlay />
                </el-icon>
                <template #title>VIDEO</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <Headset />
                </el-icon>
                <template #title>MUSIC</template>
            </el-menu-item>
            <el-menu-item index="5">
                <el-icon>
                    <Setting />
                </el-icon>
                <template #title>SETTING</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<style lang="less" scoped>
.sider {
    width: 95%;
    height: 100%;
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.03);

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        cursor: pointer;

        img {
            width: 50%;
            height: 50%;
        }

        span {
            font-size: 24px;
        }
    }

    .sider-menu {
        border-right: 0;
    }
}
</style>