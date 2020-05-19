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
        <L>Total Cases: {data.TotalConfirmed.toLocaleString()}</L>
        <L>Total Deaths: {data.TotalDeaths.toLocaleString()}</L>
        <L>Total Recovered: {data.TotalRecovered.toLocaleString()}</L>
        <L>New Cases: {data.NewConfirmed.toLocaleString()}</L>
        <L>New Deaths: {data.NewDeaths.toLocaleString()}</L>
        <L>New Recovered: {data.NewRecovered.toLocaleString()}</L>
    </Wrapper>
);

export default GlobalList;