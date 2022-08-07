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
      state.cart = [...state.cart, payload]
    },
    removeFromCart: (state, { payload }) => {}
  }
})

export const { addToCart, removeFromCart } = cardSlice.actions

export default cardSlice.reducer
