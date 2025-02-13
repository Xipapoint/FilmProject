import { defineStore } from "pinia";
import type { FilmPoster } from "../interfaces";
import { getHarryPotterPoster, getRandomFilmPoster } from "../requests/films";

export const useFilmPoster = defineStore("poster", {
  state: () => ({
    fullPath: '',
    title: '',
    vote_average: 0,
    release_date: '',
    firstGenre: '',
  } as FilmPoster),
  actions: {
    async fetchPoster(){
        const data = await getRandomFilmPoster();
        this.$state = data

    },
    async fetchHarryPotterPoster(){
      const data = await getHarryPotterPoster();
      this.$state = data
  },
  resetAll() {
    this.$reset();
  }
  },
});