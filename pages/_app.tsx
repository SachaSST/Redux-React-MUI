import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import store from '../src/store';
import ArchivedMenuBar from '../src/components/ArchivedMenuBar';
import { useDispatch } from 'react-redux';
import { useRouter, withRouter } from 'next/router';
import { clearUser } from '../src/features/todos/todosSlice';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface ComponentWrapperProps extends AppProps {
  router: any;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ Component, pageProps, router }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(clearUser());
    router.push('/login');
  };

  return (
    <>
      <ArchivedMenuBar onLogout={handleLogout} />
      <Component {...pageProps} />
    </>
  );
};

const WrappedComponentWrapper = withRouter(ComponentWrapper);

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <WrappedComponentWrapper Component={Component} pageProps={pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
