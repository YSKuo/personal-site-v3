import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import About from "../components/Pages/AboutPage";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

function AboutPage() {
  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <SEO />
      <About config={config} />
    </Layout>
  );
}

export default AboutPage;
