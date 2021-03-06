import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Home from "../components/Pages/HomePage";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

function HomePage({ pageContext, data, location }) {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <SEO />
      <Home config={config} featuredPostEdges={postEdges} />
    </Layout>
  );
}

export default HomePage;

/* eslint no-undef: "off" */
export const homeQuery = graphql`
  query HomeQuery($limit: Int!, $featured: Boolean!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { featured: { eq: $featured } } }
      limit: $limit
    ) {
      edges {
        node {
          fields {
            slug
            date
            excerpt
          }
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
            category
            featured
          }
        }
      }
    }
  }
`;
