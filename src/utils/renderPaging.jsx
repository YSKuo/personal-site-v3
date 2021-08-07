import React from "react";
import styled from "styled-components";
import { Grid, Button, IconButton, Hidden } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function renderPaging(pageName, pageContext, location) {
  const { currentPageNum, pageCount } = pageContext;
  const prevPage =
    currentPageNum - 1 === 1
      ? `/${pageName}`
      : `/${pageName}/${currentPageNum - 1}/`;
  const nextPage = `/${pageName}/${currentPageNum + 1}/`;
  const isFirstPage = currentPageNum === 1;
  const isLastPage = currentPageNum === pageCount;
  const currentPage = location.pathname.match(/[0-9]+/)
    ? Number(location.pathname.match(/[0-9]+/))
    : 1;

  return (
    <Grid container component="nav" alignItems="center">
      <PaginationPreviousButton item xs={6} sm={2}>
        {!isFirstPage && (
          <Button
            href={prevPage}
            color="primary"
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
          >
            Previous
          </Button>
        )}
      </PaginationPreviousButton>

      <Hidden xsDown>
        <Grid item sm={8}>
          <PaginationList>
            {[...Array(pageCount)].map((_val, index) => {
              const pageNum = index + 1;
              if (
                pageNum === 1 ||
                pageNum === pageCount ||
                pageNum === currentPage ||
                pageNum === currentPage + 1 ||
                pageNum === currentPage - 1
              ) {
                return (
                  <PaginationNumber key={`${pageName}-page-${pageNum}`}>
                    <PaginationLink
                      variant={pageNum === currentPage ? "contained" : "text"}
                      size={pageNum === currentPage ? "medium" : "small"}
                      color={pageNum === currentPage ? "secondary" : "default"}
                      href={
                        pageNum === 1
                          ? `/${pageName}`
                          : `/${pageName}/${pageNum}/`
                      }
                      disableElevation
                    >
                      {pageNum}
                    </PaginationLink>
                  </PaginationNumber>
                );
              }
              if (pageNum === currentPage + 2 || pageNum === currentPage - 2) {
                return (
                  <PaginationNumber key={`${pageName}-page-${pageNum}`}>
                    <IconButton title="ellipsis" disabled>
                      <MoreHorizIcon />
                    </IconButton>
                  </PaginationNumber>
                );
              }
            })}
          </PaginationList>
        </Grid>
      </Hidden>
      <PaginationNextButton item xs={6} sm={2}>
        {!isLastPage && (
          <Button
            href={nextPage}
            color="primary"
            variant="outlined"
            endIcon={<ArrowForwardIosIcon />}
          >
            Next
          </Button>
        )}
      </PaginationNextButton>
    </Grid>
  );
}

export default renderPaging;

const PaginationList = styled.ul`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
const PaginationNumber = styled.li``;
const PaginationLink = styled(Button)`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  min-width: initial;
  padding: 0 0.5rem;
  margin: 0 1rem;
`;

const PaginationPreviousButton = styled(Grid)`
  text-align: start;
`;

const PaginationNextButton = styled(Grid)`
  text-align: end;
`;
