<script setup lang="ts">
import { Icon, type IconProps } from '@iconify/vue/dist/iconify.js';
withDefaults(defineProps<{
    icon: IconProps["icon"]
    width?: string
    height?: string
}>(), {
    width: "24",
    height: "24"
})

</script>

<template>
    <div :style="{width: `${width}px`, height: `${height}px`}">
        <Icon :icon="icon" :width="width" :height="height"/>
    </div>
</template>

<style lang="scss">
</style>