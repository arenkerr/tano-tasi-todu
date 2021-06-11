import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#26ada1',
      light: '#b2deda',
      dark: '#007d73',
      contrastText: '#f5f5f5',
    },
    secondary: {
      main: '#2e4b9e',
      light: '#6476d0',
      dark: '#00246f',
      contrastText: '#f5f5f5',
    },
    error: {
      main: '#f4511e',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#2F2E2E',
      secondary: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto Slab',
    h1: {
      fontFamily: 'Josefin Sans',
      fontSize: 86,
      fontWeight: 200,
      textTransform: 'uppercase',
      [defaultTheme.breakpoints.down('sm')]: {
        fontSize: 50,
      },
    },
    h2: {
      fontFamily: 'Josefin Sans',
      fontSize: 72,
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: 'Josefin Sans',
      fontWeight: 200,
      fontSize: 54,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: 'Josefin Sans',
      fontWeight: 200,
      fontSize: 24,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Josefin Sans',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 'initial',
    },
    h6: {
      fontFamily: 'Josefin Sans',
      fontSize: 18,
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    subtitle1: {
      fontFamily: 'Josefin Sans',
      fontSize: 16,
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    subtitle2: {
      fontFamily: 'Roboto Slab',
      fontSize: 20,
      fontWeight: 400,
    },
    body1: {
      fontSize: 14,
      lineHeight: '2rem',
      marginTop: '1rem',
      marginBottom: '1rem',
    },
    caption: {
      fontFamily: 'Josefin Sans',
      fontSize: 12,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Josefin Sans',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: 1,
        borderRadius: 0,
      },
      containedSizeLarge: {
        fontSize: 16,
        padding: '14px 22px 10px 22px',
        [defaultTheme.breakpoints.down('sm')]: {
          width: '100%',
        },
      },
      contained: {
        boxShadow: 'none',
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#2e4b9e',
      },
    },
    MuiContainer: {
      maxWidthLg: {
        paddingLeft: 48,
        paddingRight: 48,
      },
    },
    MuiFormLabel: {
      root: {
        color: '#a7a7a7',
      },
    },
  },
});

// theme sizes
const size = {
  appBar: 60,
  appBarMobile: 48,
  pageHero: 400,
};

const tTheme = { theme, size };

export default tTheme;
