import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Grid, Icon, List, ListItem, makeStyles, Typography } from '@material-ui/core';
import { Facebook, Instagram, Twitter, YouTube, LinkedIn } from '@material-ui/icons';

import tTheme from '../theme';

export const query = graphql`
  query {
    strapiGlobal {
      siteName
    }
    strapiFooter {
      social {
        site
        url
      }
    }
  }
`;

const useStyles = makeStyles({
  root: {
    backgroundColor: '#2F2E2E',
    margin: 0,
    color: tTheme.theme.palette.primary.contrastText,
    textAlign: 'center',
    padding: '4em',
  },
  siteName: {
    marginTop: 24,
    textTransform: 'uppercase',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Footer = () => {
  const data = useStaticQuery(query);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.icons} spacing={2}>
          {data.strapiFooter.social.map((item) => {
            switch (item.site) {
              case 'facebook':
                return (
                  <Grid item key="facebook">
                    <Facebook fontSize="large" />
                  </Grid>
                );
              case 'instagram':
                return (
                  <Grid item key="instagram">
                    <Instagram fontSize="large" />
                  </Grid>
                );
              case 'twitter':
                return (
                  <Grid item key="twitter">
                    <Twitter fontSize="large" />
                  </Grid>
                );
              case 'youTube':
                return (
                  <Grid item key="youTube">
                    <YouTube fontSize="large" />
                  </Grid>
                );
              case 'linkedIn':
                return (
                  <Grid item key="linkedIn">
                    <LinkedIn fontSize="large" />
                  </Grid>
                );
            }
          })}
        </Grid>
        <div className={classes.siteName}>
          <Typography variant="caption">©&nbsp;{data.strapiGlobal.siteName}</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
