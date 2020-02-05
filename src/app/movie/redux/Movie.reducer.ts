import { MovieDTO } from "../data/Movie.dto";
import { MovieListActionTypes, MovieListRetrieved, ClearMovieListRequest } from "./MovieListActions.type";

const moviesInitialState: MovieDTO[] = [];

export const movieReducer = (state = moviesInitialState, action: MovieListActionTypes): MovieDTO[] => {
    switch (action.type) {
        case MovieListRetrieved:
            return action.movies;
        case ClearMovieListRequest:
            return [];
        default:
            return state;
    }
};
