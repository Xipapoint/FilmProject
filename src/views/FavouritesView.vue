<template>
    <div class="fav">
        <SearchBar :items="favourites" @update:filteredItems="updateItems" />
        <FilterBar :uniqueFilters="uniqueGenres"/>
        <ItemList :items="filteredItems" />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import ItemList from '../components/ItemList.vue';
import SearchBar from '../components/shared/SearchBar/SearchBar.vue';
import type { ItemData } from '../interfaces';
import { useFavourite } from '../stores/pages/favourites';
import { updatePageTitle } from '../utils/updatePageTitle';
import FilterBar from '../components/shared/FilterBar/FilterBar.vue';
import { useGenres } from '../stores/genre';
import { useUniqueGenres } from '../composables/useUniqueGenres';

const genresStore = useGenres()
genresStore.fetchAllGenres()

const favourites = useFavourite().favourites;
const filteredItems = ref<ItemData[]>([]);

watch(favourites, (newFavourites) => {
  filteredItems.value = [...newFavourites];
}, { immediate: true });

const updateItems = (newItems: ItemData[] | ItemData) => {
  filteredItems.value = Array.isArray(newItems) ? newItems : [newItems];

};

const { uniqueGenres } = useUniqueGenres(filteredItems, computed(() => Array.from(genresStore.genres)));


onMounted(() => {
  updatePageTitle('Favourites');
});

onUnmounted(() => {
    useFavourite().resetAll()
})

</script>

<style scoped>
.fav {
    text-align: center;
    padding-left: 16rem;
}
</style>
