<template>
    <button :class="['heart-btn', sizeClass, customClass]" @click="toggleFavorite">
      <Icon
        :icon="isFavorite ? 'mdi:heart' : 'mdi:heart-outline'"
        :width="String(iconSize)"
        :height="String(iconSize)"
        class="heart-icon"
      />
    </button>
  </template>
  
  <script setup lang="ts">
  import { computed, type PropType } from 'vue';
import type { FavouriteData } from '../../interfaces';
import { useFavourite } from '../../stores/pages/favourites';
import Icon from '../shared/Icon.vue';

  const props = defineProps({
    size: {
        type: String,
        default: 'large',
        validator: (value: string) => ['small', 'large'].includes(value),
    },
    item: {
        type: Object as PropType<FavouriteData>,
        required: true,
    },
    customClass: {
        type: String,
        default: '',
    },
  });
  
  const favouriteStore = useFavourite()
  const isFavorite = computed(() => favouriteStore.isExists(props.item.id));
  const toggleFavorite = () => {
    console.log(isFavorite.value);
    
    favouriteStore.toggleFavourite(props.item)
  };
  
  const sizeClass = computed(() => (props.size === 'small' ? 'small' : 'large'));
  const iconSize = computed(() => (props.size === 'small' ? 24 : 30));


  </script>
  
  <style scoped>
  .heart-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #f5f5f5, #e0e0e0);
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .heart-btn:hover {
    background: linear-gradient(to bottom, #e0e0e0, #d0d0d0);
  }
  
  .heart-icon {
    color: #5c00d1;
    transition: 0.2s;
  }
  
  /* Размеры */
  .large {
    width: 50px;
    height: 50px;
  }
  
  .small {
    width: 36px;
    height: 36px;
  }
  </style>
  