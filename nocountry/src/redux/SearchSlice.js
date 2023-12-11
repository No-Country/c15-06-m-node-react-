import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    filteredItems: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    filterItems: (state, action) => {
      const { searchTerm, items } = action.payload
      state.filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    },
  },
})

export const { setSearchTerm, filterItems } = searchSlice.actions
export default searchSlice.reducer
