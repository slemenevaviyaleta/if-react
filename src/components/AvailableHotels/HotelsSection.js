import React, {useRef} from 'react';
import {Hotels} from "./Hotels";
import {useHotelsStyles} from "./Hotels.styles";
export const HotelsSection = ({hotels}) => {
    const hotelsSectionRef = useRef(null);
    const classes = useHotelsStyles();

    const scrollToHotels = () => {
        if (hotelsSectionRef.current) {
            hotelsSectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    if (!hotels || hotels.length === 0) {
        return null;
    }

    scrollToHotels();


    return (
        <section className={classes.availableHotels} id="hotels__js" ref={hotelsSectionRef}>
            <h2 className={classes.availableHotelsTitle}>Available hotels</h2>
            <Hotels hotels={hotels}/>
        </section>
    );
}

