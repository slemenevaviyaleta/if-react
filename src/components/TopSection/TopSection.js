import React from 'react';
import './TopSection.css';

export const TopSection = () => {
    return (
        <section className="top-section">
            <h1 className="top-section__title">
                Discover places
                <span className="new-line">to live, work or just relax</span>
            </h1>
            <div className="js__form-wrapper">
                <form className="top-section__form form-lg">
                    <div className="form__field form__field-destination">
                        <label
                            className="form__label top-section__form__label"
                            htmlFor="destination"
                        >
                            Your destination or hotel name
                        </label>
                        <input
                            className="form__input form__input-destination"
                            type="text"
                            id="destination"
                            name="city"
                            placeholder="New York"
                        />
                    </div>
                    <div className="form__field form__field-date">
                        <label
                            className="form__label top-section__form__label"
                            htmlFor="date"
                        >
                            Check-in &mdash; Check-out
                        </label>
                        <input
                            className="form__input form__input-date"
                            type="text"
                            id="date"
                            name="date"
                            placeholder="Tue 15 Sept - Sat 19 Sept"
                        />
                    </div>
                    <div className="form__field form__field-people" id="guestField">
                        <input
                            className="form__input form__input-people"
                            type="text"
                            name="guests"
                            id="guests"
                        />
                    </div>
                    <button className="form__btn" type="submit" id="search__btn-js">Search</button>
                </form>
            </div>
        </section>
    );
}
