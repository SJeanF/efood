import axios from 'axios'

export const ebacApi = axios.create({
  baseURL: "https://api-ebac.vercel.app/api/efood/restaurantes",
  timeout: 5000,
})

export const checkoutApi = axios.create({
  baseURL: "https://api-ebac.vercel.app/api/efood",
  timeout: 10000,
})

export const postCheckout = (order) => checkoutApi.post('/checkout', order)
