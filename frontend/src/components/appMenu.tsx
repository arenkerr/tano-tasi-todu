import React from 'react';
import { Link } from 'gatsby';
import { List, ListItem, makeStyles, Typography } from '@material-ui/core';
import tTheme from '../theme';

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
});

const AppMenu = ({ links, type }) => {
  const classes = useStyles();

  return (
    <List className={classes[type]}>
      {links.map((page) => (
        <ListItem key={`page__${page.hero.title}`} className={classes.listItem}>
          <Typography variant="subtitle1">
            <Link to={`/${page.slug}`} className={classes.link}>
              {page.hero.title}
            </Link>
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default AppMenu;
