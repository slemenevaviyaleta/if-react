import React from 'react';
import './Loader.css';

export const Loader = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="loader-text">Loading...</div>
            </div>
        </div>
    );
};

export default Loader;
