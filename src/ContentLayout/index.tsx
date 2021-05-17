import React, { FC, useState } from 'react';
import Filters from '../components/Filters';
import Sort from '../components/Menu';
import MoviesList from '../components/MovieList';
import styled from "styled-components";
import { MovieInterface } from '../shared/types';

export const ContentStyled = styled.div`
padding: 30px;
  display: flex;
  flex-direction: column;
  background: #484848;
  flex-grow: 1;
  
`;

export const ContentHeaderStyled = styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid;
  align-items: flex-end;
`;


interface Content {
  moviesList: MovieInterface[];
}

const ContentLayout: FC<Content> = ({ moviesList }) => {

  return (
    <ContentStyled>
      <ContentHeaderStyled>
        <Filters />
        <Sort />
      </ContentHeaderStyled>
      <MoviesList sortedMovies={moviesList} />

    </ContentStyled>);
}

export default ContentLayout;