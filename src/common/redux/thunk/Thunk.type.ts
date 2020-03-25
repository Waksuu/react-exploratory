import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AppState } from "../store/ConfigureStore"
import { AppActions } from "../actions/AppActions.type"

export type ThunkResult<T = Promise<void>> = ThunkAction<T, AppState, undefined, AppActions>
export type Dispatcher = ThunkDispatch<AppState, undefined, AppActions>