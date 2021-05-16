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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CommentIcon from "@material-ui/icons/Comment";
import Layout from "../layout";
import fontSizeRWD from "../utils/fontSizeRWD";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import PostSecondaryInfo from "../components/Post/PostSecondaryInfo";
import config from "../../data/SiteConfig";

import { mediaQueryBreakpoint } from "../constants/breakpoint";

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export default function PostTemplate({ data, pageContext }) {
  const { slug, nexttitle, nextslug, prevtitle, prevslug } = pageContext;
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
        <article>
          <Typography variant="h1" component="h1" gutterBottom>
            {post.title}
          </Typography>
          <PostSecondaryInfo
            post={{ timeToRead: postNode.timeToRead, ...post }}
          />
          {/* eslint-disable-next-line react/no-danger */}
          <Content dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <PostTags tags={post.tags} />
          <PostButtonContainer>
            {prevslug ? (
              <PrePostButton
                href={`/post/${prevslug}`}
                color="primary"
                size="large"
                startIcon={<ArrowBackIosIcon />}
              >
                {prevtitle}
              </PrePostButton>
            ) : (
              <div></div>
            )}
            {nextslug ? (
              <NextPostButton
                href={`/post/${nextslug}`}
                color="primary"
                size="large"
                endIcon={<ArrowForwardIosIcon />}
              >
                {nexttitle}
              </NextPostButton>
            ) : (
              <div></div>
            )}
          </PostButtonContainer>
          <Typography variant="h3" component="h3">
            Comment
          </Typography>
          {isShowDisqus ? (
            <Disqus postNode={postNode} />
          ) : (
            <DisqusButtonContainer>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<CommentIcon />}
                onClick={() => setIsShowDisqus(true)}
              >
                Disqus
              </Button>
            </DisqusButtonContainer>
          )}
        </article>
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

const Content = styled.section`
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
  ${fontSizeRWD("span", ["sm", "md", "lg"])} 

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

  img {
    display: block;
    max-width: 100%;
    margin: 2rem auto;

    ${mediaQueryBreakpoint("sm")} {
      margin: 4rem auto;
    }
  }

  div.deckgo-highlight-code-container {
  }

  code {
    background: rgba(242, 242, 242, 1);
    font-family: 'Menlo, Monaco, "Courier New", Courier, monospace';
    font-size: 90%;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-font-size: ${(props) =>
      props.theme.typography.body1.fontSize};
  }

  blockquote {
    color: rgba(117, 117, 117, 1);
    ${fontSizeRWD("p", ["md", "lg", "xl"])}
  }
`;

const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;

  ${mediaQueryBreakpoint("sm")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const PostButton = styled(Button)`
  display: flex;
  justify-content: center;
  text-transform: none;

  ${mediaQueryBreakpoint("sm")} {
    max-width: 50%;
    justify-content: space-between;
  }
`;

const PrePostButton = styled(PostButton)`
  margin-bottom: 1rem;

  ${mediaQueryBreakpoint("sm")} {
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const NextPostButton = styled(PostButton)`
  ${mediaQueryBreakpoint("sm")} {
    justify-content: flex-end;
  }
`;

const DisqusButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
