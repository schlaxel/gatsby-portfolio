import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import ogimage from '../img/og-image.jpg';

const SEO = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                  title
                  author
                  siteUrl
                  description
                }
            }
        }
    `)

    const seo = {
        title: props.seoTitle || data.site.siteMetadata.title,
        description: props.seoDescription || data.site.siteMetadata.description,
        url: props.seoPath ? `${data.site.siteMetadata.siteUrl}${props.path}` : data.site.siteMetadata.siteUrl,
        image: props.seoImage || ogimage
    }
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{ seo.title }</title>
            <meta name="description" content={seo.description} />
            <meta property="og:url" content={seo.url} />
            <meta name="image" content={`${seo.url}${seo.image}`} />
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            <meta property='og:image' content={`${seo.url}${seo.image}`} />
        </Helmet>
    )
};

export default SEO;