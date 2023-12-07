import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id: '',
  name: '',
  description: '',
  categoria: '',
  price: 0,
  imageUrl: [],
  status: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state._id = action.payload._id
      state.name = action.payload.name
      state.description = action.payload.description
      state.categoria = action.payload.categoria
      state.price = action.payload.price
      state.imageUrl = action.payload.imageUrl
    },
    deleteProduct: (state, action) => {
      state._id = ''
      state.name = ''
      state.categoria = ''
      state.description = ''
      state.price = 0
      state.imageUrl = []
      state.status = ''
    },
  },
})

export const {
  setProduct,
  deleteProduct,
  changeName,
  changePrice,
  changeDescription,
  changeImageUrl,
} = userSlice.actions
export default userSlice.reducer
