import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: ({ height }: SpacerProps) => (height ? height : '4em'),
  },
});

interface SpacerProps {
  height?: string;
}

const Spacer = (height: SpacerProps) => {
  const classes = useStyles(height);
  return <div className={classes.root}></div>;
};

export default Spacer;
