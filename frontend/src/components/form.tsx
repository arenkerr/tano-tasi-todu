import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import tTheme from '../theme';
import { Box, Grid, Button, TextField } from '@material-ui/core';
import Spacer from './spacer';

const useStyles = makeStyles({
  root: {
    lineHeight: '1.75rem',
    maxWidth: 600,
    margin: '0 auto',
  },
});

const Form = () => {
  const classes = useStyles();
  const [status, setStatus] = useState('Submit');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
    setStatus('Sending...');
    return;
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          // e.preventDefault();
          handleSubmit(e);
        }}
        className={classes.root}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField id="name" label="Name" variant="outlined" placeholder="Name" onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField id="email" label="Email" variant="outlined" placeholder="Email" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              placeholder="Message"
              rows={4}
              fullWidth
              multiline
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" size="large" color="primary" type="submit">
              {status}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Spacer />
      <Spacer />
    </>
  );
};

export default Form;
