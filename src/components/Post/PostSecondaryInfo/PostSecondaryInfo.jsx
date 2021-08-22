import React from "react";
import styled from "styled-components";
import _ from "lodash";
import { Typography, Button, Chip } from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../../constants/breakpoint";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";

function PostSecondaryInfo({ post }) {
  return (
    <InfoContainer>
      <TimeInfo variant="inherit" component="p" display="inline">
        {post.date.slice(0, 10)} · {post.timeToRead} min read
      </TimeInfo>
      <CategoryInfo>
        {post.category && (
          <CategoryLink
            variant="outlined"
            startIcon={<FolderOutlinedIcon />}
            href={`/categories/${_.kebabCase(post.category)}`}
          >
            {post.category}
          </CategoryLink>
        )}
        {post.featured && <FeaturedChip label="Featured Post" />}
      </CategoryInfo>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${mediaQueryBreakpoint("sm")} {
    flex-direction: row;
    align-items: center;
  }
`;

const TimeInfo = styled(Typography)`
  margin-bottom: 1rem;
  font-weight: bold;

  ${mediaQueryBreakpoint("sm")} {
    margin-bottom: 0rem;
    margin-right: 1rem;
  }
`;

const CategoryInfo = styled.div``;

const CategoryLink = styled(Button)`
  width: fit-content;
  text-transform: none;
  margin-right: 1rem;
`;

const FeaturedChip = styled(Chip)`
  width: fit-content;
`;

export default PostSecondaryInfo;
