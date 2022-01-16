import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import HomeHero from '../components/homeHero';
import Projects from '../components/projects';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <HomeHero hero={data.strapiHomepage.hero} />
      <Projects projects={data.allStrapiProject.nodes} />
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
    allStrapiProject {
      nodes {
        title
        description
        image {
          url
        }
      }
    }
  }
`;

export default IndexPage;
