import React, { useState } from 'react';
import './SearchForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const SearchForm = ({ setHotels }) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const apiUrl = `https://if-student-api.onrender.com/api/hotels?search=${searchValue}&checkin=${selectedDate}`;
        console.log('API URL:', apiUrl);

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                setHotels(data);
            })
            .catch(error => {
                console.error('Ошибка:', error);
                setHotels([]);
            });
    };

    return (
        <div>
            <form className="top-section__form form-lg" onSubmit={handleSearch}>
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
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className="form__field form__field-date">
                    <label
                        className="form__label top-section__form__label"
                        htmlFor="date"
                    >
                        Check-in
                    </label>
                    <DatePicker
                        className="form__input form__input-date"
                        id="date"
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="Tue 15 Sept - Sat 19 Sept"
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
                <button className="form__btn" type="submit" id="search__btn-js">
                    Search
                </button>
            </form>
        </div>
    );
}


