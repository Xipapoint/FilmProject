<template>
    <SideBarSection>
        <TitleSectionWithIcon 
            icon="material-symbols:movie" 
            text="Films"
            to="/films/now_playing/1"
        />
        <TitleSectionWithIcon 
            icon="material-symbols:movie" 
            text="TV Shows" 
            to="/trendings"
        />
    </SideBarSection>
</template>

<script setup>
import SideBarSection from '../../shared/SideBarSection/SideBarSection.vue';
import TitleSectionWithIcon from '../../shared/TitleSection/TitleSectionWithIcon.vue';
</script>

<style scoped>

</style>
