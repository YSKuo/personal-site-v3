import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import {
  Container,
  Toolbar,
  Grid,
  Typography,
  Link,
  Button,
  IconButton,
  Hidden,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function Blog({ pageContext, data }) {
  function renderPaging() {
    const { currentPageNum, pageCount } = pageContext;
    const prevPage =
      currentPageNum - 1 === 1 ? "/blog" : `/blog/${currentPageNum - 1}/`;
    const nextPage = `/blog/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;
    const currentPage = location.pathname.match(/[0-9]+/)
      ? Number(location.pathname.match(/[0-9]+/))
      : 1;

    const PaginationList = styled.ul`
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      list-style: none;
    `;
    const PaginationLinkContainer = styled.li``;
    const PaginationLink = styled(Button)`
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      min-width: initial;
      padding: 0 0.5rem;
      margin: 0 1rem;
    `;

    const PaginationButton = styled(Grid)`
      text-align: center;
    `;

    return (
      <Grid container alignItems="center">
        <PaginationButton item xs={6} sm={1}>
          {!isFirstPage && (
            <IconButton href={prevPage} color="primary" variant="outlined">
              <ArrowBackIosIcon />
            </IconButton>
          )}
        </PaginationButton>

        <Hidden xsDown>
          <Grid item sm={10}>
            <PaginationList>
              {[...Array(pageCount)].map((_val, index) => {
                const pageNum = index + 1;
                if (
                  pageNum === 1 ||
                  pageNum === pageCount ||
                  pageNum === currentPage ||
                  pageNum === currentPage + 1 ||
                  pageNum === currentPage - 1
                ) {
                  return (
                    <PaginationLinkContainer key={`blog-page-${pageNum}`}>
                      <PaginationLink
                        variant={pageNum === currentPage ? "contained" : "text"}
                        size={pageNum === currentPage ? "medium" : "small"}
                        color={
                          pageNum === currentPage ? "secondary" : "default"
                        }
                        href={pageNum === 1 ? "/blog" : `/blog/${pageNum}/`}
                        disableElevation
                      >
                        {pageNum}
                      </PaginationLink>
                    </PaginationLinkContainer>
                  );
                }
                if (
                  pageNum === currentPage + 2 ||
                  pageNum === currentPage - 2
                ) {
                  return (
                    <PaginationLinkContainer key={`blog-page-${pageNum}`}>
                      <IconButton disabled>
                        <MoreHorizIcon />
                      </IconButton>
                    </PaginationLinkContainer>
                  );
                }
              })}
            </PaginationList>
          </Grid>
        </Hidden>
        <PaginationButton item xs={6} sm={1}>
          {!isLastPage && (
            <IconButton href={nextPage} color="primary" variant="outlined">
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </PaginationButton>
      </Grid>
    );
  }

  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <SEO />
      <Container>
        <div className="posts-container">
          <PostListing postEdges={postEdges} />
        </div>
        {renderPaging()}
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
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
