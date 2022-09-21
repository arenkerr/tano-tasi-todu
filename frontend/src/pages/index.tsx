import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import HomeHero from '../components/homeHero';
import Projects from '../components/projects';

const IndexPage = () => {
  const { strapiHomepage, allStrapiProject, strapiGlobal } = useStaticQuery(query);

  return (
    <Layout seo={strapiHomepage.seo}>
      <HomeHero hero={{ ...strapiHomepage.hero, logo: { ...strapiGlobal.logo } }} />
      <Projects projects={allStrapiProject.nodes} />
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
          alternativeText
        }
      }
    }
    strapiGlobal {
      logo {
        url
        alternativeText
      }
    }
  }
`;

export default IndexPage;
