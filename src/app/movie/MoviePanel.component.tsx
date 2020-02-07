import React, { FC, useEffect } from 'react';
import { MovieDTO } from './data/Movie.dto';
import { AppState } from '../../common/redux/store/ConfigureStore';
import { retrieveMoviesAction, clearMovies } from './redux/Movie.action';
import { connect } from 'react-redux';
import { MovieList } from './movie-list/MovieList.component';
import { MovieControls } from './movie-controls/MovieControls.component';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../common/redux/actions/AppActions.type';
import { getAllMoviesREST } from './data/Movie.service';

type Props = LinkStateProps & LinkDispatchProps;

export const MoviePanel: FC<Props> = (props: Props) => {
    useEffect(() => {
        props.retrieveMovies();
    }, [])

    return (
        <>
            <MovieList movies={props.movies} />
            <MovieControls clearMovies={props.clearMovies} />
        </>
    );
};

interface LinkStateProps {
    movies: MovieDTO[];
}

export const mapStateToProps = (state: AppState): LinkStateProps => ({
    movies: state.movie.movies
});

interface LinkDispatchProps {
    retrieveMovies: () => Promise<void>;
    clearMovies: () => void;
}

export const mapDispatchToProps = (
        getAllMovies: () => Promise<MovieDTO[]>
    ) => (dispatch: ThunkDispatch<AppState, any, AppActions>): LinkDispatchProps => ({
    retrieveMovies: () => dispatch(retrieveMoviesAction(getAllMovies)),
    clearMovies: () => dispatch(clearMovies())
});

export default connect(mapStateToProps, (
        dispatch: ThunkDispatch<AppState, any, AppActions>
    ) => mapDispatchToProps(getAllMoviesREST)(dispatch))
(MoviePanel);
