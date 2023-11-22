import { useDebugValue, useEffect, useState } from 'react';
import { getHotels} from "../services/hotels";

export const useHotels= () => {
    const [hotels, setHotels] = useState([]);

    useDebugValue(hotels.length);

    useEffect(() => {
        console.log('Fetching hotels...');
        getHotels()
            .then((data) => {
                console.log("Data from server:", data);
                setHotels(data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    return hotels;
}