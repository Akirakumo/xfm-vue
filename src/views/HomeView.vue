<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { Fold } from '@element-plus/icons-vue'
import Sider from '../components/Sider.vue'

const components = {
  Sider
}

const isCollapse = ref(false)

</script>

<template>
  <el-container class="common-layout">
    <el-aside class="aside">
      <Sider :isCollapse="isCollapse" />
    </el-aside>
    <el-container class="content">
      <el-header class="header">
        <el-icon>
          <Fold v-show="!isCollapse" />
        </el-icon>
      </el-header>
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
    width: 150px;
  }
}

.header {
  background-color: #6777ef;
}
</style>
