import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const DeleteMovieDialog: FC<{ onConfirm: () => void, onCancel: () => void }> = ({ onCancel, onConfirm }) => {


    return (
        <div>

            <Dialog
                open={true}
                onClose={onCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete movie?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are sure that you want to delete this movie?
                 </DialogContentText>

                </DialogContent>
                <DialogActions>

                    <Button onClick={onCancel} color="secondary" autoFocus>Cancel</Button>
                    <Button onClick={onConfirm} color="primary" autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeleteMovieDialog;