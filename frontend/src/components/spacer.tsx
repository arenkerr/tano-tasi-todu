import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '4em',
  },
});

const Spacer = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default Spacer;
