import React from 'react';
import { ThemeProvider } from 'react-jss';
import { useSelector } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../store';

import { Loader } from '../Components/Loader/Loader';
import { Sprite } from '../Components/Sprite';
import { darkTheme } from '../styles/darkTheme';
import { lightTheme } from '../styles/lightTheme';

export const SystemLayuot = () => {
  const currentTheme = useSelector((state) => state.theme);
  const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

  console.log(currentTheme);

  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
      </PersistGate>
    </>
  );
};
