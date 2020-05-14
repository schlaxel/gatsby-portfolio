import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Global from './global';
import CountryList from './countryList';

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
    console.log(data);
    return (
        <Wrapper className="animated delay-1s fadeInDown" >
            <H>Coronavirus</H>
            <Global data={data.corona.Global} date={data.corona.Date} />
            <CountryList data={data.corona.Countries} />
        </Wrapper>
    )
}

export default Index;