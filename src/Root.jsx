import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';

const theme = createTheme({
    palette: {
        primary: {
          main: '#1976d2', // Adjust the primary color to your preference
        },
        secondary: {
          main: '#dc004e', // Adjust the secondary color to your preference
        },
        background: {
          default: '#f0f0f0', // Adjust the default background color
        },
      },
      typography: {
        fontFamily: 'Roboto, sans-serif', // Adjust the default font family
      },
});

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default Root;
