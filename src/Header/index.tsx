import { Button, TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { HeaderStyled, SearchContainerStyled, HeaderTopStyled, TextFieldStyled } from './styles';

const Header: FC = () => {

    return (
        <HeaderStyled>
            <HeaderTopStyled>
                <img width="180" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1200px-Netflix_2014_logo.svg.png" />
                <Button color="primary" variant="contained">Add movie</Button>
            </HeaderTopStyled>
            <SearchContainerStyled>
                <TextFieldStyled id="standard-basic" variant="filled" color="secondary" />
                <Button color="secondary" variant="contained">Search</Button>
            </SearchContainerStyled>
        </HeaderStyled>
    );
}

export default Header;