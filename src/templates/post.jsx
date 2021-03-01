import React, { useState } from "react";
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
  Divider,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import Layout from "../layout";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function PostTemplate({ data, pageContext }) {
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  const [isShowDisqus, setIsShowDisqus] = useState(false);

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" display="inline" gutterBottom>
          {post.title}
        </Typography>
        {/* eslint-disable-next-line react/no-danger */}
        <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <PostTags tags={post.tags} />
        {isShowDisqus ? (
          <Disqus postNode={postNode} />
        ) : (
          <ButtonContainer>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<CommentIcon />}
              onClick={() => setIsShowDisqus(true)}
            >
              Disqus
            </Button>
          </ButtonContainer>
        )}
      </Container>
    </Layout>
  );
}

const Content = styled.div`
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.typography.fontFamily};

  h1 {
    font-weight: 300;
    line-height: 1.167;
    letter-spacing: -0.01562em;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-weight: 300;
    line-height: 1.2;
    letter-spacing: -0.00833em;
    margin: 2rem 0;
  }
  h3 {
    font-weight: 400;
    line-height: 1.167;
    letter-spacing: 0em;
  }
  h4 {
    font-weight: 400;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  h5 {
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
  }
  h6 {
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
  li p {
    font-weight: initial;
    font-size: initial;
    line-height: initial;
    letter-spacing: initial;
  }
  a {
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
