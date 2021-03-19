import React, { FC } from 'react';
import { MovieInterface } from '../components/MovieList';
import ContentLayout from '../ContentLayout';
import Header from '../Header';
import { MOVIES } from '../mock-data';


const Layout: FC = () => {

    const movies = MOVIES as unknown as MovieInterface[];

    return (
        <>
            <Header />
            <ContentLayout moviesList={movies} />
        </>
    );
}

export default Layout;