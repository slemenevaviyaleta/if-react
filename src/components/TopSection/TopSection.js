import React from 'react';
import './TopSection.css';
import {SearchForm} from "../SearchForm";
import PropTypes from "prop-types";

export const TopSection = ({ setHotels }) => {
    return (
        <section className="top-section">
            <h1 className="top-section__title">
                Discover places
                <span className="new-line">to live, work or just relax</span>
            </h1>
            <div className="js__form-wrapper">
                <SearchForm setHotels={setHotels} />
            </div>
        </section>
    );
}

TopSection.propTypes = {
    setHotels: PropTypes.func.isRequired,
};
