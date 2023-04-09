import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const isCollapse = ref(false)
  const siderCollapse = () => {
    isCollapse.value = !isCollapse.value
  }

  return {
    isCollapse,
    siderCollapse,
  }
})
