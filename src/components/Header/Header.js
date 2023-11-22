import React, { useState } from 'react';
import './Header.css';
import { Modal } from '../Modal/Modal';

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
                            Attractions
                        </a>
                    </div>
                    <div className="header__menu-buttons">
                        <a href="#!" className="header__btn">
                            <svg className="svg-night">
                                <use href="#night" />
                            </svg>
                        </a>
                        <button
                            className={`header__btn ${isModalOpen ? 'btn-yellow' : 'btn-white'}`}
                            onClick={toggleModal}
                        >
                            <svg className="svg-account">
                                <use href="#account" />
                            </svg>
                        </button>
                        <a href="#!" className="header__btn">
                            <svg className="svg-menu">
                                <use href="#menu" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </header>
    );
};

