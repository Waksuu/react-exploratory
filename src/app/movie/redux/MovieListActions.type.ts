import { MovieDTO } from "../data/Movie.dto";

export const MovieListRetrieved = "movieList/retrieved";
export const ClearMovieListRequest = "movieList/clearRequest";

export interface RetrieveMovieListAction {
    type: typeof MovieListRetrieved;
    movies: MovieDTO[];
}

export interface ClearMovieListAction {
    type: typeof ClearMovieListRequest;
}

export type MovieListActionTypes = RetrieveMovieListAction | ClearMovieListAction;
