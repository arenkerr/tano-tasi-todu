import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import tTheme from '../theme';

const useStyles = makeStyles({
  root: {
    backgroundImage: (hero: any) => `url(${hero.cover.url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: tTheme.size.pageHero,
  },
  overlay: {
    backgroundImage: (hero) =>
      hero.gradientOverlay
        ? hero.gradientOverlay
        : `linear-gradient(rgba(255, 190, 94, 0.75), rgba(0, 125, 115, 0.75))`,
    opacity: 0.65,
    minHeight: tTheme.size.pageHero,
    width: '100vw',
  },
  text: {
    display: 'flex',
    height: tTheme.size.pageHero,
    width: '100%',
    position: 'absolute',
    top: tTheme.size.appBar,
    justifyContent: 'center',
    alignItems: 'center',
    textShadow: '1px 1px 17px #0000004f',
  },
});

const Hero = ({ hero }) => {
  const classes = useStyles(hero);
  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <div className={classes.text}>
        <Typography variant="h1" color="textSecondary">
          {hero.title}
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
