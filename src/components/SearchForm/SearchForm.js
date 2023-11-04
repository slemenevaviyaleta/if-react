import React, {memo, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export const SearchForm = memo(({setHotels}) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [adultsNum, setAdultsNum] = useState(1);
    const [childNum, setChildNum] = useState(0);
    const [roomNum, setRoomNum] = useState(1);
    const [childAges, setChildAges] = useState([]);

    const adultsButtonRef = useRef(null);
    const roomButtonRef = useRef(null);

    const [placeholderText, setPlaceholderText] = useState('2 Adults — 0 Children — 1 Room');


    useEffect(() => {
        if (isFilterVisible) {
            if (adultsButtonRef.current) {
                adultsButtonRef.current.focus();
            } else if (roomButtonRef.current) {
                roomButtonRef.current.focus();
            }
        }

        setPlaceholderText(`${adultsNum} Adults — ${childNum} Children — ${roomNum} Room`);
    }, [isFilterVisible, adultsButtonRef, roomButtonRef, adultsNum, childNum, roomNum]);

    const handleToggleFilter = () => {
        setIsFilterVisible(!isFilterVisible);
    };



    const handleIncrement = (setter, maxValue) => {
        setter((prevValue) => (prevValue < maxValue ? prevValue + 1 : prevValue));
    };

    const handleDecrement = (setter, minValue) => {
        setter((prevValue) => (prevValue > minValue ? prevValue - 1 : prevValue));
    };

    const handleIncrementChild = () => {
        if (childNum < 10) {
            handleIncrement(setChildNum, 10);
            if (childNum === 0) {
                setChildAges([0]);
            } else {
                setChildAges((prevAges) => [...prevAges, 0]);
            }
        }
    };

    const handleDecrementChild = () => {
        if (childNum > 0) {
            handleDecrement(setChildNum, 0);
            setChildAges((prevAges) => {
                const newAges = [...prevAges];
                newAges.pop();
                return newAges;
            });
        }
    };

    const handleUpdateChildAge = (index, age) => {
        setChildAges((prevAges) => {
            const newAges = [...prevAges];
            newAges[index] = age;
            return newAges;
        });
    };

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
                        Check-in — Check-out </label>
                    <DatePicker
                        className="form__input form__input-date"
                        id="date"
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="Tue 15 Sept - Sat 19 Sept"
                    />
                </div>
                <div className="form__field form__field-people" id="guestField" onClick={handleToggleFilter}>
                    <input
                        className="form__input form__input-people"
                        type="text"
                        name="guests"
                        id="guests"
                        placeholder={placeholderText}
                    />
                </div>
                {isFilterVisible && (
                    <div className="filter-container">
                        <div className="filter__wrapper">
                            <div>
                                <span className="filter__span">Adults</span>
                                <button className="filter__btn" onClick={() => handleDecrement(setAdultsNum, 1)}
                                        ref={adultsButtonRef}>-
                                </button>
                                <span className="num">{adultsNum}</span>
                                <button className="filter__btn" onClick={() => handleIncrement(setAdultsNum, 30)}>+
                                </button>
                            </div>
                            <div>
                                <span className="filter__span">Children</span>
                                <button className="filter__btn" onClick={handleDecrementChild}>-</button>
                                <span className="num">{childNum}</span>
                                <button className="filter__btn" onClick={handleIncrementChild}>+</button>
                            </div>
                            <div>
                                <span className="filter__span">Rooms</span>
                                <button className="filter__btn" onClick={() => handleDecrement(setRoomNum, 1)}
                                        ref={roomButtonRef}>-
                                </button>
                                <span className="num">{roomNum}</span>
                                <button className="filter__btn" onClick={() => handleIncrement(setRoomNum, 30)}>+
                                </button>
                            </div>
                            {childNum > 0 && (
                                <div>
                                    <p>What is the age of the child you’re
                                        <span className="new-line">traveling with?</span></p>
                                    {childAges.map((age, index) => (
                                        <select
                                            key={index}
                                            value={age}
                                            onChange={(e) => handleUpdateChildAge(index, parseInt(e.target.value))}
                                            className="vertical-select"
                                        >
                                            {Array.from({length: 18}, (_, i) => (
                                                <option key={i} value={i}>
                                                    {i} years
                                                </option>
                                            ))}
                                        </select>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
                <button className="form__btn" type="submit" id="search__btn-js">
                    Search
                </button>
            </form>
        </div>
    );
});

SearchForm.propTypes = {
    setHotels: PropTypes.func.isRequired,
};
