import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { Provider, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { store, AppDispatch } from '../src/store';
import ArchivedMenuBar from '../src/components/ArchivedMenuBar';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkNotifications } from '../src/features/notifications/notificationsSlice';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface ComponentWrapperProps {
  Component: React.ComponentType;
  pageProps: any;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(checkNotifications());
    }, 30000); // 30 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dispatch]);

  return (
    <>
      <ArchivedMenuBar onLogout={() => { /* Logic to clear user and redirect */ }} />
      <Component {...pageProps} router={router} />
      <ToastContainer />
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
