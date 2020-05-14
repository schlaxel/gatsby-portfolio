import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Graph from './graph';
import { Times } from 'styled-icons/fa-solid';


const Wrapper = styled.div`
    top: 0; right: 0; left: 0; bottom: 0;
    background: ${props => props.theme.darker};
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99;
`
const Loading = styled.div`
`
const Close = styled.div`
    position: fixed;
    transition: all .3s ease-in;
    right: 20px;
    top: 20px;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999;
    background: ${props => props.theme.bgColor1};
    &:hover {
        transform: rotate(180deg) scale3d(0.7,0.7,0.7);
    }
`
const Ico = styled(Times)`
    color: ${props => props.theme.font};
`

const Heading = styled.h1`
    margin-top: 100px;
`

const CountryDetail = ({ country, closeDetail }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/${country.slug}`)
        .then(res => res.json())
        .then((result) => {
            setData(result);
            setLoading(false);
        })
    }, [country]);
    return (
        <Wrapper className="animated fadeInUp slow">
            <Close onClick={() => closeDetail()}><Ico size="35" className='animated delay-2s zoomIn' /></Close>
            <Heading>{country.name}</Heading>
            { loading ?
                <Loading>Loading</Loading> :
                <Graph data={data} />
            }
        </Wrapper>
    )
};

export default CountryDetail;