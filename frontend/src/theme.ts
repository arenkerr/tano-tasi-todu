import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00674a',
      light: '#419676',
      dark: '#003b22',
      contrastText: '#f5f5f5',
    },
    secondary: {
      main: '#2e7d32',
      light: '#60ad5e',
      dark: '#005005',
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
      fontFamily: 'Catamaran',
      fontSize: 86,
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Catamaran',
      fontSize: 72,
      fontWeight: 900,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: 'Catamaran',
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 'initial',
    },
    h6: {
      fontFamily: 'Catamaran',
      fontSize: 18,
      fontWeight: 200,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
  },
});

// theme sizes
const size = {
  appBar: 56,
  pageHero: 400,
};

const tTheme = { theme, size };

export default tTheme;
