import React from 'react';
import styled from 'styled-components';
import { format } from 'fecha';
import {
    ResponsiveContainer, ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar
  } from 'recharts';

const Wrapper = styled.div`
    margin: 30px auto 0 auto;
    max-width: 1000px;
    width: 90%;
`

const Graph = ({ data }) => {
    
    const formatter = (value) => {
        const date = new Date(value);
        return `${format(date, 'DD.MM.YYYY')}`;
    }

    return (
        <Wrapper>
            <ResponsiveContainer width='100%' height={300}>
            <ComposedChart
                data={data}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis tickFormatter={formatter} dataKey="Date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Recovered" barSize={20} fill="#413ea0" />
                <Bar dataKey="Active" barSize={20} fill={'rgba(200,0,0,0.3)'} />
                <Line name="Cases" type="monotone" dataKey="Confirmed" stroke="#8884d8" />
                <Line type="monotone" dataKey="Deaths" stroke="#82ca9d" />
            </ComposedChart>
            </ResponsiveContainer>
        </Wrapper>
    );
};

export default Graph;