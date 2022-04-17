import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../api/moviesApi';
import moviesSlice from './movies/moviesSlice';
import paginationSlice from './pagination/paginationSlice';

export const store = configureStore({
  reducer: {
    moviesSlice,
    paginationSlice,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
