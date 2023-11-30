import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.productID !== action.payload
      )
    },
  },
})

export const { setProducts, deleteProduct } = ProductsSlice.actions
export default ProductsSlice.reducer
