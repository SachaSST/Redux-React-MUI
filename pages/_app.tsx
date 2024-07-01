import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import store from '../src/store';
import ArchivedMenuBar from '../src/components/ArchivedMenuBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ArchivedMenuBar onLogout={() => { /* Logic to clear user and redirect */ }} />
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
