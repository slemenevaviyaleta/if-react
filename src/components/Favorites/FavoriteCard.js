import React from 'react';
import PropTypes from 'prop-types';

function FavoriteCard({ imageUrl, name, location }) {
    return (
        <div className="favorites__card">
            <img src={imageUrl} className="favorites__img" alt={name} />
            <a href="#" className="favorites__link">{name}</a>
            <p className="favorites__caption">{location}</p>
        </div>
    );
}

FavoriteCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default FavoriteCard;
