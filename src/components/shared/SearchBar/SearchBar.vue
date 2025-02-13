<template>
    <input 
      v-model="searchQuery" 
      @input="emitSearch" 
      type="text" 
      placeholder="Поиск по названию..." 
      class="search-bar"
    />
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    items: Array
  });
  
  const emit = defineEmits(['update:filteredItems']);
  
  const searchQuery = ref('');
  
  watch([searchQuery, () => props.items], () => {
  const filtered = props.items.filter(item =>
    item.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  emit('update:filteredItems', filtered);
}, { immediate: true });
  </script>
  
  
  
  <style scoped>
  .search-bar {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  