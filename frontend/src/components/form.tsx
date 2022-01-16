import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby-link';
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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const form = e.target;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <Box m={2}>
        <form
          className={classes.root}
          netlify-honeypot="bot-field"
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                placeholder="Name"
                name="name"
                type="text"
                fullWidth
                autoFocus
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                placeholder="Email"
                name="email"
                type="text"
                fullWidth
                required
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                placeholder="Message"
                name="message"
                type="text"
                rows={6}
                fullWidth
                multiline
                required
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item md={6} xs={12}>
              <Button variant="contained" size="large" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Spacer height="8em" />
      </Box>
    </>
  );
};

export default Form;
