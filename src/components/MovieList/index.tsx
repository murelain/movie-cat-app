import React, { FC, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../../MovieCard';
import { MovieInterface } from '../../shared/types';

const StyledMoviesList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const MovieCardContainerStyled = styled.div`
    padding: 15px;
`;

interface MoviesListInterface {
    sortedMovies: MovieInterface[];
}

const MoviesList: FC<MoviesListInterface> = ({ sortedMovies }) => {

    return (
        <>
            <StyledMoviesList>
                {sortedMovies.map(movie => (
                    <MovieCardContainerStyled>
                        <MovieCard movie={movie}></MovieCard>
                    </MovieCardContainerStyled>))}

            </StyledMoviesList>


        </>);
}

export default MoviesList;