import React from 'react';
import Markdown from 'react-markdown';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Container, Grid, Divider, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';

import Hero from '../components/hero';
import Description from '../components/description';
import Footer from '../components/footer';
import Spacer from '../components/spacer';
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
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    minWidth: '60%',
  },
});

const About = ({ data }) => {
  const classes = useStyles();

  const about = data.strapiAbout;
  const seo = data.strapiAbout.seo;
  const people = data.allStrapiPeople.nodes;

  return (
    <Layout seo={seo}>
      <Hero hero={about.hero} />
      <Container>
        <Description source={about.content.body} />
        <Spacer />
        <Divider />
        <Spacer />
        {people.map((person) => (
          <>
            <Grid container spacing={4}>
              <Grid className={classes.person} item md={3}>
                <img src={person.photo.url} alt={person.name} className={classes.image} />
              </Grid>
              <Grid item md={9}>
                <Typography variant="subtitle2" className={classes.name}>
                  {person.name}
                </Typography>
                <Markdown children={person.bio} />
              </Grid>
            </Grid>
            <Spacer />
          </>
        ))}
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} className={classes.buttonGroup}>
            <Button variant="contained" size="large" color="primary" href="/our-work" className={classes.button}>
              Our Work
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              href="mailto:email@email.com"
              className={classes.button}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
        <Spacer />
      </Container>
      <Footer />
    </Layout>
  );
};

export default About;
