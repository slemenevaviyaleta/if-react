import React, {useRef} from 'react';
import {Hotels} from "./Hotels";
import './AvailableHotels.css'
export const HotelsSection = ({hotels}) => {
    const hotelsSectionRef = useRef(null);

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
        <section className="available__hotels" id="hotels__js" ref={hotelsSectionRef}>
            <h2 className="available__hotels__title">Available hotels</h2>
            <Hotels hotels={hotels}/>
        </section>
    );
}

