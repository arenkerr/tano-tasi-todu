import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container, Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';

import Hero from '../components/hero';
import Description from '../components/description';
import tTheme from '../theme';

export const query = graphql`
  query {
    strapiAbout {
      hero {
        title
        gradientOverlay
        cover {
          url
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
    allStrapiPeople {
      nodes {
        bio
        name
        photo {
          url
        }
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {},
  spacer: {
    marginTop: '4rem',
  },
  image: {
    maxWidth: '100%',
  },
  name: {
    color: tTheme.theme.palette.primary.dark,
  },
  person: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const About = ({ data }) => {
  const classes = useStyles();

  const about = data.strapiAbout;
  const seo = data.strapiAbout.seo;
  const people = data.allStrapiPeople.nodes;
  console.log({ data });
  return (
    <Layout seo={seo}>
      <Hero hero={about.hero} />
      <Container>
        <Description source={about.content.body} />
        <Divider className={classes.spacer} />
        {people.map((person) => (
          <Grid container spacing={4} className={classes.spacer}>
            <Grid className={classes.person} item md={3}>
              <img src={person.photo.url} alt={person.name} className={classes.image} />
            </Grid>
            <Grid item md={9}>
              <Typography variant="subtitle2" className={classes.name}>
                {person.name}
              </Typography>
              <Typography variant="body1">{person.bio}</Typography>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Layout>
  );
};

export default About;
