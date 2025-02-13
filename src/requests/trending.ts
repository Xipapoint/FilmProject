
import type { Trending, TrendingData } from '../interfaces'
import { paths } from '../utils/constants'
import useAxios from './useAxios'

export const getAllTrendings = async (): Promise<TrendingData[] | void> => {
    try {
        const { data } = await useAxios<Trending>({
            url: 'trending/' + 'all/' + 'week',
        })
        const { results } = data
        const trendingData = results.map(item => {
            return {
                id: item.id,
                title: item.title,
                poster_path: paths.imageBaseUrl + item.poster_path,
                release_date: item.release_date?.slice(0, 4) || '',
                vote_average: item.vote_average,
                genre_ids: item.genre_ids
            } as TrendingData
        })
        return trendingData
    } catch (error: any) {
        console.error(error)
    }
}

export const getTrendingsByDay = async (day: string) => {
    try {
        const { data } = await useAxios<Trending>({
            url: 'trending/' + 'all/' + day,
        })
        const { results } = data
        const trendingData = results.map(item => {
            return {
                id: item.id,
                title: item.title,
                poster_path: paths.imageBaseUrl + item.poster_path,
                release_date: item.release_date?.slice(0, 4) || '',
                vote_average: item.vote_average,
                genre_ids: item.genre_ids
            } as TrendingData
        })
        return trendingData
    } catch (error: any) {
        console.error(error)
    }
}
