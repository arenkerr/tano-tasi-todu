import React from 'react';
import Markdown from 'react-markdown';
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import tTheme from '../theme';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    backgroundColor: tTheme.theme.palette.primary.dark
  },
  image: {
    width: '100%'
  },
  title: {
    color: tTheme.theme.palette.primary.dark
  },
  grid: {
    display: 'flex',
    alignItems: 'center'
  }
});

const Projects = ({ projects }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.header} padding={8}>
        <Container>
          <Typography variant="h2" color="textSecondary">
            Current Projects
          </Typography>
        </Container>
      </Box>
      {projects.map((project) => (
        <Grid container className={classes.grid} key={project.title}>
          <Grid item sm={4}>
            <img src={project.image.url} alt={project.image.alternativeText} className={classes.image} />
          </Grid>
          <Grid item sm={8}>
            <Box padding={4}>
              <Typography variant="h3" color="secondary">
                {project.title}
              </Typography>
              <Markdown children={project.description} />
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Projects;
