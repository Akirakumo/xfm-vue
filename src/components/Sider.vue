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
        <div class="logo">Elysia</div>
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
    height: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);

    .logo {
        padding: 20px 0;
        text-align: center;
        font-size: 20px;
        cursor: pointer;
    }

    .sider-menu {
        border-right: 0;
    }
}
</style>