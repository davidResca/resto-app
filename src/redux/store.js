import { configureStore } from '@reduxjs/toolkit';
import { restoApi } from '../services/firebaseAPI';
import homeSlice from './homeSlice';
import authSlice from './authSlice';
import locationSlice from './locationSlice';


export const store = configureStore({
  reducer: {
    homeSlice,
    authSlice,
    locationSlice,
    [restoApi.reducerPath]: restoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware),
})