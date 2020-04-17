import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Tags from '../tags';
import { GPlay, AStore, WebLink, GitHub } from './linkBtns';

const Wrapper = styled.section`
    width: 100%;
    max-width: 550px;
    margin: auto;
    background: ${props => props.theme.darker};
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-bottom: 50px;
    border-radius: 8px;
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 1.5em;
    margin: 0 0 0 20px;
`
const LogoWrapper = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
`
const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
`
const Content = styled.p`
    padding: 10px 20px;
    box-sizing: border-box;
    font-weight: 100; 
`
const TagWrapper = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
`
const LinkWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Project = ({ node }) => {
    return (
        <Wrapper>
            <Header>
            <LogoWrapper>
                <Img fluid={node.frontmatter.logo.childImageSharp.fluid} alt={node.frontmatter.title + ' Logo'} />
            </LogoWrapper>
            <H1>{node.frontmatter.title}</H1>
            </Header>
            <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} alt={node.frontmatter.title} />
            <Content dangerouslySetInnerHTML={{ __html: node.html }} />
            <LinkWrapper>
                { node.frontmatter.astore !== null && <AStore href={node.frontmatter.astore} /> }
                { node.frontmatter.gplay !== null && <GPlay href={node.frontmatter.gplay} /> }
                { node.frontmatter.website !== null && <WebLink href={node.frontmatter.website} /> }
                { node.frontmatter.github !== null && <GitHub href={node.frontmatter.github} /> }
            </LinkWrapper>
            <TagWrapper>
                <Tags tagString={node.frontmatter.tags} contrast noMaxWidth />
            </TagWrapper>
        </Wrapper>
    );
}

export default Project;
