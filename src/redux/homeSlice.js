import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    categorySelected: null,
    userSearch: null,
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setUserSearch: (state, action) => {
      state.userSearch = action.payload;
    }
  },
});

export const { setCategorySelected, setUserSearch } = homeSlice.actions; 
export default homeSlice.reducer;
