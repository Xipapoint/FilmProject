<template>
    <div 
      class="item" 
      :class="{ expanded: isHovered }"
    >
      <p v-if="title" class="title">{{ title }}</p>
      <p>{{ date }}</p>
      <p>{{ vote_average }} rating</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  interface ItemData {
    id: number
    title?: string
    release_date: string;
    vote_average: number;
    isHovered: boolean;
  }
  
  const props = defineProps<ItemData>();
  const date = ref(props.release_date);
  </script>
  
  <style scoped lang="scss">
  .item {
    width: 11rem;
    position: absolute;
    max-height: 0;
    overflow: hidden;
    text-wrap: wrap;
    background-color: #42413f;
    bottom: 0;
    transition: max-height 0.3s ease;
  }
  
  .expanded {
    max-height: 10rem;
  }
  </style>
  