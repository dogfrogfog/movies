import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMovies {
  searchTitle: string;
}

const initialState: IMovies = {
  searchTitle: 'Batman',
};

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setSearchTitle(state: IMovies, action: PayloadAction<string>) {
      state.searchTitle = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
