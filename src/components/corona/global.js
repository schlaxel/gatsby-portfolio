import React from 'react';
import styled from 'styled-components';
import { format } from 'fecha';
import GlobalList from './globalList';

const Wrapper = styled.div`
`
const H = styled.h2`
    font-weight: 100;
    font-size: 0.8em;
`
const H3 = styled.h3`
    
`
const A = styled.a`
    color: ${props => props.theme.font};
    text-decoration: none;
`

const Global = ({ data, date }) => {
    const _date = new Date(date);
    console.log(data, 'glibal data');
    return (
        <Wrapper>
            <H>Stand: {format(_date, 'DD.MM.YYYY hh:mm')}, Data: <A href="https://covid19api.com/">Johns Hopkins CSSE</A></H>
            <H3>Global: </H3>
            <GlobalList data={data} />
        </Wrapper>
    )
};

export default Global;