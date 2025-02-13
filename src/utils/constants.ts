export const CONSTANTS = {
    totalMovies: 972713,
}

export const paths = {
    movieBaseUrl: "/movie",
    imageBaseUrl: "https://image.tmdb.org/t/p/w500"
}

export enum MOVIE_LISTS {
    NOW_PLAYING = "Now playing",
    POPULAR = "Popular",
    TOP_RATED = "Top rated",
    UPCOMING = "Upcoming"
}

export const MOVIE_LISTS_API: Record<MOVIE_LISTS, string> = {
    [MOVIE_LISTS.NOW_PLAYING]: "now_playing",
    [MOVIE_LISTS.POPULAR]: "popular",
    [MOVIE_LISTS.TOP_RATED]: "top_rated",
    [MOVIE_LISTS.UPCOMING]: "upcoming"
} as const;


export enum TRENDING_DAYS {
    DAY = 'Day',
    WEEK = 'Week'
}

export const TRENDING_DAYS_API: Record<TRENDING_DAYS, string> = {
    [TRENDING_DAYS.DAY]: "day",
    [TRENDING_DAYS.WEEK]: "week"
};
