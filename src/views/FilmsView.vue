<template>
    <div class="fav">
      <SearchBar :items="films" @update:filteredItems="updateItems" />
      <FilterBar :uniqueFilters="uniqueGenres"/>
      <PageCounter 
        
        :current-page="pageRef" 
        :total_pages="filmsStore.total_pages" 
        @update:current-page="updatePage"
      />

      <div class="categories">
        <ChooseCategory 
          v-for="category in MOVIE_LISTS" 
          @click="handleButtonClick" 
          :text="category" 
          :isToggled="toggledName === category" 
        />
      </div>
      <ItemList :items="filteredItems" />
    </div>
  </template>
  
  <script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ChooseCategory from '../components/ChooseCategory/ChooseCategory.vue';
import ItemList from '../components/ItemList.vue';
import PageCounter from '../components/PageCounter.vue';
import FilterBar from '../components/shared/FilterBar/FilterBar.vue';
import SearchBar from '../components/shared/SearchBar/SearchBar.vue';
import { useUniqueGenres } from '../composables/useUniqueGenres';
import type { ItemData } from '../interfaces';
import { useGenres } from '../stores/genre';
import { useFilmsStore } from '../stores/pages/films';
import { MOVIE_LISTS, MOVIE_LISTS_API } from '../utils/constants';

const filteredItems = ref<ItemData[]>([]);
const toggledName = ref('Now playing');
const pageRef = ref(1)
const route = useRoute();
const category = (route.params.category as MOVIE_LISTS) || 'nowPlaying';
const page = Number(route.params.page) || 1;

const genresStore = useGenres();
genresStore.fetchAllGenres();

const filmsStore = useFilmsStore();
filmsStore.fetchFilms(category, page);

const films = computed(() => {
  return [...filmsStore[toggledName.value as MOVIE_LISTS]];
});


watch(films, newFilms => {
  filteredItems.value = [...newFilms];
}, { immediate: true });

const updateItems = (newItems: ItemData[] | ItemData) => {
  filteredItems.value = Array.isArray(newItems) ? newItems : [newItems];
};

const { uniqueGenres } = useUniqueGenres(filteredItems, computed(() => Array.from(genresStore.genres)));

const handleButtonClick = async (selectedCategory: keyof typeof MOVIE_LISTS_API) => {
  await filmsStore.fetchFilms(selectedCategory, page);
  filteredItems.value = [...filmsStore[selectedCategory]];
  toggledName.value = selectedCategory;
};

const updatePage = (newPage: number) => {
  pageRef.value = newPage;
};
</script>
  
  <style scoped lang="scss">
  .fav {
      text-align: center;
      padding-left: 16rem;
  
      .categories {
        display: inline;
        gap: 2rem;
        
        button{
          margin-inline: 1rem;
        }
      }
  }
  </style>
  