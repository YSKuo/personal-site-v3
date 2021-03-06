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
import fontSizeRWD from "../utils/fontSizeRWD";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import PostSecondaryInfo from "../components/Post/PostSecondaryInfo";
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
      <Container>
        <Typography variant="h1" component="h1" gutterBottom>
          {post.title}
        </Typography>
        <PostSecondaryInfo
          post={{ timeToRead: postNode.timeToRead, ...post }}
        />
        {/* eslint-disable-next-line react/no-danger */}
        <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
        <PostTags tags={post.tags} />
        {/* {isShowDisqus ? (
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
        )} */}
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

const Content = styled.div`
  margin-bottom: 2rem;
  font-family: ${(props) => props.theme.typography.fontFamily};

  ${fontSizeRWD("h1", ["4xl", "5xl", "6xl"])}
  ${fontSizeRWD("h2", ["3xl", "4xl", "5xl"])}
  ${fontSizeRWD("h3", ["2xl", "3xl", "4xl"])}
  ${fontSizeRWD("h4", ["xl", "2xl", "3xl"])}
  ${fontSizeRWD("h5", ["lg", "xl", "2xl"])}
  ${fontSizeRWD("h6", ["md", "lg", "xl"])}
  ${fontSizeRWD("p", ["sm", "md", "lg"])} 
  ${fontSizeRWD("li", ["sm", "md", "lg"])} 

  h1 {
    font-weight: ${(props) => props.theme.typography.h1.fontSize};
    line-height: ${(props) => props.theme.typography.h1.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h1.letterSpacing};
  }

  h2 {
    font-weight: ${(props) => props.theme.typography.h2.fontSize};
    line-height: ${(props) => props.theme.typography.h2.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h2.letterSpacing};
  }

  h3 {
    font-weight: ${(props) => props.theme.typography.h3.fontSize};
    line-height: ${(props) => props.theme.typography.h3.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h3.letterSpacing};
  }

  h4 {
    font-weight: ${(props) => props.theme.typography.h4.fontSize};
    line-height: ${(props) => props.theme.typography.h4.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h4.letterSpacing};
  }

  h5 {
    font-weight: ${(props) => props.theme.typography.h5.fontSize};
    line-height: ${(props) => props.theme.typography.h5.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h5.letterSpacing};
  }

  h6 {
    font-weight: ${(props) => props.theme.typography.h6.fontSize};
    line-height: ${(props) => props.theme.typography.h6.lineHeight};
    letter-spacing: ${(props) => props.theme.typography.h6.letterSpacing};
  }

  p,
  li {
    line-height: 1.5;
    letter-spacing: 0.00938em;
  }

  li,
  li p {
    margin: 0.5rem 0;
  }

  a {
    text-decoration: none;
  }

  code {
    background: #0c1021;
    color: #c5c8c6;
    font-family: "monospace";
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
