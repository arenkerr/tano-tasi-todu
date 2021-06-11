import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Nav from './nav';
import Seo from './seo';
import '../assets/css/main.css';
import tTheme from '../theme';
import Footer from './footer';

const useStyles = makeStyles({
  root: {
    minHeight: `calc(100vh - ${tTheme.size.appBar}px)`,
    [tTheme.theme.breakpoints.down('xs')]: {
      minHeight: `calc(100vh - ${tTheme.size.appBarMobile}px)`,
    },
  },
});

const Layout = ({ children, seo }) => {
  const classes = useStyles();

  return (
    <StaticQuery
      query={graphql`
        query {
          strapiHomepage {
            seo {
              metaTitle
              metaDescription
            }
          }
        }
      `}
      render={(data) => (
        <ThemeProvider theme={tTheme.theme}>
          <CssBaseline />
          <Seo seo={seo} />
          <Nav />
          <main className={classes.root}>{children}</main>
          <Footer />
        </ThemeProvider>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
