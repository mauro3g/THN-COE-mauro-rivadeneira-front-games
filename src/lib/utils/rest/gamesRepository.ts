import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const BASE_URL = "https://localhost:7176/api/game"

export const getGames = async () => {
    try {
        const result = await axios.get(BASE_URL)
        return result.data
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.response?.data as string)
    }
}