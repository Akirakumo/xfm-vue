<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    type?: string
}>()

console.log(props.type);

</script>

<template>
    <el-card :class="type" class="card">
        <template #header>
            <div class="card-header">
                <el-icon>
                    <slot name="icon"></slot>
                </el-icon>
                <span class="card-title">
                    <slot name="title"></slot>
                </span>
            </div>
        </template>
        <div class="card-body">
            <slot name="content"></slot>
        </div>
    </el-card>
</template>

<style lang="less" scoped>
.card {
    .card-header {
        display: flex;
        align-items: center;

        .card-title {
            margin-left: 5px;
            font-weight: bold;
        }
    }
}
</style>