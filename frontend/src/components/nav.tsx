import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import { 
  AppBar, 
  IconButton,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import tTheme from '../theme';
import AppMenu from './appMenu'

enum MenuTypes {
  DESKTOP = 'desktop',
  MOBILE = 'mobile'
}

const useStyles = makeStyles({
  appBar: {
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    color: tTheme.theme.palette.primary.contrastText,
    justifyContent: 'space-between',
    [tTheme.theme.breakpoints.up('sm')]: {
      paddingLeft: 24,
    },
  },
  mobileMenuIcon: {
    color: tTheme.theme.palette.primary.contrastText,
    justifySelf: '',
    display: 'block',
    [tTheme.theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    backgroundColor: tTheme.theme.palette.primary.dark,
    zIndex: 1000,
    width: '100vh',
    height: '100vh',
    borderRadius: 0,
    top: 0,
    left: 0
  },
  desktopMenu: {
    display: 'none',
    [tTheme.theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  link: {
    color: tTheme.theme.palette.primary.contrastText,
    textDecoration: 'none'
  }
});

const Nav = () => {
  const classes = useStyles();

  const [menuOpen, setMenuState] = React.useState(null);

  const handleClick = () => {
    setMenuState(true);
  };

  const handleClose = () => {
    setMenuState(null);
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
          strapiAbout {
            hero {
              title
            }
            slug
          }
        }
      `}
      render={(data) => {
        const allPages = [
          data.strapiAbout,
          ...data.allStrapiPage.edges.map(page => page.node)
        ]
        console.log(allPages)
        return (
          <>
            {menuOpen &&
              <div className={classes.mobileMenu}>
                <IconButton 
                  className={classes.mobileMenuIcon}
                  aria-controls='menu' 
                  onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <AppMenu links={allPages} type={MenuTypes.MOBILE} />
              </div>
            }
            <AppBar position='sticky' className={classes.appBar}>
              <Typography variant='h6'>
                <Link to='/' className={classes.link}>{data.strapiGlobal.siteName}</Link>
              </Typography>
              <IconButton 
                className={classes.mobileMenuIcon}
                aria-controls='menu' 
                aria-haspopup='true' 
                onClick={handleClick}>
                <MenuIcon />
              </IconButton>
              <div className={classes.desktopMenu}>
                <AppMenu links={allPages} type={MenuTypes.DESKTOP} />
              </div>
            </AppBar>
          </>
        )
      }
    }
    />
  )
};

export default Nav;
