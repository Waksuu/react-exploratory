import {combineReducers, Reducer} from "redux";
import { AppActions } from "../actions/AppActions.type";
import { MovieRootReducer, movieRootReducer } from "../../../app/movie/redux/MovieRootReducer";

const rootReducer: Reducer<RootReducer, AppActions> = combineReducers({
    movie: movieRootReducer,
});

export interface RootReducer {
    movie: MovieRootReducer;
}

export default rootReducer;
