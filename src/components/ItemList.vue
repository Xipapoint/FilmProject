<template>
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
import { useVirtualList } from '@vueuse/core';
import type { ItemData } from '../interfaces';
import { computed, ref, watch } from 'vue';
import ItemCard from './FilmCard/ItemCard.vue';

    const props = defineProps<{
        items: ItemData[]
    }>()

    const items = computed(() => props.items);

    const itemWidth = 220
    const { list, containerProps, wrapperProps } = useVirtualList(items, {
        itemWidth,
        overscan: 2,
    });
</script>

<style scoped lang="scss">
    .items-container{
        width: 100%;
        overflow-x: visible;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 20px 3rem;
        scrollbar-width: none;
        
        .scroller{
            gap: 5rem;
            flex-wrap: wrap;
        }
    }
</style>