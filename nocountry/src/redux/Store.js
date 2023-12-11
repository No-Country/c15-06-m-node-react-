import { configureStore } from '@reduxjs/toolkit'
import SearchReducer from './SearchSlice'

const store = configureStore({
  reducer: {
    search: SearchReducer,
  },
})
export default store
