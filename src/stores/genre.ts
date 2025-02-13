import { defineStore } from "pinia";
import type { Genre } from "../interfaces";
import { getMovieGenres, getTVGenres } from "../requests/genres";

export const useGenres = defineStore("poster", {
  state: () => ({
    genres: new Set<Genre>()
  }),
  actions: {
    async fetchMovieGenres() {
      const data = await getMovieGenres();
      if (data) {
        data.forEach(genre => this.genres.add(genre))
      }
    },
    async fetchTVGenres() {
      const data = await getTVGenres();
      if (data) {
        data.forEach(genre => this.genres.add(genre))
      }
    },
    async fetchAllGenres(){
      const tvGenres = await getTVGenres();
      const movieGenres = await getMovieGenres();
      if (movieGenres && tvGenres) {
        const genresMap = [...movieGenres, ...tvGenres].reduce((acc, genre) => {
          acc[genre.id] = genre;
          return acc;
        }, {} as Record<number, Genre>);
        Object.values(genresMap).forEach(genre => this.genres.add(genre))
      }
    },
    setGenres(genres: Set<Genre>){
      this.genres = genres
    },

    resetAll() {
      this.$reset();
    }
  }
});