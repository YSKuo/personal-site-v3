import React from "react";
import _ from "lodash";
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

const Tags = styled(Grid)`
  margin-bottom: 2rem;
`;

const TagContainer = styled(Grid)`
  padding: 0.25rem;
`;

function PostTags({ tags }) {
  return (
    <Tags container disableGutters>
      {tags &&
        tags.map((tag) => (
          <TagContainer item>
            <Button
              key={tag}
              href={`/tags/${_.kebabCase(tag)}`}
              variant="contained"
              disableElevation
            >
              #{tag}
            </Button>
          </TagContainer>
        ))}
    </Tags>
  );
}

export default PostTags;
