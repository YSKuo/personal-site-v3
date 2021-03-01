import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import Home from "../components/Pages/HomePage";
import config from "../../data/SiteConfig";
import SEO from "../components/SEO/SEO";

function IndexPage() {
  return (
    <>
      <Layout>
        <Helmet title={`Home | ${config.siteTitle}`} />
        <SEO />
        <Home config={config} />
      </Layout>
    </>
  );
}

export default IndexPage;
