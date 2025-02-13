
import type { Genre, Genres } from '../interfaces'
import { paths } from '../utils/constants'
import useAxios from './useAxios'

export const getMovieGenres = async (): Promise<Genre[] | void> => {
    try {
        const { data } = await useAxios<Genres>({
            url: 'genre/' + 'movie/' + 'list',
        })
        const { genres } = data
        const genresData = genres.map(item => {
            return {
                id: item.id,
                name: item.name,
            } as Genre
        })
        return genresData
    } catch (error: any) {
        console.error(error)
    }
}

export const getTVGenres = async (): Promise<Genre[] | void> => {
    try {
        const { data } = await useAxios<Genres>({
            url: 'genre/' + 'movie/' + 'list',
        })
        const { genres } = data
        const genresData = genres.map(item => {
            return {
                id: item.id,
                name: item.name,
            } as Genre
        })
        return genresData
    } catch (error: any) {
        console.error(error)
    }
}

export const getAllGenres = async (): Promise<Set<Genre> | void> => {
    try {
        const movieGenres = await getMovieGenres()
        const tvGenres = await getTVGenres()
        const genreSet = new Set<Genre>()
        if (movieGenres && tvGenres) {
            const genresMap = [...movieGenres, ...tvGenres].reduce((acc, genre) => {
              acc[genre.id] = genre;
              return acc;
            }, {} as Record<number, Genre>);
            Object.values(genresMap).forEach(genre => genreSet.add(genre))
          }
        return genreSet
    } catch (error: any) {
        console.error(error)
    }
}