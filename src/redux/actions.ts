import { MovieInterface } from "../shared/types";

export enum ACTIONS_TYPES {
    ADD_MOVIE = "ADD_MOVIE",
    DELETE_MOVIE = "DELETE_MOVIE",
    EDIT_MOVIE = "EDIT_MOVIE",
}

export const addMovie = (movie: MovieInterface) => ({
    type: ACTIONS_TYPES.ADD_MOVIE,
    payload: movie,
});


export const deleteMovie = (movieId: string) => ({
    type: ACTIONS_TYPES.DELETE_MOVIE,
    payload: movieId,
});


export const editMovie = (movie: MovieInterface) => ({
    type: ACTIONS_TYPES.EDIT_MOVIE,
    payload: movie,
});
