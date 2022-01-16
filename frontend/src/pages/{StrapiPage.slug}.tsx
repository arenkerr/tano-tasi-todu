import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container } from '@material-ui/core';

import Hero from '../components/hero';
import Description from '../components/description';
import Spacer from '../components/spacer';
import HorizontalList from '../components/horizontalList';
import Form from '../components/form';
import Projects from '../components/projects';

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
    allStrapiProject {
      nodes {
        title
        description
        image {
          url
          alternativeText
        }
      }
    }
  }
`;

const Page = ({ data }) => {
  const page = data.strapiPage;
  const seo = data.strapiPage.seo;
  const projects = data.allStrapiProject.nodes;

  return (
    <Layout seo={seo}>
      <Hero hero={page.hero} />
      <Container>{page.content && <Description source={page.content.body} />}</Container>
      <Spacer />
      {page.horizontalList && <HorizontalList list={page.horizontalList.listItem} />}
      {page.slug === 'contact' && <Form />}
      {page.slug === 'our-work' && <Projects projects={projects} />}
    </Layout>
  );
};

export default Page;
