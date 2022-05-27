import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// есть файл с типами, какой в нем смысл если типы объявляются прямо в файле
// IMoviesState более явно как-то
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
