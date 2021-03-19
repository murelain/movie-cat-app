import React, { FC } from 'react';
import styled from 'styled-components';
import MovieCard from '../../MovieCard';




const StyledMoviesList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const MovieCardContainerStyled = styled.div`
    padding: 15px;
`;
export interface MovieInterface {
    title: string,
    description: string,
    posterUrl: string,
    id: string,
    genres?: ["Action", "Comedy", "Crime"]
    releaseDate?: "2018-02-28",
}

interface MoviesListInterface {
    sortedMovies: MovieInterface[];
}

const MoviesList: FC<MoviesListInterface> = ({ sortedMovies }) => {

    return (
        <StyledMoviesList>

            {sortedMovies.map(movie => (
                <MovieCardContainerStyled>
                    <MovieCard movie={movie}></MovieCard>
                </MovieCardContainerStyled>))}

        </StyledMoviesList>
    );
}

export default MoviesList;