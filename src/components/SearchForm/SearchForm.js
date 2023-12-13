import React, {memo, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {searchUrl} from '../services/constants';
import PropTypes from 'prop-types';
import {FormFilter} from "../FomFilter/FormFilter";
import {Button} from "../Button/Button";
import './SearchForm.css'

export const Form = memo(function Form({setResults}) {
    const [search, setSearch] = useState('');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [filterVisible, setFilterVisible] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [filterValues, setFilterValues] = useState({
        adults: 0,
        children: 0,
        rooms: 0,
    });

    const toggleFilter = () => {
        setFilterVisible(!filterVisible);
    };

    async function hotelSearch() {
        try {
            if (filterValues.adults > 0 && filterValues.rooms > 0) {
                const response = await fetch(`${searchUrl}=${search}`);
                const data = await response.json();
                setResults(data);
            } else {
                alert('Please select at least 1 adult and 1 room before booking.');
            }
        } catch (error) {
            console.error('Failed', error);
        }
    }

    return (
        <form
            className="header__form"
            onSubmit={(event) => {
                event.preventDefault();
                hotelSearch().then(r => r);
            }}
        >
            {' '}
            <label className="form__label form__text destination" htmlFor="destination">
                Your destination or hotel name{' '}
            </label>
            <input
                className="form__destination form__text"
                type="text"
                name="hotel"
                value={search}
                placeholder="New York"
                onChange={(event) => setSearch(event.target.value)}
            />{' '}
            <div className="form__date-block">
                <input
                    className="form__date form__check-in form__text _mobile text__center"
                    type="text"
                    name="calendar"
                />{' '}
                <label className="form__label form__text check-in" htmlFor="check-in">
                    Check in{' '}
                </label>
                <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    wrapperClassName="datePicker"
                    dateFormat="dd MMM yyyy"
                    className="form__date form__first-date form__text text__center"
                    id="check-in"
                />
                <label className="form__label dash" htmlFor="date">
                    {' '}
                    —
                </label>{' '}
                <input
                    className="form__date form__dash form__text form__desktop text__center"
                    type="text"
                    name="calendar"
                    id="date"
                    value="—"
                />
                <input
                    className="form__date form__check-out form__text _mobile text__center"
                    type="text"
                    name="calendar"
                />{' '}
                <label className="form__label form__text check-out" htmlFor="check-out">
                    Check out{' '}
                </label>
                <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    wrapperClassName="datePicker"
                    dateFormat="dd MMM yyyy"
                    className="form__date form__last-date form__text "
                    id="check-out"
                />
            </div>
            {' '}
            <div className="form__booking-block" onClick={toggleFilter}>
                <input
                    className="form__booking form__adults form__text _mobile text__center"
                    type="text"
                    value="Adults"
                />{' '}
                <input
                    className="form__booking form__adults-num form__text text__center"
                    type="text"
                    value={filterValues.adults}
                />
                <input
                    className="form__date form__dash-left form__text form__desktop text__center"
                    type="text"
                    name="calendar"
                    value="—"
                />
                <div className="form__border-left">
                    <div className="form__border-gray"></div>
                </div>
                <input
                    className="form__booking form__children form__text _mobile text__center"
                    type="text"
                    value="Children"
                />
                <input
                    className="form__booking form__children-num form__text text__center"
                    type="text"
                    value={filterValues.children}
                />
                <input
                    className="form__date form__dash-right form__text form__desktop text__center"
                    type="text"
                    name="calendar"
                    value="—"
                />
                <div className="form__border-right">
                    <div className="form__border-gray"></div>
                </div>
                <input
                    className="form__booking form__room form__text _mobile text__center"
                    type="text"
                    value="Room"
                />
                <input
                    className="form__booking form__room-num form__text text__center"
                    type="text"
                    value={filterValues.rooms}
                />
            </div>
            {filterVisible && !modalOpen && (
                <FormFilter
                    filterValues={filterValues}
                    setFilterValues={setFilterValues}
                />
            )}
            <Button className="form__button" type="submit">
                Search
            </Button>
        </form>
    );
});
Form.propTypes = {
    setResults: PropTypes.func.isRequired,
};