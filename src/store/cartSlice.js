import { createSlice } from '@reduxjs/toolkit'

const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    isLoading: false
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const hasItem = state.cart.find(item => item.id === payload.id)

      if (hasItem) hasItem.quantity++
      else state.cart = [...state.cart, payload]

      state.totalItems = state.cart.length
      state.totalPrice = state.cart.reduce((acc, curr) => acc + curr.price, 0)
    },
    removeFromCart: (state, { payload }) => {
      const filteredCart = state.cart.filter(item => item.id !== payload.id)

      if (state.cart.length > 0) {
        state.cart = filteredCart
        state.totalItems = state.cart.length
        state.totalPrice = state.cart.reduce((acc, curr) => acc + curr.price, 0)
      }
    },
    updateCard: (state, { payload }) => {
      const filteredItem = state.cart.find(item => item.id === payload.item.id)

      if (filteredItem) filteredItem.quantity = payload.quantity
    }
  }
})

export const { addToCart, removeFromCart, updateCard } = cardSlice.actions

export default cardSlice.reducer
