import { RootState } from '../store';

export const selectSearchTitle = (state: RootState) => state.moviesSlice.searchTitle;
