import React from 'react';

import './Night.css';
import PropTypes from "prop-types";

export const Night = ({ onClick, color }) => {
    return (
        <svg onClick={onClick} className="header__images--night" style={{ color }}>
            <use href="#night" />
        </svg>
    );
};

Night.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
};

