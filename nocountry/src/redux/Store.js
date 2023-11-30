import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import ProductReducer from './ProductSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    product: ProductReducer,
  },
})
export default store
