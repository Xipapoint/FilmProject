<template>
    <div class="home">
        <Poster/>
        <ItemSectionList title="Trending" :items="trendings"/>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import {updatePageTitle} from '../utils/updatePageTitle';
import Poster from '../components/Main/Poster/Poster.vue'
import { useTrending } from '../stores/pages/trending';
import ItemSectionList from '../components/ItemSectionList/ItemSectionList.vue';
const trendings = useTrending().trending

  
onMounted(() => {
    updatePageTitle('Home')
})

onUnmounted(() => {
    useTrending().resetAll()
})

</script>

<style scoped>
.home {
    text-align: center;
    padding-left: 16rem;
    
}
</style>