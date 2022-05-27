export interface Response {
  Search: Search[];
  totalResults: string;
  Response: string;
  Error: string;
}

// export type SearchResultValues = 'Title' | 'Year' | 'imdbID' | 'Poster';
// export type Search = Record<SearchResultValues, string> & {
//   Type: Type;
// }

export interface Search {
  // почему с большой буквы свойства ?
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

// и есть еще такая практика именовать интерфейсы с буквы I, типа ISearch или IResponse

export enum Type {
  Movie = 'movie',
  Series = 'series',
}
