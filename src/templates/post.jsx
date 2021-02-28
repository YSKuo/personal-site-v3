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
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";

const Content = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-weight: 300;
    ${"" /* font-size: 6rem; */}
    line-height: 1.167;
    letter-spacing: -0.01562em;
  }
  h2 {
    font-weight: 300;
    ${"" /* font-size: 3.75rem; */}
    line-height: 1.2;
    letter-spacing: -0.00833em;
  }
  h3 {
    font-weight: 400;
    ${"" /* font-size: 3rem; */}
    line-height: 1.167;
    letter-spacing: 0em;
  }
  h4 {
    font-weight: 400;
    ${"" /* font-size: 2.125rem; */}
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }
  h5 {
    font-weight: 400;
    ${"" /* font-size: 1.5rem; */}
    line-height: 1.334;
    letter-spacing: 0em;
  }
  h6 {
    font-weight: 500;
    ${"" /* font-size: 1.25rem; */}
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
