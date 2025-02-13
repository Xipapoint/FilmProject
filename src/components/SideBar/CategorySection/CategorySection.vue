<template>
    <SideBarSection>
        <TitleSectionWithIcon 
            icon="material-symbols:home-outline-rounded" 
            text="Home"
            to="/"
        />
        <TitleSectionWithIcon 
            icon="material-symbols:trending-up-rounded" 
            text="Trending" 
            to="/trendings"
        />
        <TitleSectionWithIcon 
            icon="material-symbols:favorite-outline-rounded" 
            text="Favourites" 
            to="/favourites"
        />
    </SideBarSection>
</template>

<script setup>
import SideBarSection from '../../shared/SideBarSection/SideBarSection.vue';
import TitleSectionWithIcon from '../../shared/TitleSection/TitleSectionWithIcon.vue';
</script>

<style scoped>

</style>
