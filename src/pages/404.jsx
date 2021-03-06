import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Layout from "../layout";
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
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {
  Section,
  SectionTitle,
  SectionSubtitle,
  P,
  B,
  A,
} from "../components/Section/Section";

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
