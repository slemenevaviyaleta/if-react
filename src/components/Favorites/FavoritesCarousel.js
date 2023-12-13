import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import '../Button/Button.css';
import classNames from 'classnames';
import './Favorites.css';

export const FavoritesCarousel = ({ data, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = () => {
        if (currentIndex < data.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const visibleData = data.slice(currentIndex, currentIndex + 4);

    return (
        <div className={classNames('description', className)}>
            {visibleData.map((item) => (
                <figure key={item.id} className="homes__item _mobile">
                    <img className="homes__image" src={item.imageUrl} alt={item.name} />
                    <figcaption className="homes__description">{item.name}</figcaption>
                    <figcaption className="homes__place">
                        {item.city}, {item.country}
                    </figcaption>
                </figure>
            ))}
            {currentIndex < data.length && (
                <Button aria-label="next" className="homes__arrow--ellipse" type="button" onClick={showNextImage}>
                    <div className="homes__arrow--pike"></div>
                </Button>
            )}
        </div>
    );
};

FavoritesCarousel.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
};


