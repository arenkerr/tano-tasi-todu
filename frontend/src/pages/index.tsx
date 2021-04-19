import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';

import Layout from '../components/layout';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <Typography variant='h1' color='textPrimary'>{data.strapiHomepage.hero.title}</Typography>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

export default IndexPage;
