import { MovieDTO } from "../data/Movie.dto";
import { RetrieveMovieListAction, MovieListRetrieved, ClearMovieListAction, ClearMovieListRequest } from "./MovieListActions.type";
import { getAllMoviesREST } from "../data/Movie.service";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppState } from "../../../common/redux/store/ConfigureStore";
import { AppActions } from "../../../common/redux/actions/AppActions.type";

export const retrieveMoviesAction = (): ThunkAction<Promise<void>,
    AppState,
    undefined,
    AppActions
> => async (dispatch: ThunkDispatch<AppState, undefined, AppActions>) => {
    const movies: MovieDTO[] = await getAllMoviesREST();
    dispatch(moviesRetrieved(movies));
};

const moviesRetrieved = (movies: MovieDTO[]): RetrieveMovieListAction => ({
    type: MovieListRetrieved,
    movies
});

export const clearMovies = (): ClearMovieListAction => ({
    type: ClearMovieListRequest,
});
