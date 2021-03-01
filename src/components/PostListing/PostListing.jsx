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
import {
  breakpoints,
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../../constants/breakpoint";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";

function PostListing({ postEdges }) {
  const postList = [];
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      category: postEdge.node.frontmatter.category,
      date: postEdge.node.fields.date,
      slug: postEdge.node.fields.slug,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    });
  });

  const PostList = styled(Grid)`
    margin-bottom: 2rem;
  `;

  const Post = styled(Grid)`
    display: flex;
    flex-direction: column;
  `;

  const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    ${MEDIA_QUERY_SM} {
      flex-direction: row;
    }
  `;

  const TimeInfo = styled(Typography)`
    margin-bottom: 1rem;

    ${MEDIA_QUERY_SM} {
      margin-bottom: 0rem;
      margin-right: 1rem;
    }
  `;

  const CategoryLink = styled(Button)`
    width: fit-content;
  `;

  const PostExcerpt = styled(Typography)`
    margin-bottom: 2rem;
  `;

  const StyledDivider = styled(Divider)`
    margin: 1.5rem 0;
  `;

  return (
    <PostList container direction="column" spacing="8">
      {
        /* Your post list here. */
        postList.map((post, index) => {
          return (
            <>
              {index !== 0 && <StyledDivider />}
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

                <PostInfo>
                  <TimeInfo variant="h6" component="p" display="inline">
                    {post.date.slice(0, 10)} · {post.timeToRead} min read
                  </TimeInfo>
                  <CategoryLink
                    variant="outlined"
                    startIcon={<FolderOutlinedIcon />}
                    href={`/categories/${post.category}`}
                  >
                    {post.category}
                  </CategoryLink>
                </PostInfo>
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

export default PostListing;
