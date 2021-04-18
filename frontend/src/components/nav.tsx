import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { 
  AppBar, 
  Menu, 
  MenuItem, 
  IconButton, 
  List,
  ListItem,
  makeStyles
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
        // <div>
        //   <div>
        //     <nav className="uk-navbar-container" data-uk-navbar>
        //       <div className="uk-navbar-left">
        //         <ul className="uk-navbar-nav">
        //           <li>
        //             <Link to="/">{data.strapiGlobal.siteName}</Link>
        //           </li>
        //         </ul>
        //       </div>
        //       <div className="uk-navbar-right">
        //         <button
        //           className="uk-button uk-button-default uk-margin-right"
        //           type="button"
        //         >
        //           Pages
        //         </button>
        //         <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
        //           <ul className="uk-nav uk-dropdown-nav">
        //             {data.allStrapiPage.edges.map(page => (
        //               <li key={`page__${page.node.hero.title}`}>
        //                   <Link to={page.node.slug}>
        //                     {page.node.hero.title} 
        //                   </Link>
        //               </li>
        //             ))}
        //           </ul>
        //         </div>
        //       </div>
        //     </nav>
        //   </div>
        // </div>
        <AppBar position="sticky">
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
