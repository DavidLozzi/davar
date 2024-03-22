// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b0ff', // A bright blue for primary actions
    },
    secondary: {
      main: '#ff4081', // A vibrant pink for secondary actions
    },
    background: {
      default: '#f5f5f5', // A light background to keep things bright
      paper: '#ffffff',
    },
  },
  typography: {
    // Customize typography settings as needed
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.25rem',
    },
    h2: {
      fontSize: '2rem',
    },
    button: {
      textTransform: 'none', // Example to stop auto uppercase for buttons
    },
  },
  // Add more customizations as needed
});

export default theme;
