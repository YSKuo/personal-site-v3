import React from "react";
import _ from "lodash";
import { Tags, TagContainer, Tag } from "../Tag/Tag";

function PostTags({ tags }) {
  return (
    <Tags container>
      {tags &&
        tags.map((tag, index) => (
          <TagContainer key={index} item>
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
