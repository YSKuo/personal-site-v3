import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Container, Button } from "@material-ui/core";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import renderPaging from "../utils/renderPaging";

export default function CategoryTemplate({ pageContext, data, location }) {
  const { category } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  // console.log(pageContext);

  return (
    <Layout>
      <Helmet title={`Posts in category "${category}" | ${config.siteTitle}`} />
      <SEO />
      <Container>
        <CategoryTitle variant="outlined" startIcon={<FolderOutlinedIcon />}>
          {category}
        </CategoryTitle>
        <PostListing postEdges={postEdges} />
        {/* {renderPaging("category", pageContext, location)} */}
      </Container>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
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

const CategoryTitle = styled(Button)`
  margin-bottom: 2rem;
  text-transform: none;
`;
