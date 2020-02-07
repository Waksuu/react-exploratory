import { render, fireEvent, cleanup } from "@testing-library/react";
import React, { FC } from "react";
import { Provider, connect } from "react-redux";
import { configureStore, AppState } from "../../../common/redux/store/ConfigureStore";
import { mapStateToProps, mapDispatchToProps, MoviePanel } from "../../../app/movie/MoviePanel.component";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../../common/redux/actions/AppActions.type";
import { MovieDTO } from "../../../app/movie/data/Movie.dto";
import { screen } from '@testing-library/dom'
import { Store } from "redux";

describe("Movie Panel", () => {
    let mockStore: Store<AppState, AppActions>;
    let MoviePanelMock: FC

    beforeEach(() => {
        mockStore = configureStore();
        MoviePanelMock = connect(mapStateToProps, (
            dispatch: ThunkDispatch<AppState, any, AppActions>
        ) => mapDispatchToProps(getAllMoviesMock)(dispatch))(MoviePanel);
    });

    afterEach(cleanup);

    test("Should display movie list", async () => {
        // WHEN
        await render(
            <Provider store={mockStore}>
                <MoviePanelMock />
            </Provider>
        )

        // THEN
        expect(screen.queryByTestId("movie-list-component")).not.toBeEmpty();
    })

    test("Should clear movies after pressing clear movies button", async () => {
        // GIVEN
        await render(
            <Provider store={mockStore}>
                <MoviePanelMock />
            </Provider>
        )

        // WHEN
        fireEvent.click(screen.getByTestId("clear-movies-button"));

        // THEN
        expect(screen.queryByTestId("movie-list-component")).toBeEmpty();
    })
})

const getAllMoviesMock = (): Promise<MovieDTO[]> => {
    return Promise.resolve(mockMovies);
}

const mockMovies: MovieDTO[] = [
    {
        id: 1,
        name: "Mock movie 1"
    },
    {
        id: 2,
        name: "Mock movie 2"
    },
]
