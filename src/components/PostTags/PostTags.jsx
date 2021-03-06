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
import { Tags, TagContainer, Tag } from "../Tag/Tag";

function PostTags({ tags }) {
  return (
    <Tags container disableGutters>
      {tags &&
        tags.map((tag) => (
          <TagContainer item>
            <Tag
              key={tag}
              href={`/tags/${_.kebabCase(tag)}`}
              variant="contained"
              disableElevation
            >
              #{tag}
            </Tag>
          </TagContainer>
        ))}
    </Tags>
  );
}

export default PostTags;
