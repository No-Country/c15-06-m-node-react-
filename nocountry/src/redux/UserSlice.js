import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userToken: '',
}

const userSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload
    },
  },
})
