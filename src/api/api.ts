import axios from "axios";


// в рамках тестового задания ключ api захардкожен.
// для безопасности такие данные должны быть в переменных окружения (env)
const api = axios.create({
    baseURL: "https://api.thecatapi.com/v1/images",
    headers: {
        "x-api-key": "live_s5Z0ubNlV2ovKTfOABMa0OpSFN5xGWqPyKe4D4J8B9DWJj3ZrZK1g3H1S9jzvied"
    }
})

export const getCats = async (limit: number, page: number) => {
    const res = await api.get("/search", {params: {limit, page}})
    return res.data
}

