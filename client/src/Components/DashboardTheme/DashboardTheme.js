import { createTheme } from '@mui/material/styles';
import Abril from '../../fonts/Abril_Fatface/AbrilFatface-Regular.ttf'

const dashboardTheme = createTheme({
  breakpoints: {
    values: {
      xs: 200,
      sm: 600,
      md: 1300,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Abril';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Abril'), local('Abril-regular'), url(${Abril}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
  },
  palette: {
    customColors: {
      red: '#c81912',
      blue: '#005792',
      white: '#FAFAFA'
    },
    primary: {
      main: '#FEF9F0', 
      light: '#FFFFFF',
      dark: '#FDF7E9'
    },
    secondary: {
      main: '#000000',
      light: '#1E1E1E'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default dashboardTheme