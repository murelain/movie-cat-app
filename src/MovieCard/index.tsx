import React, { FC } from 'react';
import { MovieInterface } from '../components/MovieList';

const MovieCard: FC<{ movie: MovieInterface }> = ({ movie }) => {

    return (
        <div className="MovieCard">
            <h3>{movie.title}</h3>
            <img width="200px" height="350px" src={movie.posterUrl} />
        </div>
    );
}


export default MovieCard;

