import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container } from '@material-ui/core';

import Hero from '../components/hero';
import Description from '../components/description';
import Spacer from '../components/spacer';
import HorizontalList from '../components/horizontalList';
import Form from '../components/form';

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

const Page = ({ data }) => {
  const page = data.strapiPage;
  const seo = data.strapiPage.seo;

  return (
    <Layout seo={seo}>
      <Hero hero={page.hero} />
      <Container>{page.content && <Description source={page.content.body} />}</Container>
      <Spacer />
      {page.horizontalList && <HorizontalList list={page.horizontalList.listItem} />}
      <Spacer />
      {page.slug === 'contact' && <Form />}
    </Layout>
  );
};

export default Page;
