import React, { FC } from 'react';
import Filters from '../components/Filters';
import Menu from '../components/Menu';
import MoviesList from '../components/MovieList';


const ContentLayout: FC = () => {

    return (
        <>
            <div>
                <Menu />
                <Filters />
            </div>
            <MoviesList />
        </>);
}

export default ContentLayout;