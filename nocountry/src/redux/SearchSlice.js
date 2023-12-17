import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',
    filteredItems: [],
    searchData: [],
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

    setSearchData: (state, action) => {
      state.searchData = action.payload
    },

    setClear: (state, action) => {
      state.searchTerm = ''
    },
  },
})

export const { setSearchTerm, filterItems, setSearchData, setClear } =
  searchSlice.actions
export default searchSlice.reducer
