import { Button, TextField } from '@material-ui/core';
import React, { FC, useState } from 'react';
import MovieEditDialog from '../components/MovieEditDialog';
import { MovieInterface } from "../shared/types";
import { store } from '../redux/store';
import { HeaderStyled, SearchContainerStyled, HeaderTopStyled, TextFieldStyled } from './styles';
import { addMovie } from '../redux/actions';

const Header: FC = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleConfirm = (newMovie: MovieInterface) => {
        setOpen(false);
        store.dispatch(addMovie(newMovie));
    };

    return (
        <HeaderStyled>
            <HeaderTopStyled>
                <img width="180" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1200px-Netflix_2014_logo.svg.png" />
                <Button color="primary" variant="contained" onClick={handleClickOpen}>Add movie</Button>
            </HeaderTopStyled>
            <SearchContainerStyled>
                <TextFieldStyled id="standard-basic" variant="filled" color="secondary" />
                <Button color="secondary" variant="contained">Search</Button>
            </SearchContainerStyled>
            <MovieEditDialog title="Add movie" open={open} onConfirm={handleConfirm} onCancel={() => { }} />
        </HeaderStyled>
    );
}

export default Header;