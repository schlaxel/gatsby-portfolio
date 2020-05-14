import React from "react";
import styled, { createGlobalStyle } from 'styled-components';
import SEO from './seo';
import Footer from './footer';
import Animation from '../animation';

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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    width: 100%;
    flex: 1;
    ${props => props.withFooter && `
        padding-bottom: 70px;
        box-sizing: border-box;
    `}
`

const SiteWrapperBlank = ({ children, isPage, wasPage, seoTitle, seoDescription, seoImage, seoUrl, withFooter }) => {    
    return (
        <Wrapper>
            <Animation />
            <GlobalStyle />
            <SEO 
                seoTitle={seoTitle} seoDescription={seoDescription} seoImage={seoImage} seoUrl={seoUrl}
            />
            <Content withFooter={withFooter}>
                {children}
            </Content>
            { withFooter && <Footer /> }
        </Wrapper>
    )
};

export default SiteWrapperBlank;
