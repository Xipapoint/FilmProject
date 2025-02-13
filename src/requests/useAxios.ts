
import axios from 'axios'

import useLoaderStore from '../stores/loader'
import type { FetchProps } from '../interfaces'

export function getBaseUrl() {
    const base_url = "https://api.themoviedb.org/3/"
    return base_url
}

axios.defaults.baseURL = getBaseUrl()

interface CustomResponse<T>{
    data: T, status: number
}


export default async <T>(args: FetchProps, withCredentials: boolean = false): Promise<CustomResponse<T>> => {
    const { startLoading, stopLoading } = useLoaderStore()
    startLoading()
        const res = await axios({
            url: args.url,
            data: args.props,
            method: args.method || 'GET',
            params: args.params,
            headers: { 
                ...args.headers,
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTdjOWY3OGJmNGIzZGZmZmRkNmU4MWRmNzI1ZTcxNSIsIm5iZiI6MTczOTIyODE0Ny42NTYsInN1YiI6IjY3YWE4M2YzOWQzNDZkM2VmNDliOGEwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.waINXumZI4_Hqrc3MVbpbUC02WIvCy2BxDmv6RfhXW0'
            },
            withCredentials: withCredentials,
        })

        stopLoading()
        return {
            data: res.data,
            status: res.status,
        }
}
