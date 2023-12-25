import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { apiUrl } from './Constanst/links';
import { availableHotelsActions, setAvailableHotels } from '../store/slices/available.slice';

export const availableHot = createApi({
  reducerPath: 'availableHotels',
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}`,
  }),
  endpoints: (builder) => ({
    availableHot: builder.mutation({
      query: (data) => ({
        url: `?search=${data}`,
        method: 'GET',
      }),

      onQueryStarted: async (args, api) => {
        try {
          const { data } = await api.queryFulfilled;

          // debugger;
          api.dispatch(availableHotelsActions.setAvailableHotels(data));
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  }),
});

export const { useAvailableHotMutation } = availableHot;

//
