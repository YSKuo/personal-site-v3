import React from "react";
import styled from "styled-components";
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
import PostSecondaryInfo from "../Post/PostSecondaryInfo";
import StyledDivider from "../StyledDivider";
import { mediaQueryBreakpoint } from "../../constants/breakpoint";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      category: postEdge.node.frontmatter.category,
      date: postEdge.node.frontmatter.date || postEdge.node.fields.date,
      slug: postEdge.node.fields.slug,
      excerpt: postEdge.node.fields.excerpt || postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  return (
    <PostList container direction="column" spacing="8">
      {
        /* Your post list here. */
        postList.map((post, index) => {
          return (
            <>
              {index !== 0 && <StyledDivider yMargin="1.5rem" />}
              <Post item component="article" key={post.slug}>
                <Typography
                  variant="h3"
                  component="h1"
                  display="inline"
                  gutterBottom
                >
                  <Link
                    color="textPrimary"
                    href={`/post/${post.path}`}
                    key={post.title}
                    underline="none"
                  >
                    {post.title}
                  </Link>
                </Typography>
                <PostSecondaryInfo post={post} />
                <PostExcerpt
                  variant="body1"
                  component="p"
                  color="textPrimary"
                  paragraph
                >
                  {post.excerpt}
                </PostExcerpt>
                <Typography
                  variant="body2"
                  component="p"
                  display="inline"
                  gutterBottom
                >
                  <Button
                    color="secondary"
                    href={`/post/${post.path}`}
                    key={post.title}
                    variant="contained"
                    underline="none"
                  >
                    Read more
                  </Button>
                </Typography>
              </Post>
            </>
          );
        })
      }
    </PostList>
  );
}

const PostList = styled(Grid)`
  margin-bottom: 2rem;
`;

const Post = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const PostExcerpt = styled(Typography)`
  margin-bottom: 2rem;
`;

export default PostListing;
