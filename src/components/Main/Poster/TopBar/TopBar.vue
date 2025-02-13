<script setup lang="ts">
import SearchBar from './SearchBar.vue';
import UserInfo from './UserInfo.vue';
defineProps<{
    classname: string
}>();
</script>

<template>
    <div :class="['bar', classname]">
        <SearchBar/>
        <UserInfo/>
    </div>
</template>

<style scoped lang="scss">
    .bar{
        display: flex;
        align-items: center;
        gap: 3rem;
        color: white;
        margin-top: 1rem;
    }
</style>