import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  productID: '',
  description: '',
  price: 0,
  imageUrl: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.name = action.payload.name
      state.productID = action.payload.productID
      state.description = action.payload.description
      state.price = action.payload.price
      state.imageUrl = action.payload.imageUrl
    },
    deleteProduct: (state, action) => {
      state.name = ''
      state.productID = ''
      state.description = ''
      state.price = 0
      state.imageUrl = []
    },
    changeName: (state, action) => {
      state.name = action.payload
    },
    changePrice: (state, action) => {
      state.price = action.payload
    },
    changeDescription: (state, action) => {
      state.description = action.payload
    },
    changeImageUrl: (state, action) => {
      state.imageUrl = action.payload
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
