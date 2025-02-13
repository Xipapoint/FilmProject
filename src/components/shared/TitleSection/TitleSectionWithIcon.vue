<script setup lang="ts">
import { type IconProps } from '@iconify/vue/dist/iconify.js';
import Icon from '../Icon.vue';

defineProps<{
    icon: IconProps["icon"],
    text: string
    to: string
}>()
</script>

<template>
    <div class="title">
        <Icon :icon="icon"/>
        <router-link class="link" :to="to">{{ text }}</router-link>
    </div>
</template>

<style scoped lang="scss">
.title {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>
