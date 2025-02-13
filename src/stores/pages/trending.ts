import { defineStore } from "pinia";
import type { Genre, TrendingData } from "../../interfaces";
import { getAllGenres, getMovieGenres, getTVGenres } from "../../requests/genres";
import { getAllTrendings, getTrendingsByDay } from "../../requests/trending";
import { useGenres } from "../genre";


export const useTrending= defineStore("trending", {
  state: () => ({
    trending: [] as TrendingData[]
  }),
  actions: {
    async fetchAllTrendings() {
        const data = await getAllTrendings();
        const genres = await getAllGenres()
        if (data && genres) {
          const genreMap = new Map<number, string>();
          genres.forEach(({ id, name }) => genreMap.set(id, name));  
          
          this.trending = data.map(item => ({
            ...item,
            genres: item.genre_ids.map(id => genreMap.get(id) || "Unknown")
          }));

        }
      },

      async fetchTrendingsByDay(day: string){
        const data = await getTrendingsByDay(day);
        const movieGenres: Genre[] = (await getMovieGenres()) || [];
        const TVGenres: Genre[] = (await getTVGenres()) || [];
        
        const genresMap = [...movieGenres, ...TVGenres].reduce((acc, genre) => {
          acc[genre.id] = genre.name;
          return acc;
        }, {} as Record<number, string>);
  
        if (data) {
          this.trending = data.map(item => ({
            ...item,
            genres: item.genre_ids.map(id => genresMap[id] || "Unknown")
          }));
        }
      },

      resetAll() {
        this.$reset();
      }
  },
});