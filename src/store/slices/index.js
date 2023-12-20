import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user.slice';
import { authReducer } from './auth.slice';
import { availableReducer } from './available.slice';

import storage from 'redux-persist/lib/storage';
import { availableHot } from '../../Services/getAvailable';
import { themeReducer } from './theme.slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    availableHot.reducerPath,
    // availableHotels1.reducerPath,
  ],
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    theme: themeReducer,
    auth: authReducer,
    user: userReducer,
    [availableHot.reducerPath]: availableHot.reducer,
    // availableHotels: availableReducer,
  }),
);
