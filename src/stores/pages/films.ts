import { defineStore } from 'pinia';
import type { Genre, ItemData } from '../../interfaces';
import { getNowPlayingFilms, getPopularFilms, getTopRatedFilms, getUpcomingFilms } from '../../requests/films';
import { getAllGenres } from '../../requests/genres';
import type { MOVIE_LISTS, MOVIE_LISTS_API } from '../../utils/constants';

export const useFilmsStore = defineStore('films', {
  state: () => ({
    "Now playing": [] as ItemData[],
    Popular: [] as ItemData[],
    "Top rated": [] as ItemData[],
    Upcoming: [] as ItemData[],
    total_pages: 0
  } as Record<keyof typeof MOVIE_LISTS_API, ItemData[] | number>),
  actions: {
    async initialFetch(page: number){
        const genres = await getAllGenres();
        const data = await getNowPlayingFilms(page)
        if (data && genres) {
            const genreMap = new Map([...genres].map(({ id, name }: Genre) => [id, name]));
          
          this['Now playing'] = data.map((item: ItemData) => ({
            ...item,
            genres: item.genre_ids.map(id => genreMap.get(id) || 'Unknown')
          }));
        }
      },
    async fetchFilms(category: MOVIE_LISTS, page: number) {
        const fetchFunctions = {
          "Now playing": getNowPlayingFilms,
          Popular: getPopularFilms,
          "Top rated": getTopRatedFilms,
          Upcoming: getUpcomingFilms,
        };
        
        const data = await fetchFunctions[category](page);
        const genres = await getAllGenres();
        
        if (data && genres) {
            const genreMap = new Map([...genres].map(({ id, name }: Genre) => [id, name]));
          
          this[category] = data.map((item: ItemData) => ({
            ...item,
            genres: item.genre_ids.map(id => genreMap.get(id) || 'Unknown')
          }));
        }
      },

      resetAll() {
        this.$reset();
      }
  },
});
