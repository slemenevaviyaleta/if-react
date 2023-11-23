import React from 'react';
import PropTypes from 'prop-types';
import {useFavoriteStyles} from "./Favorites.styles";

function FavoriteCard({ imageUrl, name, location }) {
    const classes = useFavoriteStyles();
    return (
        <div className={classes.favoritesCard}>
            <img src={imageUrl} className={classes.favoritesImg} alt={name} />
            <a href="#" className={classes.favoritesLink}>{name}</a>
            <p className={classes.favoritesCaption}>{location}</p>
        </div>
    );
}

FavoriteCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default FavoriteCard;
