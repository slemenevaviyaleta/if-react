import { authStatuses } from './authStatuses';

export const INITIAL_STATE = {
  auth: {
    status: authStatuses.loggedOut,
  },
  user: {
    email: null,
    password: null,
  },
  availableHotels: [],
  theme: 'dark',
};
