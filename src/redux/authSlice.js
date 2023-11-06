import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: null,
    idToken: null
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload
      console.log(state.idToken);
    },
    clearUser: state => {
      state.user = null;
      state.idToken = null;
    }
  },
});

export const { setUser, setIdToken, clearUser } = authSlice.actions;
export default authSlice.reducer;