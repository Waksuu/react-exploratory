import React, { FC } from 'react';
import { MovieDTO } from '../data/Movie.dto';

interface MovieListProps  {
    movies: MovieDTO[]
}

type Props = MovieListProps;

export const MovieList: FC<Props> = (props: Props) => {
    return (
        <> 
            {props.movies.map(movie =>
                <div key={movie.id}>{movie.name}</div>
            )} 
        </>
    );
};
