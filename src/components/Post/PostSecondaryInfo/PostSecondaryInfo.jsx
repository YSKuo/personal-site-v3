import React from "react";
import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import { mediaQueryBreakpoint } from "../../../constants/breakpoint";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";

function PostSecondaryInfo({ post }) {
  return (
    <InfoContainer>
      <TimeInfo variant="h6" component="p" display="inline">
        {post.date.slice(0, 10)} · {post.timeToRead} min read
      </TimeInfo>
      {post.category && (
        <CategoryLink
          variant="outlined"
          startIcon={<FolderOutlinedIcon />}
          href={`/categories/${post.category}`}
        >
          {post.category}
        </CategoryLink>
      )}
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${mediaQueryBreakpoint("sm")} {
    flex-direction: row;
  }
`;

const TimeInfo = styled(Typography)`
  margin-bottom: 1rem;

  ${mediaQueryBreakpoint("sm")} {
    margin-bottom: 0rem;
    margin-right: 1rem;
  }
`;

const CategoryLink = styled(Button)`
  width: fit-content;
  text-transform: none;
`;

export default PostSecondaryInfo;
