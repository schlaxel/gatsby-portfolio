import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleCountry from './singleCountry';
import CountryDetail from './countryDetail';

const Wrapper = styled.div`
    margin-top: 20px;
`
const Table = styled.table`
    border: solid 1px ${props => props.theme.darker};
    border-collapse: collapse;
    margin: auto;
`
const Tr = styled.tr`
    padding: 10px;
`
const Th = styled.th`
    padding: 10px;
    border: solid 1px ${props => props.theme.darker};
    cursor: pointer;
    transition: 0.3s all ease-in-out;
    &:hover {
        background: ${props => props.theme.darker};
    }
`

const CountryList = ({ data }) => {
    const [sortedData, setSortedData] = useState(undefined);
    const [sortState, setSortState] = useState(['TotalConfirmed', 'DESC']);
    const [showCountryDetail, setShowCountryDetail] = useState('');

    useEffect(() => {
        // On the first render sort by TotalConfirmed DESC
        const _sortedData = data.sort((a,b) => (a.TotalConfirmed < b.TotalConfirmed) ? 1 : ((b.TotalConfirmed < a.TotalConfirmed) ? -1 : 0));
        setSortedData([ ..._sortedData ]); 
    }, [data])

    const sortBy = (by) => {
        // Sort by and check the state. If it is active and DESC one more click === ASC
        let _sortedData = data;
        console.log(sortState, sortState[0]);
        console.log('clicked');
        if (by !== sortState[0]) {
            _sortedData = data.sort((a,b) => (a[by] < b[by]) ? 1 : ((b[by] < a[by]) ? -1 : 0)); //DESC
            setSortState([by, 'DESC']);
        } else if (sortState[1] === 'ASC') {
            _sortedData = data.sort((a,b) => (a[by] < b[by]) ? 1 : ((b[by] < a[by]) ? -1 : 0)); //DESC
            setSortState([by, 'DESC']);
        } else {
            _sortedData = data.sort((b,a) => (a[by] < b[by]) ? 1 : ((b[by] < a[by]) ? -1 : 0)); //ASC
            setSortState([by, 'ASC']);
        }
        setSortedData([ ..._sortedData ]); 
    }

    const showDetail = (slug, name) => {
        setShowCountryDetail({ slug, name });
    }
    const closeDetail = () => {
        setShowCountryDetail('');
    }

    return (
        <Wrapper>
            { showCountryDetail !== '' && <CountryDetail closeDetail={closeDetail} country={showCountryDetail} /> }
            <Table>
                <thead>
                <Tr>
                    <Th onClick={() => sortBy('Country')}>Country</Th>
                    <Th onClick={() => sortBy('TotalConfirmed')}>Total Cases</Th>
                    <Th onClick={() => sortBy('TotalDeaths')}>Total Deaths</Th>
                    <Th onClick={() => sortBy('NewConfirmed')}>New Cases</Th>
                    <Th onClick={() => sortBy('NewDeaths')}>New Deaths</Th>
                    <Th onClick={() => sortBy('NewRecovered')}>New Recovered</Th>
                </Tr>
                </thead>
                { sortedData !== undefined &&
                <tbody>
                    {sortedData.map(country => (
                        <SingleCountry showDetail={showDetail} key={country.CountryCode} data={country} />
                    ))}
                </tbody>
                }
            </Table>
        </Wrapper> 
    )
}

export default CountryList;