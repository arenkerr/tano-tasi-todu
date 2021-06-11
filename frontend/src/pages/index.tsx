import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import HomeHero from '../components/homeHero';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <HomeHero hero={data.strapiHomepage.hero} />
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
        description
        gradientOverlay
        cover {
          url
        }
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

export default IndexPage;
