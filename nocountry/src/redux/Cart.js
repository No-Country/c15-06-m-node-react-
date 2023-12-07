import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const ProductsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.cart = action.payload
    },
    deleteProduct: (state, action) => {
      state.products = state.cart.filter(
        product => product._id !== action.payload
      )
    },
  },
})

export const { setProducts, deleteProduct } = ProductsSlice.actions
export default ProductsSlice.reducer
