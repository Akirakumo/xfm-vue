<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { Notebook, Folder, House, VideoPlay, Headset, Setting } from '@element-plus/icons-vue'
import { useStore } from '@/stores/index'

const store = useStore()

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}


const list = reactive({
    home: {
        id: 0,
        name: 'HOME',
        icon: 0
    }
})
</script>

<template>
    <el-menu class="sider" default-active="home" router width="200px" :collapse="store.isCollapse" popper-effect="light"
        @open="handleOpen" @close="handleClose">
        <div class="logo">
            <img src="@/assets/icon/帕朵菲莉丝_拖走.png">
            <span v-show="!store.isCollapse">Pardo</span>
        </div>
        <el-menu-item index="home">
            <el-icon>
                <House />
            </el-icon>
            <template #title>HOME</template>
        </el-menu-item>
        <el-menu-item index="comic">
            <el-icon>
                <Notebook />
            </el-icon>
            <template #title>COMIC</template>
        </el-menu-item>
        <el-menu-item index="video">
            <el-icon>
                <VideoPlay />
            </el-icon>
            <template #title>VIDEO</template>
        </el-menu-item>
        <el-menu-item index="music">
            <el-icon>
                <Headset />
            </el-icon>
            <template #title>MUSIC</template>
        </el-menu-item>
        <el-menu-item index="storage">
            <el-icon>
                <Folder />
            </el-icon>
            <template #title>STORAGE</template>
        </el-menu-item>
        <el-menu-item index="setting">
            <el-icon>
                <Setting />
            </el-icon>
            <template #title>SETTING</template>
        </el-menu-item>
    </el-menu>
</template>

<style lang="less" scoped>
.sider {
    height: 100%;
    border-right: 0;
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
}
</style>