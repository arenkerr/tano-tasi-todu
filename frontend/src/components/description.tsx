import React from 'react';
import Markdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';

import tTheme from '../theme';
import { Box, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    lineHeight: '1.75rem',
    marginTop: '4rem',
    maxWidth: 900
  },
})

const Hero = ({ source }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justify={'center'}>
      <Grid item xs={12} className={classes.root}>
        <Markdown source={source} escapeHtml={false} />
      </Grid>
    </Grid>
  )
};

export default Hero;
