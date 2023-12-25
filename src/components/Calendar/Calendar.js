import React, {memo, useState} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {useCalendarStyles} from './Calendar.styles';

import './Calendar.css';

export const Calendar = memo(() => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    const styles = useCalendarStyles();

    return (
        <DatePicker
            placeholderText="Please select a date"
            className={styles.input}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            monthsShown={2}
            dateFormat="d MMMM"
        />
    );
});
