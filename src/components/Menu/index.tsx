
import { FormControl, InputLabel, Link, MenuItem, Select } from '@material-ui/core';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledSelect = styled(Select)`
    min-width: 180px;
    align-items: flex-end;
    border-bottom: 1px solid;
`;

const Sort: FC = () => {

    const sortOptions = [{
        key: 'byDate',
        title: 'Release date'
    }]

    return (
        <div>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                <StyledSelect color="secondary"

                    id="demo-simple-select"

                >
                    {sortOptions.map(menu => (<MenuItem value={menu.key} key={menu.key}>{menu.title}</MenuItem>))}

                </StyledSelect>
            </FormControl>
        </div>
    );
}

export default Sort;