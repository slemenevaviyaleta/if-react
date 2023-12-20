import React, { createRef, useReducer } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { counterReducer } from './Counter.Reducer';

import '../UsersFilter/UsersFilter.css';
import { useUsersFilterStyles } from '../UsersFilter/UsersFilter.styles';

export const Counter = ({ name, guests, setGuests, select, setSelect, initialValue }) => {
  const [state, dispatch] = useReducer(counterReducer, { name: name, count: initialValue });

  const classes = useUsersFilterStyles();

  const countRef = createRef();
  const { count } = state;

  const btnAdd = classNames({
    btn: true,
    'btn--disabled':
      (name.includes('adult') && count >= 30) ||
      (name.includes('rooms') && count >= 30) ||
      (name.includes('children') && count >= 10),
  });
  const btnRemove = classNames({
    btn: true,
    'btn--disabled':
      (name.includes('adult') && count === 1) ||
      (name.includes('rooms') && count === 1) ||
      (name.includes('children') && count === 0),
  });

  const add = (e) => {
    e.preventDefault();
    const addReducer = () => {
      dispatch({ type: 'increment' });
    };
    addReducer();

    name === 'children' &&
      count < 10 &&
      setSelect((select) => {
        return [...select, count];
      });

    setGuests({ ...guests, [e.target.name]: count + 1 });
  };

  const remove = (e) => {
    e.preventDefault();
    (() => {
      dispatch({ type: 'decrement' });
    })();

    if (name === 'children' && count <= 10) {
      select.pop();
      setSelect((select) => {
        return [...select];
      });
    }
    setGuests({ ...guests, [e.target.name]: count - 1 });
  };

  return (
    <>
      <div className={classes.counter}>
        <button name={name} className={btnRemove} onClick={remove}>
          -
        </button>
        <span name={name} className="output" ref={countRef}>
          {count}
        </span>
        <button name={name} className={btnAdd} onClick={add}>
          +
        </button>
      </div>
    </>
  );
};

Counter.propTypes = {
  name: PropTypes.string,
  guests: PropTypes.object,
  setGuests: PropTypes.func,
  select: PropTypes.array,
  setSelect: PropTypes.func,
  initialValue: PropTypes.number,
};
