import React from 'react';
import Markdown from 'react-markdown';
import { Container, Grid, makeStyles, Typography } from '@material-ui/core';

import Spacer from './spacer';
import tTheme from '../theme';

const useStyles = makeStyles({
  root: {
    backgroundColor: tTheme.theme.palette.primary.light,
    paddingTop: '4em',
  },
});

const HorizontalList = ({ list }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          {list.map((item) => (
            <Grid item key={item.title} md={4}>
              <Typography variant="h4">{item.title}</Typography>
              <Markdown children={item.text} />
              <Spacer />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HorizontalList;
