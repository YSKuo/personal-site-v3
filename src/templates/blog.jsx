import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Container, Grid, Button, IconButton, Hidden } from "@material-ui/core";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import renderPaging from "../utils/renderPaging";

function Blog({ pageContext, data, location }) {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <SEO />
      <Container>
        <PostListing postEdges={postEdges} />
        {renderPaging("blog", pageContext, location)}
      </Container>
    </Layout>
  );
}

export default Blog;

/* eslint no-undef: "off" */
export const blogQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
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
            language
            featured
          }
        }
      }
    }
  }
`;
