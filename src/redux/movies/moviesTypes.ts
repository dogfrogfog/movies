export interface Response {
  Search: Search[];
  totalResults: string;
  Response: string;
  Error: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export enum Type {
  Movie = 'movie',
  Series = 'series',
}
