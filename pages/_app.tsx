import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import store from '../src/store';
import ArchivedMenuBar from '../src/components/ArchivedMenuBar';
import { useRouter } from 'next/router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ComponentWrapper: React.FC<{ Component: any, pageProps: any }> = ({ Component, pageProps }) => {
  const router = useRouter();

  const handleLogout = () => {
    // Logic to clear user and redirect
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <>
      <ArchivedMenuBar onLogout={handleLogout} />
      <Component {...pageProps} />
    </>
  );
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ComponentWrapper Component={Component} pageProps={pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
