import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './SearchSlice'
import UserReducer from './userSlice'
import CartSlice from './CartSlice'

const store = configureStore({
  reducer: {
    search: SearchReducer,
    user: UserReducer,
    cart: CartSlice,
  },
})
export default store
