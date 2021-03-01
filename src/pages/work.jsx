import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layout";

import config from "../../data/SiteConfig";

function AboutPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`Work | ${config.siteTitle}`} />
      </div>
    </Layout>
  );
}

export default AboutPage;
