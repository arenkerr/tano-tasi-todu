import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown';

import tTheme from '../theme';

const useStyles = makeStyles({
  root: {
    backgroundImage: (hero: any) => `url(${hero.cover.url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: `calc(100vh - ${tTheme.size.appBar}px)`,
    [tTheme.theme.breakpoints.down('sm')]: {
      minHeight: `calc(100vh - ${tTheme.size.appBarMobile}px)`,
    },
    [tTheme.theme.breakpoints.down('xs')]: {
      minHeight: '110vh',
    },
  },
  logoContainer: {
    width: '100%',
    maxHeight: 360,
  },
  logo: {
    width: '65%',
    [tTheme.theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [tTheme.theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  overlay: {
    backgroundImage: (hero) =>
      hero.gradientOverlay ? hero.gradientOverlay : `linear-gradient(#00107dcc, #ffffff00)`,
    opacity: 0.65,
    height: `calc(100vh - ${tTheme.size.appBar}px)`,
    width: '100%',
    [tTheme.theme.breakpoints.down('sm')]: {
      minHeight: `100%`,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: tTheme.size.appBar,
    width: '100%',
    height: `calc(100vh - ${tTheme.size.appBar}px)`,
    textShadow: '1px 1px 17px #0000004f',
    [tTheme.theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
      marginTop: '2rem',
      minHeight: `100%`,
    },
    [tTheme.theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  description: {
    lineHeight: '1.75rem',
    marginTop: '2rem',
    maxWidth: 900,
    color: tTheme.theme.palette.text.secondary,
    [tTheme.theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  button: {
    width: '100%',
  },
});

const HomeHero = ({ hero }) => {
  const classes = useStyles(hero);

  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.content}>
        <Container>
          <Grid container spacing={2}>
            <div className={classes.logoContainer}>
              <img src={hero.logo.url} alt={hero.logo.alternativeText} className={classes.logo} />
            </div>
            <Grid item xs={12} className={classes.description}>
              <Markdown children={hero.description} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="/about"
                className={classes.button}
              >
                About Us
              </Button>
            </Grid>
            <Grid item md={3} xs={12}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                href="/our-work"
                className={classes.button}
              >
                Our Work
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomeHero;
