import React, { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { MovieInterface } from "../../shared/types";
import { useFormik } from "formik";

const FormFiledsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

interface MovieEditDialogInterface {
    title: string;
    open: boolean;
    onConfirm: (movie: MovieInterface) => void;
    onCancel: () => void;
    editMovie?: MovieInterface;
}
const MovieEditDialog: FC<MovieEditDialogInterface> = ({
    title = "Edit Movie",
    open,
    onConfirm,
    onCancel,
    editMovie,
}) => {
    const [values, setValues] = useState({});

    const handleChange = (event: any) => {
        setValues((prevValues) => ({
            ...prevValues,
            // we use the name to tell Formik which key of `values` to update
            [event.target.name]: event.target.value,
        }));
    };

    const validate = (values: MovieInterface) => {
        const errors: MovieInterface = {};
        if (!values.title) {
            errors.title = "Required";
        } else if (values.title.length > 15) {
            errors.title = "Must be 15 characters or less";
        }

        if (!values.description) {
            errors.description = "Required";
        } else if (values.description.length > 20) {
            errors.description = "Must be 20 characters or less";
        }

        if (!values.releaseDate) {
            errors.releaseDate = "Required";
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            title: editMovie?.title,
            description: editMovie?.description,
            releaseDate: editMovie?.releaseDate,
        },
        validate,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

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
                    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                        <FormFiledsContainerStyled>
                            <TextField
                                id="standard-multiline-flexible"
                                label="Title"
                                multiline
                                placeholder="Title"
                                onChange={formik.handleChange}
                                rowsMax={1}
                                value={formik.values.title}
                            />
                            {formik.touched.title && formik.errors.title ? (
                                <div>{formik.errors.title}</div>
                            ) : null}
                            <TextField
                                id="standard-textarea"
                                label="Description"
                                placeholder="Description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                            />
                            <TextField
                                id="standard-multiline-static"
                                label="Release date"
                                multiline
                                onChange={formik.handleChange}
                                rows={1}
                                value={formik.values.releaseDate}
                            />
                        </FormFiledsContainerStyled>
                        <Button onClick={onCancel} color="primary">
                            Discard
            </Button>

                        <Button type="submit" color="secondary" autoFocus>
                            Save
            </Button>
                    </form>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    );
};

export default MovieEditDialog;
