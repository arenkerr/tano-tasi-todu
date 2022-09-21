import React from 'react';
import { Link } from 'gatsby';
import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import tTheme from '../theme';
import DropdownMenu from './dropdownMenu';
import { MenuTypes } from './nav';

const useStyles = makeStyles({
  link: {
    color: tTheme.theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  mobile: {},
  desktop: {
    display: 'flex',
  },
  listItem: {
    whiteSpace: 'pre',
  },
  listItemBreak: {
    whiteSpace: 'break-spaces',
  },
});

const AppMenu = ({ links, type }) => {
  const classes = useStyles();

  return (
    <List className={classes[type]}>
      {links.map((page) => (
        <ListItem key={`page__${page.hero.title}`} className={classes.listItem}>
          {page.dropdownMenuLinks && type !== MenuTypes.MOBILE ? (
            <DropdownMenu page={page} />
          ) : (
            <Typography variant="subtitle1">
              <Link to={`/${page.slug}`} className={classes.link}>
                {page.hero.title}
              </Link>
              {page.dropdownMenuLinks && (
                <List>
                  {page.dropdownMenuLinks.link.map((link) => (
                    <ListItem className={classes.listItemBreak}>
                      {link.external ? (
                        <Link
                          to={link.url}
                          className={classes.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <Link to={link.url} className={classes.link}>
                          {link.label}
                        </Link>
                      )}
                    </ListItem>
                  ))}
                </List>
              )}
            </Typography>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default AppMenu;
