<template>
    <div class="fav">
        <SearchBar :items="trendings" @update:filteredItems="updateItems" />
        <FilterBar :uniqueFilters="uniqueGenres"/>
        <div class="categories">
          <ChooseCategory  v-for="category in TRENDING_DAYS" @click="handleButtonClick" :text="category" :isToggled="toggledName === category" />
        </div>
        <ItemList :items="filteredItems" />
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import ChooseCategory from '../components/ChooseCategory/ChooseCategory.vue';
import ItemList from '../components/ItemList.vue';
import FilterBar from '../components/shared/FilterBar/FilterBar.vue';
import SearchBar from '../components/shared/SearchBar/SearchBar.vue';
import type { ItemData } from '../interfaces';
import { useTrending } from '../stores/pages/trending';
import { TRENDING_DAYS, TRENDING_DAYS_API } from '../utils/constants';
import { updatePageTitle } from '../utils/updatePageTitle';
import { useGenres } from '../stores/genre';
import { useUniqueGenres } from '../composables/useUniqueGenres';

const filteredItems = ref<ItemData[]>([]);
const toggledName = ref('Day')

const genresStore = useGenres()
genresStore.fetchAllGenres()
const trendingsStore = useTrending()
const trendings = trendingsStore.trending;

watch(trendings, (newTrendings) => {
  filteredItems.value = [...newTrendings];
}, { immediate: true });

const updateItems = (newItems: ItemData[] | ItemData) => {
  filteredItems.value = Array.isArray(newItems) ? newItems : [newItems];
};

const { uniqueGenres } = useUniqueGenres(filteredItems, computed(() => Array.from(genresStore.genres)));


const handleButtonClick = async (day: keyof typeof TRENDING_DAYS_API) => {
  const trendingDay = TRENDING_DAYS_API[day]
  trendingsStore.fetchTrendingsByDay(trendingDay)
  console.log(trendings);
  
  filteredItems.value = trendings
  toggledName.value = day
};


onMounted(() => {
  updatePageTitle('Trending');
});

onUnmounted(() => {
    useTrending().resetAll()
})

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
