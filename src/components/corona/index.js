import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Global from './global';
import CountryList from './countryList';
import { Refresh } from 'styled-icons/evil/';

const Wrapper = styled.div`
    padding: 20px;
    box-sizing: border-box;
    flex: 1;
    overflow: auto;
`
const H = styled.h1`
    font-weight: 400;
    margin: 0;
`
const LoadData = styled.div`
    margin: 10px auto;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: ${props => props.theme.darker};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Error = styled.p`
    max-width: 400px;
    margin: auto;
    width: 90%;
    font-family: 'Source Sans Pro';
`

const Index = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            corona {
                Countries {
                    NewConfirmed
                    NewDeaths
                    NewRecovered
                    Date
                    Country
                    CountryCode
                    Slug
                    TotalConfirmed
                    TotalDeaths
                    TotalRecovered
                }
                Date
                Global {
                    NewConfirmed
                    NewDeaths
                    NewRecovered
                    TotalConfirmed
                    TotalDeaths
                    TotalRecovered
                }
            }
        }
    `)
    
    const [coronaData, setCoronaData] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    console.log('static data', coronaData);
    const loadNewData = () => {
        setLoading(true);
        fetch(`https://api.covid19api.com/summary`)
        .then(res => res.json())
        .then((result) => {
            const corona = result;
            setLoading(false);
            setCoronaData({corona});
            setError('');
        })
        .catch(e => {
            setLoading(false);
            setError(`Error when fetching the data. (${e}) This usually happens when there are too many requests to the api. 
            Try again later, there is nothing I (Alex) can do about. Tut mir leid :(`);
        });
    }

    return (
        <Wrapper className="animated delay-1s fadeInDown" >
            <H>Coronavirus</H>
            <LoadData className={loading && 'animated infinite rotating'} onClick={() => loadNewData()}><Refresh size={30} color="#fff" /></LoadData>
            { error !== '' && <Error>{error}</Error>}
            <Global data={coronaData.corona.Global} date={coronaData.corona.Date} />
            <CountryList data={coronaData.corona.Countries} />
        </Wrapper>
    )
}

export default Index;