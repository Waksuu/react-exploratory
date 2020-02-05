import { MovieDTO } from "../data/Movie.dto";
import { MovieListActionTypes } from "./MovieListActions.type";
import { combineReducers, Reducer } from "redux";
import { movieReducer } from "./Movie.reducer";

export const movieRootReducer: Reducer<MovieRootReducer, MovieListActionTypes> = combineReducers({
    movies: movieReducer,
});

export interface MovieRootReducer {
    movies: MovieDTO[];
}
