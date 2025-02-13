import { createRouter, createWebHashHistory, type RouterOptions } from 'vue-router';
import state from '../composables/state';
import { useFilmsStore } from '../stores/pages/films';
import { useTrending } from '../stores/pages/trending';
import { useFilmPoster } from '../stores/poster';
import FavouritesView from '../views/FavouritesView.vue';
import FilmsView from '../views/FilmsView.vue';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import TrendingView from '../views/TrendingView.vue';

const Home = {
    path: "/",
    name: "Home",
    component: HomeView,
    beforeEnter: async () => {
        state.loading.value = true;
        const posterStore = useFilmPoster();
        const trendingStore = useTrending()
        
        await posterStore.fetchHarryPotterPoster(); 
        await trendingStore.fetchAllTrendings()
        state.loading.value = false;
    }
};

const Register = {
    path: "/register",
    name: "Registration",
    component: RegisterView,
};

const Favourites = {
    path: "/favourites",
    name: "Favourites",
    component: FavouritesView,
};

const Trending = {
    path: "/trendings",
    name: "Trendings",
    component: TrendingView,
    beforeEnter: async () => {
        const trendingStore = useTrending();
        await trendingStore.fetchAllTrendings();
    }
};

const Films = {
    path: "/films/:category/:page",
    name: "Films",
    component: FilmsView,
    beforeEnter: async (to, from, next) => {
      const page = Number(to.params.page) || 1;
      const filmsStore = useFilmsStore();
      await filmsStore.initialFetch(page);
      console.log(filmsStore['Now playing']);
      next(); 
    }
  };
  
//   const TVShows = {
//     path: "/tvshows/:page?",
//     name: "TVShows",
//     component: TVShowsView,
//     beforeEnter: async (to, from, next) => {
//       const page = Number(to.params.page) || 1;
//       const tvStore = useTVShows();
//       await tvStore.fetchAllTVShows(page);
//       next();
//     }
//   };
  


const routes = [
    Home,
    Register,
    Favourites,
    Trending,
    Films,
    // TVShows
];
  
const router = createRouter({
    mode: "hash",
    history: createWebHashHistory(),
    routes,
  } as RouterOptions);

export { router };
