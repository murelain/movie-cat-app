
import Link from '@material-ui/core/Link';
import React, { FC } from 'react';
import styled from 'styled-components';

const StyledFilters = styled.div`
    display: flex;
`;

const FilterLink = styled(Link)`
    padding: 6px 12px;
`;

const Filters: FC = () => {
    const filterOptions = ['all', 'documentary', 'comedy', 'horror', 'crime']

    return (
        <StyledFilters>
            {filterOptions.map(filter => (
                <FilterLink href="#" color="textSecondary"> {filter} </FilterLink>
            ))}
        </StyledFilters>
    );
}

export default Filters;