import React, {Suspense, useRef} from 'react';
import Loader from "./Loader";

export const HotelsSection = ({hotels}) => {
    const hotelsSectionRef = useRef(null);

    const scrollToHotels = () => {
        if (hotelsSectionRef.current) {
            hotelsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!hotels || hotels.length === 0) {
        return null;
    }

    scrollToHotels();


    return (
        <section className="available__hotels" id="hotels__js" ref={hotelsSectionRef}>
            <h2 className="available__hotels__title">Available hotels</h2>
            <div className="available__hotels-wrapper">
                <div className="hotel-row">
                    <Suspense fallback={<Loader />}>
                        {hotels.map((hotel, index) => (
                            <div className="hotel__item" key={index}>
                                <img src={hotel.imageUrl} width="295" height="295" style={{ marginBottom: '24px' }} alt={hotel.name} />
                                <div className="hotel-name" style={{
                                    color: '#3077C6',
                                    fontSize: '24px',
                                    fontWeight: 400,
                                    fontFamily: 'Roboto, sans-serif',
                                    marginBottom: '24px'
                                }}>{hotel.name}</div>
                                <div className="hotel-location" style={{ color: '#BFBFBF', fontSize: '24px' }}>{hotel.country}, {hotel.city}</div>
                            </div>
                        ))}
                    </Suspense>
                </div>
            </div>
        </section>
    );
}

