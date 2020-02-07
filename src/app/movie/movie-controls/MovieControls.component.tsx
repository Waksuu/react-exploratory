import React, { FC } from 'react';
import "./MovieControls.style.css"

interface MovieControlsProps {
    clearMovies: () => void
}

type Props = MovieControlsProps;

export const MovieControls: FC<Props> = (props: Props) => {
    return (
        <button data-testid="clear-movies-button" onClick={props.clearMovies} className="my-button">
            Clear movies!
        </button>
    );
};
