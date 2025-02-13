import { defineStore } from "pinia";
import type { FavouriteData } from "../../interfaces";


export const useFavourite = defineStore("favourite", {
  state: () => ({
    favourites: [] as FavouriteData[]
  }),
  actions: {
    setFavourite(item: FavouriteData) {
        this.favourites.push(item)
    },
    removeFavourite(id: number){
        this.favourites = this.favourites.filter(item => item.id !== id)
    },
    toggleFavourite(item: FavouriteData){
        const favourite = this.favourites.find(fav => fav.id === item.id)
        if(!favourite) this.setFavourite(item) 
        else this.removeFavourite(item.id)
    },
    isExists(id: number){
        return this.favourites.some(item => item.id === id)
    },
    resetAll() {
      this.$reset();
    }
  },
  getters: {

  },
  persist: true
});