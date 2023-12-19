import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userToken: '',
  userAuth: false,
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
    setUserAuth: (state, action) => {
      state.userAuth = action.payload
    },

    clearUserAuth: state => {
      state.userAuth = false
    },
  },
})

export const {
  setUserData,
  clearUserData,
  setUserToken,
  clearUserToken,
  setUserAuth,
  clearUserAuth,
} = userSlice.actions

export default userSlice.reducer
