import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
    background: ${props => props.theme.darker};
    border-radius: 8px;
`
const L = styled.li`
    margin: 5px;
    list-style-type: none;
    padding: 0%;
`

const GlobalList = ({ data }) => (
    <Wrapper>
        <L>New Confirmed: {data.NewConfirmed}</L>
        <L>New Deaths: {data.NewDeaths}</L>
        <L>New Recovered: {data.TotalConfirmed}</L>
        <L>Total Deaths: {data.TotalDeaths}</L>
        <L>Total Recovered: {data.TotalRecovered}</L>
    </Wrapper>
);

export default GlobalList;