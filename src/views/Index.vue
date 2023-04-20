<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, RouterView } from 'vue-router'
import Sider from '@/components/Sider.vue'
import Header from '@/components/Header.vue'
import { useStore } from '@/stores/index'

const router = useRouter()
const store = useStore()

// 登录判断
localStorage.getItem('isLogin') != '' ? router.push('/home') : router.push('/login')

</script>

<template>
  <div class="container">
    <Sider />
    <div class="main">
      <Header class="header" />
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@h: 100vh - 150px;

.container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f4f6f9;

  .main {
    position: relative;
    flex: 1 0 auto;

    .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }

    .content {
      position: absolute;
      top: 125px;
      bottom: 0;
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      overflow: auto;
    }
  }

}
</style>
