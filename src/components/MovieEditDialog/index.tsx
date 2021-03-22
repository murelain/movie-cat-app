import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import { MovieInterface } from '../MovieList';

const FormFiledsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

interface MovieEditDialogInterface {
    title: string;
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    editMovie?: MovieInterface;
}
const MovieEditDialog: FC<MovieEditDialogInterface> = ({ title = 'Edit Movie', open, onConfirm, onCancel, editMovie }) => {
    return (
        <div>

            <Dialog
                open={open}
                onClose={onCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                 </DialogContentText> */}
                    <form noValidate autoComplete="off">
                        <FormFiledsContainerStyled>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Multiline"
                                multiline
                                rowsMax={1}
                                value={editMovie?.title}

                            />
                            <TextField
                                id="standard-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                value={editMovie?.description}
                            />
                            <TextField
                                id="standard-multiline-static"
                                label="Multiline"
                                multiline
                                rows={1}
                                value={editMovie?.releaseDate}
                            />
                        </FormFiledsContainerStyled>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onCancel} color="primary">
                        Discard
          </Button>
                    <Button onClick={onConfirm} color="secondary" autoFocus>
                        Save
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MovieEditDialog;