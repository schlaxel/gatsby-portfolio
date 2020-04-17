import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";
import SiteWrapper from '../components/siteWrapper';
import SocialIcons from '../components/socialIcons';
import Tags from '../components/tags';
import Portrait from '../components/portrait';
import svkDark from '../img/svk_dark.png';
import svkLight from '../img/svk_light.png';

const InnerWrapper = styled.div`
    max-width: 500px;
    margin: auto;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 100px;
    display: block;
    opacity: .8;
    ${props => props.width &&
        `
            width: ${props.width}px;
            height: auto;
            border-radius: ${props.width / 2}px;
        `
    }
`
const H1 = styled.h1`
    font-weight: 400;
    font-size: 1.5em;
    text-align: left;
    margin: 30px 0 0 0;
`
const H2 = styled.h2`
    text-align: left;
    font-weight: 400;
    font-size: 1.3em;
    margin: 30px 0;
`
const H3 = styled.h3`
    text-align: left;
    font-weight: 400;
    font-size: 1.3em;
    margin: 30px 0;
`

const P = styled.p`
`
const Content = styled.div`
    margin-top: 30px;
`

const Alex = (props, { data }) => {
    
    const themeContext = useContext(ThemeManagerContext);
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        // if the last page was a page don't animate
        if(props.location.state.wasPage) {
            setIsReady(true);
        } else {
            setTimeout(() => { 
              setIsReady(true);
            }, 1500);
        }
      }, [setIsReady]);
    let imgSVK = svkLight;
    themeContext.isDark ? imgSVK = svkDark : imgSVK = svkLight;

    let wasPage = false;
    if (props.location !== undefined) {
        props.location.state.wasPage === true ? wasPage = true : wasPage = false;
    }
    

    return (
        <SiteWrapper isPage wasPage={wasPage}>
            { isReady && 
            <InnerWrapper>
                <Portrait />
                <SocialIcons animate />
                <div className="animated fadeInUp slow delay-1s">
                <H1>
                    {data.markdownRemark.frontmatter.title}
                </H1>
                <P>
                    {data.markdownRemark.frontmatter.description}
                </P>
                <H2>Technologien mit denen ich momentan überwiegend arbeite:</H2>
                <Tags tagString={data.markdownRemark.frontmatter.tags} />
                <H3>Und sonst so?</H3>
                <Image
                    style={{ marginTop: 30 }}
                    width='300'
                    src={imgSVK} alt="Fußball" 
                />
                <Content dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
            </InnerWrapper>
            }
        </SiteWrapper>
    )
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "about" } }) {
      html
      frontmatter {
        path
        title
        description
        tags
      }
    }
  }
`

export default Alex;