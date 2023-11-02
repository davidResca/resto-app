import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    categorySelected: " ",
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
      console.log('EN SLICE', state.categorySelected);
    },
  },
});

export const { setCategorySelected } = homeSlice.actions; 
export default homeSlice.reducer;
