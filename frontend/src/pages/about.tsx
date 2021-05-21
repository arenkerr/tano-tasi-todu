import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';

import Hero from '../components/hero';
import Description from '../components/description';

export const query = graphql`
  query {
    strapiAbout {
      hero {
        title
        cover {
          childImageSharp {
            fluid {
              src
            }
          }
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
    strapiPeople {
      bio
      name
      photo {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {},
});

const About = ({ data }) => {
  const about = data.strapiAbout;
  const seo = data.strapiAbout.seo;
  const classes = useStyles();
  console.log({ data });
  return (
    <Layout seo={seo}>
      <Hero hero={about.hero} />
      <Container>
        <Description source={about.content.body} />
        <img src={data.strapiPeople.photo.publicURL} />
      </Container>
    </Layout>
  );
};

export default About;
