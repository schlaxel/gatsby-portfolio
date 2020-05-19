import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.tr`
    padding: 8px;
    box-sizing: border-box;
    border: solid 1px #fff;
    border-collapse: collapse;
    transition: all .3s ease-in-out;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.darker};
    }
`
const Td = styled.td`
    border: solid 1px ${props => props.theme.darker};
    border-collapse: collapse;
    padding: 10px;
    font-family: 'Source Sans Pro';
`

const SingleCountry = ({ data, showDetail }) => (
    <Wrapper onClick={() => showDetail(data.Slug, data.Country)}>
        <Td>{data.CountryCode}</Td>
        <Td>{Number(data.TotalConfirmed).toLocaleString()}</Td>
        <Td>{Number(data.TotalDeaths).toLocaleString()}</Td>
        <Td>{Number(data.NewConfirmed).toLocaleString()}</Td>
        <Td>{Number(data.NewDeaths).toLocaleString()}</Td>
        <Td>{Number(data.NewRecovered).toLocaleString()}</Td>
    </Wrapper>
);

export default SingleCountry;