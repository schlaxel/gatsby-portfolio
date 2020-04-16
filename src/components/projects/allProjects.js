import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';

const Wrapper = styled.div`

`

const AllProjects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {collection: {eq: "projects"}}) {
                edges {
                    node {
                        id
                        frontmatter {
                        title
                        }
                        collection
                    }
                }
            }
        }
    `)

    return (
        <Wrapper className="animated delay-1s fadeInUp slow">
            {
                data.allMarkdownRemark.edges.map(edge =>
                    <Project key={edge.node.id} node={edge.node} />
                )
            }
        </Wrapper>
    );
};

export default AllProjects;