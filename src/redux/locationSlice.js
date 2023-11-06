import { createSlice } from "@reduxjs/toolkit";
import * as Location from 'expo-location';

const locationSlice = createSlice({
  name: "locationSlice",
  initialState:{
    latitude: null,
    longitude: null,
  },
  reducers:{
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
    },
  }
});

export const { setLatitude, setLongitude} = locationSlice.actions;
export default locationSlice.reducer;
