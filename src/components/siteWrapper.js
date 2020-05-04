import React, { useContext, useEffect } from "react";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import styled, { createGlobalStyle } from 'styled-components';
import ToggleMode from '../components/toggleMode';
import Home from '../components/home';
import BackBtn from '../components/backBtn';
import SEO from '../components/seo';

const GlobalStyle = createGlobalStyle`
    html, body, #gatsby-focus-wrapper, #___gatsby {
        width: 100%;
        height: 100%;
        background: ${props => props.theme.bgColor1} radial-gradient(
            ${props => props.theme.bgColor2}, ${props => props.theme.bgColor1}
        );
        background-attachment: fixed;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arvo';
        color: ${ props => props.theme.font };
    }
    h1, h2, h3, h4, h5, h6 {
        text-align: center;
        font-family: 'Arvo';
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Content = styled.div`
    width: 50%;
    margin-left: 50%;
    box-sizing: border-box;
    padding: 50px;
    @media(max-width: 900px) {
        width: 100%;
        margin: 0;
        padding: 200px 20px 150px 20px;
    }
`

const SiteWrapper = ({ children, isPage, wasPage, seoTitle, seoDescription, seoImage, seoUrl }) => {    
    return (
        <Wrapper>
            <Home wasPage={wasPage} isPage={isPage} />
            <ToggleMode isPage={isPage} />
            <GlobalStyle />
            <Content>
                {children}
            </Content>
            { isPage &&  <BackBtn /> }
            <SEO 
                seoTitle={seoTitle} seoDescription={seoDescription} seoImage={seoImage} seoUrl={seoUrl}
            />
        </Wrapper>
    )
};

export default SiteWrapper;
