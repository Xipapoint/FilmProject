<template>
    <div 
      class="item-card"
      @mouseenter="hoveredCard = item.id"
      @mouseleave="hoveredCard = null"
    >
      <img :src="item.poster_path" :alt="item.title" class="image" />
      <HeartButton :customClass="'heart'" size="small" :item="item" />
        <FilmInfo 
            :id="item.id"
            :title="item.title" 
            :release_date="item.release_date" 
            :vote_average="item.vote_average"
            :isHovered="hoveredCard === item.id"
        />
    </div>
  </template>
  
<script lang="ts" setup>
  import { ref } from "vue";
import type { ItemData } from "../../interfaces";
import FilmInfo from "./FilmInfo/FilmInfo.vue";
import HeartButton from "../HeartButton/HeartButton.vue";
  
  defineProps<{ item: ItemData }>();
  
  const hoveredCard = ref<number | null>(null);
  </script>
  
<style lang="scss">
    .item-card {
        width: 11rem;
        height: 15rem;
        color: white;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        cursor: pointer;

        .heart{
          margin: 0.5rem;
          position: absolute;
          top: 0
        }
    }


</style>