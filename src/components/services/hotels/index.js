import axios from 'axios';

import {buildHotelsApiUrl} from "../constants";

export const delay = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, 2000)
});

export const getHotels = async () => {
    await delay();
    try {
        const response = await axios.get(buildHotelsApiUrl());
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error.message);
        throw error;
    }
};