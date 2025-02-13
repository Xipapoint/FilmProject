import { computed, type Ref } from 'vue';
import type { ItemData } from '../interfaces';


export function useUniqueGenres(items: Ref<ItemData[]>, genres: Ref<{ name: string }[]>) {
  const uniqueGenres = computed(() => {
    const genreSet = new Set<string>();

    genres.value.forEach((genre) => genreSet.add(genre.name));

    items.value.forEach((item) => {
      item.genres?.forEach((genre) => {
        if (typeof genre === 'string') genreSet.add(genre);
      });
    });

    return Array.from(genreSet);
  });

  return { uniqueGenres };
}
