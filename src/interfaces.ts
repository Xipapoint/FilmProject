export interface FetchProps {
    url: string
    props?: {}
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers?: {}
    params?: Record<string, string>;
}

export interface FilmDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface FilmPoster extends ItemData {
    fullPath: string; 
    title: string; 
    vote_average: number
    release_date: string
    firstGenre: string
}

interface Image {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}

export interface FilmImages {
    backdrops: Image[];
    id: number;
    logos: Image[];
    posters: Image[];
}

export interface TrendingItem {
    adult: boolean; 
    backdrop_path: string;
    id: number; 
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number; 
    release_date: string;
    video: boolean; 
    vote_average: number; 
    vote_count: number; 
}

export interface Trending {
    page: number; 
    results: TrendingItem[];
    total_pages: number; 
    total_results: number; 
}

export interface ItemData {
    id: number
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    genres: string[]
    genre_ids: number[];
    total_pages: number
}

export interface TrendingData extends ItemData {
}

export interface FavouriteData extends ItemData {

}

export interface Genre {
    id: number
    name: string
}

export interface Genres {
    genres: Genre[]
}

export interface NowPlayingFilms {
    dates: {
      maximum: string;
      minimum: string;
    };
    page: number; 
    results: Film[];
    total_pages: number; 
    total_results: number; 
  }
  
export interface Film {
    adult: boolean; 
    backdrop_path: string;
    genre_ids: number[];
    id: number; 
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number; 
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean; 
    vote_average: number; 
    vote_count: number; 
  }
  