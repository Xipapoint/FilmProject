<template>
  <div class="pagination">
    <button 
      :disabled="currentPage === 1" 
@click="() => { console.log('Prev clicked'); changePage(props.currentPage - 1); }"
    >
      Previous
    </button>
    
    <span>{{ currentPage }}</span>
    
    <button 
      :disabled="currentPage === props.total_pages" 
@click="() => { console.log('Prev clicked'); changePage(props.currentPage + 1); }"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ total_pages: number; currentPage: number }>();

const emit = defineEmits<{ (e: 'update:currentPage', page: number): void }>();

const changePage = (page: number) => {
  if (page >= 1 && page <= props.total_pages) {
    emit('update:currentPage', page);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 3rem;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
