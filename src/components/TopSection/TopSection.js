import React from 'react';
import {SearchForm} from "../SearchForm";
import PropTypes from "prop-types";
import {useTopSectionStyles} from "./TopSection.styles";

export const TopSection = ({ setHotels }) => {
    const classes = useTopSectionStyles();
    return (
        <section className={classes.topSection}>
            <h1 className={classes.topSectionTitle}>
                Discover places
                <span className={classes.newLine}>to live, work or just relax</span>
            </h1>
            <div className={classes.jsFormWrapper}>
                <SearchForm setHotels={setHotels} />
            </div>
        </section>
    );
}

TopSection.propTypes = {
    setHotels: PropTypes.func.isRequired,
};
