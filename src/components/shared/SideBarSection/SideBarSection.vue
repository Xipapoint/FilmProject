<template>
    <section class="section">
        <slot></slot>
    </section>
</template>

<script setup>
import TitleSectionWithIcon from '../../shared/TitleSection/TitleSectionWithIcon.vue';
</script>

<style scoped>
    .section {
        display: flex;
        flex-direction: column;
        background-color: inherit;
        margin-left: 2.5rem;
        gap: 20px;
    }
</style>
