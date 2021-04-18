import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { 
  AppBar, 
  Menu, 
  MenuItem, 
  IconButton, 
  List,
  ListItem,
} from '@material-ui/core';

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          strapiGlobal {
            siteName
          }
          allStrapiPage(filter: {menu: {eq: true}}) {
            edges {
              node {
                hero {
                  title
                }
                slug
              }
            }
          }
        }
      `}
      render={(data) => (
        <AppBar position="sticky">
          <Link to="/">{data.strapiGlobal.siteName}</Link>
          <IconButton 
            aria-controls="menu" 
            aria-haspopup="true" 
            onClick={handleClick} 
            color="primary">
            Open
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}>
            <MenuItem>abc</MenuItem>
          </Menu>
          <List>
          {data.allStrapiPage.edges.map(page => (
              <ListItem key={`page__${page.node.hero.title}`}>
                  <Link to={page.node.slug}>
                    {page.node.hero.title} 
                  </Link>
              </ListItem>
            ))}
          </List>
        </AppBar>
      )}
    />
  )
};

export default Nav;
