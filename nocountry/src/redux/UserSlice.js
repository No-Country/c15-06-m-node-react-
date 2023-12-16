import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userToken: '',
  userData: {},
}

const userSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.userToken = action.payload
    },
    clearUserToken: state => {
      state.userToken = ''
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
    clearUserData: state => {
      state.userData = {}
    },
  },
})

export const { setUserData, clearUserData, setUserToken, clearUserToken } =
  userSlice.actions

export default userSlice.reducer
