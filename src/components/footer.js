import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from './nav';
import ToggleMode from './toggleMode';

const Wrapper = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    background: ${props => props.theme.darker};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const A = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.font};
`

const Footer = () => (
    <Wrapper>
        <Nav small />
        <A to="/">Kiefer.Media</A>
        <ToggleMode footer />
    </Wrapper>
);

export default Footer;