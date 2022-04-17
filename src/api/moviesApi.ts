import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Response } from '../redux/movies/moviesTypes';

interface QueryArgument {
  title: string;
  pageNumber: number;
}

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    searchMovie: builder.query<Response, QueryArgument>({
      query: ({ title, pageNumber }) => ({
        url: '/',
        params: {
          s: title,
          page: pageNumber,
          apikey: '4498fd94',
          plot: 'short',
        },
      }),
    }),
  }),
});

export const { useSearchMovieQuery } = moviesApi;
