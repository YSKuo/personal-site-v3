import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Container from "@material-ui/core/Container";

function IndexPage() {
  return (
    <>
      <Layout>
        <Container disableGutters>Test</Container>
      </Layout>
    </>
  );
}

export default IndexPage;
