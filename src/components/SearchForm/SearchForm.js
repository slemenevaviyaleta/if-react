import React, {memo, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {buildHotelsApiUrl} from "../services/constants";
import {useSearchFormStyles} from "./SearchForm.styles";


export const SearchForm = memo(({setHotels}) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [adultsNum, setAdultsNum] = useState(1);
    const [childNum, setChildNum] = useState(0);
    const [roomNum, setRoomNum] = useState(1);
    const [childAges, setChildAges] = useState([]);
    const classes = useSearchFormStyles();

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
        const apiUrl = buildHotelsApiUrl(searchValue, selectedDate);
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
            <form className={classes.topSectionForm} onSubmit={handleSearch}>
                <div className={`${classes.formField} ${classes.formFieldDestination}`}>
                    <label
                        className={`${classes.formLabel} ${classes.topSectionFormLabel}`}
                        htmlFor="destination"
                    >
                        Your destination or hotel name
                    </label>
                    <input
                        className={`${classes.formInput} ${classes.formInputDestination}`}
                        type="text"
                        id="destination"
                        name="city"
                        placeholder="New York"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className={`${classes.formField} ${classes.formFieldDate}`}>
                    <label
                        className={`${classes.formLabel} ${classes.topSectionFormLabel}`}
                        htmlFor="date"
                    >
                        Check-in — Check-out </label>
                    <DatePicker
                        className={`${classes.formInput} ${classes.formInputDate}`}
                        id="date"
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="Tue 15 Sept - Sat 19 Sept"
                    />
                </div>
                <div className={`${classes.formField} ${classes.formFieldPeople}`} id="guestField" onClick={handleToggleFilter}>
                    <input
                        className={`${classes.formInput} ${classes.formInputPeople}`}
                        type="text"
                        name="guests"
                        id="guests"
                        placeholder={placeholderText}
                    />
                </div>
                {isFilterVisible && (
                    <div className={classes.filterContainer}>
                        <div className={classes.filterWrapper}>
                            <div>
                                <span className={classes.filterSpan}>Adults</span>
                                <button className={classes.filterBtn} onClick={() => handleDecrement(setAdultsNum, 1)}
                                        ref={adultsButtonRef}>-
                                </button>
                                <span className={classes.num}>{adultsNum}</span>
                                <button className={classes.filterBtn} onClick={() => handleIncrement(setAdultsNum, 30)}>+
                                </button>
                            </div>
                            <div>
                                <span className={classes.filterSpan}>Children</span>
                                <button className={classes.filterBtn} onClick={handleDecrementChild}>-</button>
                                <span className={classes.num}>{childNum}</span>
                                <button className={classes.filterBtn} onClick={handleIncrementChild}>+</button>
                            </div>
                            <div>
                                <span className={classes.filterSpan}>Rooms</span>
                                <button className={classes.filterBtn} onClick={() => handleDecrement(setRoomNum, 1)}
                                        ref={roomButtonRef}>-
                                </button>
                                <span className={classes.num}>{roomNum}</span>
                                <button className={classes.filterBtn} onClick={() => handleIncrement(setRoomNum, 30)}>+
                                </button>
                            </div>
                            {childNum > 0 && (
                                <div>
                                    <p>What is the age of the child you’re
                                        <span className={classes.newLine}>traveling with?</span></p>
                                    {childAges.map((age, index) => (
                                        <select
                                            key={index}
                                            value={age}
                                            onChange={(e) => handleUpdateChildAge(index, parseInt(e.target.value))}
                                            className={classes.verticalSelect}
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
