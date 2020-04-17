import React, { useContext } from 'react';
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import styled from 'styled-components';
import { Sun, Moon } from 'styled-icons/feather';

const Wrapper = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: ${props => props.theme.darker };
    padding: 10px;
    border-radius: 25px;
    transition: all .5s ease-in;
    color: ${props => props.theme.font };
    z-index: 99999;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.contrast };
        color: ${ props => props.theme.bgColor1 };
    }
    @media (max-width: 900px) {
        bottom: 20px;
        top: auto;
        right: auto;
        border: solid 2px ${props => props.theme.bgColor2};
    }
`

const ToggleMode = ({ isPage }) => {
    const themeContext = useContext(ThemeManagerContext);
    return (
        <Wrapper isPage={isPage} className="animated fadeInLeft delay-1s slow">
            {
                themeContext.isDark ?
                <Sun size="30" onClick={() => themeContext.toggleDark()} /> :
                <Moon size="30" onClick={() => themeContext.toggleDark()} />
            }
        </Wrapper>
    )
}

export default ToggleMode;