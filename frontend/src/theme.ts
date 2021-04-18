import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00363a',
      light: '#428e92',
      dark: '#006064',
      contrastText: '#f5f5f5'
    },
    secondary: {
      main: '#006064',
      light: '#aee571',
      dark: '#4b830d',
      contrastText: '#f5f5f5'
    },
    error: {
      main: '#f4511e',
    },
    background: {
      default: '#f5f5f5',
    },
    text:{
      primary: "#2F2E2E",
      secondary: '#f5f5f5',
    }
  },
  typography: {
    fontFamily: 'Roboto Slab',
    h1: {
      fontFamily: 'Catamaran',
      fontSize: 72,
      fontWeight: 900,
      textTransform: 'uppercase'
    }
  },
});

export default theme;
