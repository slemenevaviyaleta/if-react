import React from "react";
import {fetchData, wrapPromise} from "../lib/wrapPromise";
import {buildHotelsApiUrl} from "../services/constants";
import {useHotels} from "./useHotels";
import {useHotelsStyles} from "./Hotels.styles";

export const Hotels = () => {
    const hotels = wrapPromise(fetchData(buildHotelsApiUrl()));
    useHotels()
    const classes = useHotelsStyles();

    return (
        <div className={classes.availableHotelsWrapper}>
            <div className={classes.hotelRow}>
                {hotels.map((hotel, index) => (
                    <div className={classes.hotelItem} key={index}>
                        <img src={hotel.imageUrl} width="295" height="295" style={{marginBottom: '24px'}}
                             alt={hotel.name}/>
                        <div className={classes.hotelName} style={{
                            color: '#3077C6',
                            fontSize: '24px',
                            fontWeight: 400,
                            fontFamily: 'Roboto, sans-serif',
                            marginBottom: '24px'
                        }}>{hotel.name}</div>
                        <div className={classes.hotelLocation}
                             style={{color: '#BFBFBF', fontSize: '24px'}}>{hotel.country}, {hotel.city}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}