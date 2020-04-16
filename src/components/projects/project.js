import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 90%;
    max-width: 550px;
    margin: auto;
    background: ${props => props.theme.darker};
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 50px;
    border-radius: 8px;
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 1.5em;
`

const Project = ({ node }) => {
    return (
        <Wrapper>
            <H1>{node.frontmatter.title}</H1>
        </Wrapper>
    );
}

export default Project;
