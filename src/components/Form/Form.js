import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { HotelsSearch } from '../HotelsSearch';
import {FormFilter} from "./FormFilter/FormFilter";

import { useClickOutside } from '../../Hooks/useClickOutSide';

import { useAvailableHotMutation } from '../../Services/getAvailable';

import './SearchForm.css'
import './Form.styles.js';
import { useButtonStyles } from '../Button/Button.styles';
import { useFormStyles } from './Form.styles.js';
import { useTheme } from 'react-jss';

export const Form = () => {
  const theme = useTheme();
  const classes = useFormStyles();
  const btnClasses = useButtonStyles(theme);

  const [formState, setFormState] = useState('');
  const [filterActive, setFilterActive] = useState(false);
  const adultsCountRef = useRef();
  const dispatch = useDispatch();
  const [getAvailableHotels, { isLoading }] = useAvailableHotMutation();
  const state = useSelector((state) => state);

  async function handleSubmit(e) {
    e.preventDefault();
    if (formState !== '') {

      try {
        await getAvailableHotels(formState);
        console.log((await getAvailableHotels(formState)).data);
        console.log(state);
      } catch (error) {
        console.error();
      }

      setFormState('');
    }
  }

  function handleChange(e) {
    setFormState(e.target.value);
  }

  const showFilter = () => {
    filterActive ? setFilterActive(false) : setFilterActive(true);
  };

  const outsideRef = useClickOutside(() => setFilterActive(false));

  const [filterValues, setFilterValues] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });


  return (
    <form id="form" className={classes.form} onSubmit={handleSubmit} ref={outsideRef}>
      <HotelsSearch onChange={handleChange} value={formState} />
      <div className={classes.dates}>
        <label className={classes.dateInLabel} htmlFor="date-in">
          Check in
        </label>
        <Calendar />
        <label className={classes.dateOutLabel} htmlFor="date-out">
          Check out
        </label>
      </div>
      <div className="form__booking-block" onClick={showFilter}>
        <input
            className="form__booking form__adults form__text _mobile text__center"
            type="text"
            value={`Adults ${filterValues.adults}`}
        />
        <label className="form__label dash dash-first">
          {' '}
          —
        </label>{' '}
        <input
            className="form__booking form__children form__text _mobile text__center"
            type="text"
            value={`Children ${filterValues.children}`}
        />
        <label className="form__label dash dash-second">
          {' '}
          —
        </label>{' '}
        <div className="form__border-right">
          <div className="form__border-gray"></div>
        </div>
        <input
            className="form__booking form__room form__text _mobile text__center"
            type="text"
            value={`Room ${filterValues.rooms}`}
        />
      </div>
      {filterActive && <FormFilter filterValues={filterValues} setFilterValues={setFilterValues} />}
      <Button btnText={'Submit'} className={btnClasses.submit} />{' '}
    </form>
  );
};
