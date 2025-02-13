<template>
    <div class="filter-bar">
      <label for="genre">Жанр:</label>
      <select class="genre" id="genre" v-model="selectedGenre">
        <option value="">Все</option>
        <option v-for="genre in uniqueFilters" :key="genre" :value="genre">
          {{ genre }}
        </option>
      </select>
  
      <!-- <label for="rating">Рейтинг:</label>
      <input
        id="rating"
        type="number"
        v-model.number="minRating"
        min="0"
        max="10"
        step="0.1"
        class="genre"
      /> -->
  
      <button @click="applyFilter">Применить</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed, defineEmits, defineProps, ref } from 'vue';
  
  const props = defineProps<{ uniqueFilters: string[] }>();
  const emit = defineEmits<{
    (e: 'update:filteredItems', items: string[]): void;
  }>();
  
  const selectedGenre = ref<string | ''>('');
  // const minRating = ref<number>(0);
  
  
  
  const applyFilter = () => {
    let filtered = props.uniqueFilters;
  
    if (selectedGenre.value !== '') {
      filtered = filtered.filter((item) => item.includes(selectedGenre.value));
    }
  
    // if (minRating.value > 0) {
    //   filtered = filtered.filter((item) => item.vote_average >= minRating.value);
    // }
  
    emit('update:filteredItems', filtered);
  };
  </script>
  
  <style scoped lang="scss">
  .filter-bar {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    .genre{
      background-color: #2f2e2b;
      border: none;
      color: white;
      border-radius: 5px;
      padding: 0.5rem;
      margin: 0.5rem;
    }
  }
  </style>
  