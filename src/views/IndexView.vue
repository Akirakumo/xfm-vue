<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Sider from '../components/Sider.vue'
import Header from '../components/Header.vue'

const components = {
  Sider,
  Header
}
const isCollapse = ref(false)
</script>

<template>
  <el-container class="common-layout">
    <el-aside class="aside">
      <Sider :isCollapse="isCollapse" />
    </el-aside>
    <el-container class="content">
      <el-main class="main">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.common-layout {
  height: 100%;

  .aside {
    width: 200px;
  }
}
</style>
