<template>
    <div>
        <p class="title" :style="titleStyle">{{ title }}</p>
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    title: string
    titleStyle: Record<string, string>
}>()

</script>

<style scoped lang="scss">
    .title{
        margin: 0;
        font-size: 18px;
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        width: fit-content;
    }

</style>