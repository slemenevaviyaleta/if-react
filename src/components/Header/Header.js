import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { Account, Logo, Menu, Night } from '../Icons';
import { SignOut } from '../SignOutModal/SignOut';

import { PATH } from '../../Constants/paths';

import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../store/slices/theme.slice';
import { useHeaderStyles } from './Header.styles';

export const Header = () => {
  const signOutRef = useRef(null);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme);
  const theme = currentTheme === 'dark' ? 'light' : 'dark';
  const nightIconColor = currentTheme === 'dark' ? '#F5BD41' : 'white';

  const switchTheme = () => {
    dispatch(setTheme(theme));
    console.log(currentTheme);
  };

  const classes = useHeaderStyles();

  return (
    <header className={classes.header}>
      <Link to={PATH.index}>
        <Logo />
      </Link>
      <div className={classes.container}>
        <div className={classes.text}>
          <p className={classes.textTitle}>Stays</p>
          <p className={classes.textTitle}>Attractions</p>
        </div>

        <div className={classes.images}>
          <Menu />
          <Night onClick={switchTheme} color={nightIconColor} />
          <Account onClick={() => signOutRef.current.open()} />
        </div>
      </div>
      <SignOut ref={signOutRef} />
    </header>
  );
};
