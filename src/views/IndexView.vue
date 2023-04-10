<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Sider from '../components/Sider.vue'
import Header from '../components/Header.vue'

</script>

<template>
  <div class="container">
    <Sider />
    <div class="content">
      <Header />
      <div class="main">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f4f6f9;

  .content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .header {
      width: 100%;
      margin-bottom: -30px;
    }

    .main {
      width: 100%;
      padding: 0 20px;
      background-color: transparent;
    }
  }

}
</style>
