import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Typography } from '@material-ui/core';

import Layout from '../components/layout';
import HomeHero from '../components/homeHero';

const IndexPage = () => {
  const data = useStaticQuery(query);
  // console.log(data.strapiHomepage)
  return (
    <Layout seo={data.strapiHomepage.seo}>
      <HomeHero hero={data.strapiHomepage.hero} />
      <Box height={1200}>test</Box>
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
          publicURL
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
