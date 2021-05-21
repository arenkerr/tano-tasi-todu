import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/hero';
import Description from '../components/description';

export const query = graphql`
  query PageQuery($slug: String!) {
    strapiPage(slug: { eq: $slug }) {
      hero {
        title
        cover {
          publicURL
        }
      }
      content {
        body
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {},
});

const Page = ({ data }) => {
  const page = data.strapiPage;
  const seo = data.strapiPage.seo;
  const classes = useStyles();
  // console.log(data);
  return (
    <Layout seo={seo}>
      <Hero hero={page.hero} />
      <Container>
        <Description source={page.content.body} />
        {/* TODO: add more content options for generic pages */}
      </Container>
    </Layout>
  );
};

export default Page;
