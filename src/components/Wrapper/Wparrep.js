import React from 'react';
import { SystemLayuot } from '../../Context/SystemLayuotContext';
import { Sprite } from '../Sprite';
import { ScrollRestoration } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const Wrapper = () => {
  return (
    <>
      <Sprite />
      <ScrollRestoration />
      <Provider store={store}>
        <SystemLayuot />
      </Provider>
    </>
  );
};
