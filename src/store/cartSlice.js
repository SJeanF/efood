import { createSlice } from '@reduxjs/toolkit'

let nextCartId = 1

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isOpen: false,
  },
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload)
      },
      // cada adição vira uma linha própria no carrinho (cartId único)
      prepare: (dish) => ({
        payload: {
          cartId: nextCartId++,
          id: dish.id,
          title: dish.title,
          image: dish.image,
          price: Number(dish.price),
        },
      }),
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.cartId !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
  },
})

export const { addItem, removeItem, openCart, closeCart } = cartSlice.actions

// valor total = soma do preço dos produtos (em centavos, evita erro de ponto flutuante)
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + Math.round(item.price * 100), 0) / 100

export default cartSlice.reducer
