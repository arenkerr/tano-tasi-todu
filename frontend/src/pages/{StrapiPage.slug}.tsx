import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import Spacer from '../components/spacer';
import HorizontalList from '../components/horizontalList';
// import Form from '../components/form';

export const query = graphql`
  query PageQuery($slug: String!) {
    strapiPage(slug: { eq: $slug }) {
      slug
      hero {
        title
        cover {
          url
        }
      }
      content {
        body
      }
      horizontalList {
        listItem {
          text
          title
        }
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
  console.log(page.slug === 'contact');
  return (
    <Layout seo={seo}>
      <Hero hero={page.hero} />
      <Container>{page.content && <Description source={page.content.body} />}</Container>
      <Spacer />
      {page.horizontalList && <HorizontalList list={page.horizontalList.listItem} />}
      <Spacer />
      {/* {page.slug === 'contact' && <Form />} */}
      <Footer />
    </Layout>
  );
};

export default Page;
