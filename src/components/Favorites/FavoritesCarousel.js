import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FavoriteCard from './FavoriteCard';

function FavoritesCarousel({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNextImage = () => {
        if (currentIndex < data.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const visibleData = data.slice(0, currentIndex + 4);

    return (
        <div className="favorites__carousel">
            <ul className="favorites__row">
                {visibleData.map((item) => (
                    <FavoriteCard
                        key={item.id}
                        imageUrl={item.imageUrl}
                        name={item.name}
                        location={`${item.city}, ${item.country}`}
                    />
                ))}
            </ul>
            {currentIndex < data.length && (
                <button aria-label="next" className="favorites__btn-ellipse" type="button" onClick={showNextImage}>
                    <svg className="svg-fav arrow-btn">
                        <use href="#arrowFav" />
                    </svg>
                </button>
            )}
        </div>
    );
}

FavoritesCarousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    })).isRequired,
};

export default FavoritesCarousel;
