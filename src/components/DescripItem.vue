<script setup lang="ts">
interface dataOption {
    name: string,
    value?: string
}

defineProps<{
    data: dataOption[]
}>()

</script>

<template>
    <el-descriptions-item label-class-name="des-list-item-label" v-for="item of data" :label="item.name">
        {{ item.value }}
        <slot name="item"></slot>
    </el-descriptions-item>
</template>

<style lang="less" scoped>
.des-list-item-label {
    display: inline-block;
    width: 70px;
}
</style>