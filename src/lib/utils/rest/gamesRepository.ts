import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { IGame } from '../../../types/Games';

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

export const postGames = async (game: IGame) => {
    try {
        const result = await axios.post(BASE_URL, game)
        return result.data
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.response?.data as string)
    }
}

export const putGames = async (game: IGame) => {
    try {
        const result = await axios.put(BASE_URL, game)
        return result.data
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.response?.data as string)
    }
}

export const deleteGames = async (gameId: number) => {
    try {
        const result = await axios.delete(BASE_URL + "/" + gameId)
        return result.data
    } catch (error: any) {
        const e: AxiosError = error
        throw new Error(e.response?.data as string)
    }
}