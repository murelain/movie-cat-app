import React, { FC } from 'react';

const MovieCard: FC<MovieCardInterface> = ({ title, description }) => {

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <h3>{description}</h3>
        </div>
    );
}

interface MovieCardInterface {
    title: string,
    description: string,
    coverUrl: string,
}


export default MovieCard;

