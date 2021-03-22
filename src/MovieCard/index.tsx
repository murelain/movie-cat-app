import { IconButton, Menu, MenuItem } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { MovieInterface } from '../components/MovieList';

import styled from "styled-components";
import MovieEditDialog from '../components/MovieEditDialog';
import DeleteMovieDialog from '../components/DeleteMovieDialog';

export const IconButtonStyled = styled(IconButton)`
  position: absolute!important;
  right: 0;
`;

export const MovieCardStyled = styled.div`
  position: relative;
`;

const MovieCard: FC<{ movie: MovieInterface }> = ({ movie }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const options = ['Edit', 'Delete'];

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (option: string) => {
        setAnchorEl(null);
        if (option === 'Edit') {
            setEditDialogOpen(true)
        }
        if (option === 'Delete') {
            setDeleteDialogOpen(true)
        }
    };

    const handleCloseEditDialog = () => {
        setEditDialogOpen(false)

    };
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const handleEdit = () => {
        console.log('saving edited movie', movie.id)
        setEditDialogOpen(false);
    }

    const handleDelete = () => {
        console.log('deleting', movie.id)
        setEditDialogOpen(false);
    }

    return (
        <>
            <MovieCardStyled>
                <h3>{movie.title}</h3>
                <img width="200px" height="350px" src={movie.posterUrl} />
                <IconButtonStyled
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}

                >
                    {/* <MoreVertIcon /> */}
                ***
            </IconButtonStyled>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleMenuClick}
                    PaperProps={{
                        style: {
                            maxHeight: 100,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} onClick={() => handleMenuClick(option)}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </MovieCardStyled>
            {editDialogOpen && <MovieEditDialog editMovie={movie} title="Edit movie" open={editDialogOpen} onConfirm={handleEdit} onCancel={() => handleCloseEditDialog()} />}
            {deleteDialogOpen && <DeleteMovieDialog onConfirm={() => handleDelete()} onCancel={() => setDeleteDialogOpen(false)} />}
        </>
    );
}


export default MovieCard;

