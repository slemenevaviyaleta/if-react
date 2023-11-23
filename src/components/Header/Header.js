import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import {useHeaderStyles} from "./Header.styles";
import {useSpriteStyles} from "../Sprite/Sprite.styles";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const classes = useHeaderStyles();
    const svg = useSpriteStyles();

    return (
        <header className={classes.header}>
            <nav className={classes.headerNavbar}>
                <div className={classes.headerLogo}>
                    <svg className={svg.svgLogo}>
                        <use href="#logo" />
                    </svg>
                </div>
                <div className={classes.headerMenu}>
                    <div className={classes.headerMenuLinks}>
                        <a href="#!" className={classes.headerLink}>
                            Stays
                        </a>
                        <a href="#!" className={classes.headerLink}>
                            Attractions
                        </a>
                    </div>
                    <div className={classes.headerMenuButtons}>
                        <a href="#!" className={classes.headerBtn}>
                            <svg className={svg.svgNight}>
                                <use href="#night" />
                            </svg>
                        </a>
                        <button
                            className={`${classes.headerMenuButtons} ${isModalOpen ? 'btn-yellow' : 'btn-white'}`}
                            onClick={toggleModal}
                        >
                            <svg className={svg.svgAccount}>
                                <use href="#account" />
                            </svg>
                        </button>
                        <a href="#!" className={classes.headerBtn}>
                            <svg className={svg.svgMenu}>
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

