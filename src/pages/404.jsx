import React from "react";

import { Helmet } from "react-helmet";
import Layout from "../layout";
import { Container } from "@material-ui/core";

import config from "../../data/SiteConfig";
import { Section, SectionTitle, P, A } from "../components/Section/Section";

function NotFoundPage() {
  return (
    <Layout>
      <Helmet title={`Error 404 (Not Found) | ${config.siteTitle}`} />
      <Container>
        <Section>
          <SectionTitle>Content not found.</SectionTitle>
          <P>
            404. That’s an error. Let go <A href="/">Home</A> .
          </P>
        </Section>
      </Container>
    </Layout>
  );
}

export default NotFoundPage;
