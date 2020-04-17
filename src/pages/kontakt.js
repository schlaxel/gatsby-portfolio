import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SiteWrapper from '../components/siteWrapper';
import SocialIcons from '../components/socialIcons';
import Portrait from '../components/portrait';
import { graphql } from 'gatsby';

const Content = styled.div`
    margin-top: 50px;
    font-size: 1em;
    h2 {
        font-size: 1.5em;
        font-weight: 100;
    }
    a {
        color: ${props => props.theme.font};
    }
`

const Kontakt = (props) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      setTimeout(() => { 
        setIsReady(true);
      }, 1500);
    }, [setIsReady]);

    return (
        <SiteWrapper isPage>
            { isReady &&
            <div>
            <Portrait />
            <SocialIcons animate />
            <section className="animated delay-2s fadeInUp slow">
                <h1>Impressum</h1>
                <Content 
                    dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} 
                />
            </section>
            </div> 
            }
        </SiteWrapper>
    );
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "kontakt" } }) {
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

export default Kontakt;