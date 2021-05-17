export interface MovieInterface {
  title?: string;
  description?: string;
  posterUrl?: string;
  id?: string;
  genres?: string[];
  releaseDate?: string;
}

export interface StateInterface {
  movies: MovieInterface[];
}

export interface ActionInterface {
  type: string;
  payload: any;
}
