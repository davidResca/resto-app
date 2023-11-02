import { configureStore } from '@reduxjs/toolkit';
import { restoApi } from '../services/firebaseAPI';
import homeSlice from '../redux/homeSlice';

export const store = configureStore({
  reducer: {
    homeSlice,
    [restoApi.reducerPath]: restoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware),
})