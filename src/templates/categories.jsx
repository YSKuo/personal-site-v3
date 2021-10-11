import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Container, Grid, Button, IconButton, Hidden } from "@material-ui/core";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO";
import config from "../../data/SiteConfig";
import renderPaging from "../utils/renderPaging";

function Categories({ pageContext, data, location }) {
  const postEdges = data.allMarkdownRemark.edges;
  console.log(postEdges);
  return (
    <Layout>
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <SEO />
      <Container>
        <PostListing postEdges={postEdges} />
        {/* {renderPaging("blog", pageContext, location)} */}
      </Container>
    </Layout>
  );
}

export default Categories;

/* eslint no-undef: "off" */
export const categoriesQuery = graphql`
  query CategoriesQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`;
