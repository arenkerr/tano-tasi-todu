import React from 'react';
import { Link } from 'gatsby';
import { 
  List,
  ListItem,
  Typography,
} from '@material-ui/core';


const AppMenu = ({ links, styles }) => {

  return (
    <List>
      {links.map(page => (
          <ListItem key={`page__${page.node.hero.title}`}>
            <Typography variant='h5'>
              <Link to={page.node.slug} className={styles}>
                  {page.node.hero.title} 
                </Link>
            </Typography>
          </ListItem>
        ))}
    </List>
  )
};

export default AppMenu;
