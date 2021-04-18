import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from '@material-ui/core/styles';

import Nav from "./nav";
import Seo from "./seo";
import "../assets/css/main.css";
import theme from "../theme";

const Layout = ({ children, seo }) => (
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
      <ThemeProvider theme={theme}>
        <Seo seo={seo} />
        <Nav />
        <main>{children}</main>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
