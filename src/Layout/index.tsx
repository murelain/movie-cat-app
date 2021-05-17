import React, { FC } from 'react';
import { connect } from 'react-redux';
import { MovieInterface, StateInterface } from "../shared/types";
import ContentLayout from '../ContentLayout';
import Header from '../Header';

function mapStateToProps(state: StateInterface) {
    const { movies } = state;
    return { moviesList: movies }
}


const Layout: FC<{ moviesList: MovieInterface[] }> = ({ moviesList }) => {

    return (
        <>
            <Header />
            <ContentLayout moviesList={moviesList} />
        </>
    );
}

export default connect(mapStateToProps)(Layout);