import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mood: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#03DAC6',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cfcfcf',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;