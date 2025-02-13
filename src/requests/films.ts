
import type { FilmDetails, FilmImages, FilmPoster } from '../interfaces';
import { paths } from '../utils/constants';
import { getRandomFilmId } from '../utils/getRandomFilmId';
import useAxios from './useAxios';
import type { ItemData, NowPlayingFilms, TrendingData } from '../interfaces';

const getMaxAspectRatioImage = (images: { aspect_ratio: number; file_path: string }[]) =>
    images.reduce((max, img) => (img.aspect_ratio > max.aspect_ratio ? img : max), images[0]);

export async function getRandomFilmPoster(): Promise<FilmPoster> {
    try {
        const id = getRandomFilmId().toString()
        const {data: movieDetailsData} = await useAxios<FilmDetails>({
            url: paths.movieBaseUrl + '/' + id,
        })
        const {title, vote_average, release_date, genres} = movieDetailsData
        const {data: images} = await useAxios<FilmImages>({
            url: paths.movieBaseUrl + '/' + id + '/images',
        })
        
          const maxPoster = getMaxAspectRatioImage(images.posters);
          const maxBackdrop = getMaxAspectRatioImage(images.backdrops);

          const maxImage = [maxPoster, maxBackdrop]
            .filter(Boolean)
            .reduce((max, img) => (img!.aspect_ratio > max!.aspect_ratio ? img : max), maxPoster)!;

          const fullPath = paths.imageBaseUrl + maxImage.file_path
          const date = release_date.slice(0, 4)
        return {fullPath, release_date: date, title, firstGenre: genres[0].name, vote_average, id: 0, poster_path: '', genres: [], genre_ids: [], total_pages: 0} 
    } catch (error: any) {
        console.log("error");
        
        if(error.response?.status === 404) return getRandomFilmPoster()
        console.error(error)
        return {fullPath: '', release_date: '', title: '', firstGenre: '', vote_average: -1, id: 0, poster_path: '', genres: [], genre_ids: [], total_pages: 0}
    }
}

export const getHarryPotterPoster = async (): Promise<FilmPoster> => {
    try {
        const id = "675"
        const {data: movieDetailsData} = await useAxios<FilmDetails>({
            url: paths.movieBaseUrl + '/' + id,
        })
        const {title, vote_average, release_date, genres} = movieDetailsData
        const date = release_date.slice(0, 4)
        return {fullPath: '/harry_potter.png', release_date: date, firstGenre: genres[0].name, title, vote_average, id: 0, poster_path: '', genres: [], genre_ids: [], total_pages: 0} 
    } catch (error: any) {
        console.log("error");
        
        if(error.response?.status === 404) return getRandomFilmPoster()
        console.error(error)
        return {fullPath: '', release_date: '', title: '', firstGenre: '', vote_average: -1, id: 0, poster_path: '', genres: [], genre_ids: [], total_pages: 0}
    }
}

type TotalPages = {
    total_pages: number
}

export const getNowPlayingFilms = async (page: number): Promise<ItemData[] & TotalPages | void> => {
    try {
        const { data } = await useAxios<NowPlayingFilms>({
            url: paths.movieBaseUrl + '/now_playing',
            params: {page: String(page)}
        })
        const { results, total_pages } = data
        const filmsData = results.map(item => {
            return {
                id: item.id,
                title: item.title,
                poster_path: paths.imageBaseUrl + item.poster_path,
                release_date: item.release_date?.slice(0, 4) || '',
                vote_average: item.vote_average,
                genre_ids: item.genre_ids,
                total_pages
            } as ItemData
        })
        return Object.assign(filmsData, { total_pages })
    } catch (error: any) {
        console.error(error)
    }
}


export const getPopularFilms = async (page: number): Promise<ItemData[] | void> => {
    try {
        const { data } = await useAxios<NowPlayingFilms>({
            url: `${paths.movieBaseUrl}/popular`,
            params: { page: String(page) }
        })
        const { results, total_pages } = data
        const filmsData = results.map(item => {
            return {
                id: item.id,
                title: item.title,
                poster_path: paths.imageBaseUrl + item.poster_path,
                release_date: item.release_date?.slice(0, 4) || '',
                vote_average: item.vote_average,
                genre_ids: item.genre_ids,
                total_pages
            } as ItemData
        })
        return Object.assign(filmsData, { total_pages })
    } catch (error: any) {
        console.error(error)
    }
}

export const getTopRatedFilms = async (page: number): Promise<ItemData[] | void> => {
    try {
        const { data } = await useAxios<NowPlayingFilms>({
            url: `${paths.movieBaseUrl}/top_rated`,
            params: { page: String(page) }
        })
        const { results, total_pages } = data
        const filmsData = results.map(item => {
            return {
                id: item.id,
                title: item.title,
                poster_path: paths.imageBaseUrl + item.poster_path,
                release_date: item.release_date?.slice(0, 4) || '',
                vote_average: item.vote_average,
                genre_ids: item.genre_ids,
                total_pages
            } as ItemData
        })
        return Object.assign(filmsData, { total_pages })
    } catch (error: any) {
        console.error(error)
    }
}

export const getUpcomingFilms = async (page: number): Promise<ItemData[] | void> => {
    try {
        const { data } = await useAxios<NowPlayingFilms>({
            url: `${paths.movieBaseUrl}/upcoming`,
            params: { page: String(page) }
        })
        const { results, total_pages } = data
        const filmsData = results.map(item => {
            return {
                id: item.id,
                title: item.title,
                poster_path: paths.imageBaseUrl + item.poster_path,
                release_date: item.release_date?.slice(0, 4) || '',
                vote_average: item.vote_average,
                genre_ids: item.genre_ids,
                total_pages
            } as ItemData
        })
        return Object.assign(filmsData, { total_pages })
    } catch (error: any) {
        console.error(error)
    }
}