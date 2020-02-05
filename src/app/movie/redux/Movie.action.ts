import { MovieDTO } from "../data/Movie.dto";
import { RetrieveMovieListAction, MovieListRetrieved, ClearMovieListAction, ClearMovieListRequest } from "./MovieListActions.type";
import { getAllMovies } from "../data/Movie.service";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../common/redux/store/ConfigureStore";
import { AppActions } from "../../../common/redux/actions/AppActions.type";

export const retrieveMoviesAction = (): ThunkAction<Promise<void>, AppState, undefined, AppActions> => {
    return async (dispatch: ThunkDispatch<AppState, any, AppActions>) => {
        const movies: MovieDTO[] = await getAllMovies();
        dispatch(moviesRetrieved(movies));
    };
};

const moviesRetrieved = (movies: MovieDTO[]): RetrieveMovieListAction => {
    return {
        type: MovieListRetrieved,
        movies
    };
}

export const clearMovies = (): ClearMovieListAction => {
    return {
        type: ClearMovieListRequest,
    };
}
