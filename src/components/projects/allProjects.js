import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';

const Wrapper = styled.div`

`

const AllProjects = ({ wasPage }) => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {collection: {eq: "projects"}},
                sort: {fields: frontmatter___order}
                ) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            title
                            tags
                            gplay
                            astore
                            website
                            github
                            thumbnail { 
                                childImageSharp {
                                    fluid(maxWidth: 550) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            logo { 
                                childImageSharp {
                                    fluid(maxWidth: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        collection
                    }
                }
            }
        }
    `)

    return (
        <Wrapper className={`${!wasPage && 'delay-1s '} animated fadeInUp slow`}>
            {
                data.allMarkdownRemark.edges.map(edge =>
                    <Project key={edge.node.id} node={edge.node} />
                )
            }
        </Wrapper>
    );
};

export default AllProjects;