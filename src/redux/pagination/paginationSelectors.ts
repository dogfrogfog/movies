import { RootState } from '../store';

export const selectCurrentPage = (state: RootState) => state.paginationSlice.currentPage;
export const selectMaxPageNumberLimit = (state: RootState) => state.paginationSlice.maxPageNumberLimit;
export const selectMinPageNumberLimit = (state: RootState) => state.paginationSlice.minPageNumberLimit;
