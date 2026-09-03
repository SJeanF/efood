import axios from 'axios'

export const ebacApi = axios.create({
  baseURL: "https://api-ebac.vercel.app/api/efood/restaurantes",
  timeout: 5000,
})