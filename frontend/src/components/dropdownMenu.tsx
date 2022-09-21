import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, makeStyles } from '@material-ui/core';
import tTheme from '../theme';

const useStyles = makeStyles({
  textButton: {
    color: tTheme.theme.palette.secondary.main,
    textTransform: 'unset',
    letterSpacing: 0,
  },
  menu: {
    '& .MuiMenu-paper': { backgroundColor: '#d0d7ec', borderRadius: 0 },
  },
});

const DropdownMenu = ({ page }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
        variant="text"
        href={`/${page.slug}`}
      >
        {page.hero.title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ top: tTheme.size.appBarMobile - 1, zIndex: 1 }}
        className={classes.menu}
      >
        {page.dropdownMenuLinks.link.map((link) => (
          <MenuItem onClick={handleClose} style={{ backgroundColor: 'transparent', margin: 0 }}>
            {link.external ? (
              <Button
                variant="text"
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                className={classes.textButton}
                key={link.label}
              >
                {link.label}
              </Button>
            ) : (
              <Button
                variant="text"
                href={link.url}
                className={classes.textButton}
                key={link.label}
              >
                {link.label}
              </Button>
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
