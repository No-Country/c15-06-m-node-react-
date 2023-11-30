import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  userName: '',
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.userName = action.payload.userName
      state.userID = action.payload.userID
    },
    resetUser: state => {
      state.name = ''
      state.email = ''
      state.userName = ''
      state.userID = ''
    },
    changeName: (state, action) => {
      state.name = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changeUserName: (state, action) => {
      state.userName = action.payload
    },
  },
})

export const { setUser, resetUser, changeName, changeEmail, changeUserName } =
  userSlice.actions
export default userSlice.reducer
