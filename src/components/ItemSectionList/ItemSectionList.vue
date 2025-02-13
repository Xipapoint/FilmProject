<template>
    <TitleSection :title="title" :title-style="{padding: '3rem 3rem 1rem 3rem'}" />
    <div class="items-container" v-bind="containerProps">
      <div class="scroller" v-bind="wrapperProps">
        <ItemCard 
            v-for="item in list" 
            :key="item.data.id" 
            :item="item.data"
        />
      </div>
    </div>
</template>
  
<script lang="ts" setup>
    import { useVirtualList } from "@vueuse/core";
import { ref } from "vue";
import type { ItemData } from "../../interfaces";

import ItemCard from "../FilmCard/ItemCard.vue";
import TitleSection from "../shared/TitleSection/TitleSection.vue";
    const props = defineProps<{
        title: string
        items: ItemData[]
    }>()
    const items = ref(props.items);
    const itemWidth = 220;

    const { list, containerProps, wrapperProps } = useVirtualList(items.value, {
        itemWidth,
        overscan: 2,
    });

</script>
  
  
<style scoped lang="scss">
  .titleClass{
    padding: 3rem 3rem 1rem 3rem;
  }
  .items-container {
    width: 100%;
    overflow-x: visible;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 20px 3rem;
    scrollbar-width: none;
    .scroller {
        display: flex;
        position: relative;
        gap: 2.5rem;
    }
  }


  </style>
  