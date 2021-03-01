import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import { Container, Grid, Button, IconButton, Hidden } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default function TagTemplate({ pageContext, data }) {
  const { tag } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;

  const TagContainer = styled.div`
    margin-bottom: 3rem;
  `;

  return (
    <Layout>
      <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
      <SEO />
      <Container maxWidth="md">
        <TagContainer>
          <Button variant="contained" disableElevation>
            #{tag}
          </Button>
        </TagContainer>

        <PostListing postEdges={postEdges} />
      </Container>
    </Layout>
  );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
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
