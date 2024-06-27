import React from 'react';
import type { AppProps, AppContext } from 'next/app';
import { Provider, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import store from '../src/store';
import ArchivedMenuBar from '../src/components/ArchivedMenuBar';
import { useRouter } from 'next/router';
import { clearUser } from '../src/features/todos/todosSlice';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ComponentWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearUser());
    router.push('/login');
  };

  return (
    <>
      <ArchivedMenuBar onLogout={handleLogout} />
      <Component {...pageProps} router={router} />
    </>
  );
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ComponentWrapper Component={Component} pageProps={pageProps} router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
