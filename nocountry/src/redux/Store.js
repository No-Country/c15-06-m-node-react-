import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './SearchSlice'
import UserReducer from './userSlice'

const store = configureStore({
  reducer: {
    search: SearchReducer,
    user: UserReducer,
  },
})
export default store
