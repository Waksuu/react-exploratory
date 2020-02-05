import {applyMiddleware, createStore} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AppActions} from "../actions/AppActions.type";
import rootReducer from "../reducers/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (initialState?: any) => {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)));
};

const store = configureStore();
(window as any).myStore = [];
store.subscribe(() => (window as any).myStore.push(store.getState()));

export default store;
