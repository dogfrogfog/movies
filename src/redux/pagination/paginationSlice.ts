import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPagination {
  currentPage: number;
  maxPageNumberLimit: number;
  minPageNumberLimit: number;
}

const initialState: IPagination = {
  currentPage: 1,
  maxPageNumberLimit: 5,
  minPageNumberLimit: 0,
};

const paginationSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setCurrentPage(state: IPagination, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setMaxPageNumberLimit(state: IPagination, action: PayloadAction<number>) {
      state.maxPageNumberLimit = action.payload;
    },
    setMinPageNumberLimit(state: IPagination, action: PayloadAction<number>) {
      state.minPageNumberLimit = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;

export default paginationSlice.reducer;
