import { createStore } from "redux";
import { ActionInterface, MovieInterface, StateInterface } from "../shared/types";
import { MOVIES } from "../mock-data";
import { ACTIONS_TYPES } from "./actions";

const initialState: StateInterface = {
  movies: MOVIES,
};

function rootReducer(state = initialState, action: ActionInterface) {
  switch (action.type) {
    case ACTIONS_TYPES.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case ACTIONS_TYPES.EDIT_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case ACTIONS_TYPES.DELETE_MOVIE:
      return {
        ...state,
        // remove from array and return
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
}

export const store = createStore(rootReducer, initialState);



