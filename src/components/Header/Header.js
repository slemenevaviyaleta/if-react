import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <nav className="header__navbar">
                <div className="header__logo">
                    <svg className="svg-logo">
                        <use href="./images/sprite.svg#logo" />
                    </svg>
                </div>
                <div className="header__menu col-sm-3">
                    <div className="header__menu-links">
                        <a href="#!" className="header__link">
                            Stays
                        </a>
                        <a href="#!" className="header__link">
                            Attractions                         </a>
                    </div>
                    <div className="header__menu-buttons">
                        <a href="#!" className="header__btn">
                            <svg className="svg-night">
                                <use href="#night" />
                            </svg>
                        </a>
                        <a href="#!" className="header__btn">
                            <svg className="svg-account">
                                <use href="#account" />
                            </svg>
                        </a>
                        <a href="#!" className="header__btn">
                            <svg className="svg-menu">
                                <use href="#menu" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
