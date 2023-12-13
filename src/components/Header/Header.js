import React, {useState} from 'react';
import {Modal} from '../Modal/Modal';
import {useHeaderStyles} from "./Header.styles";
import {useSpriteStyles} from "../Sprite/Sprite.styles";
import {Dropdown} from "../Dropdown/Dropdown";

export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const classes = useHeaderStyles();
    const svg = useSpriteStyles();
    const btnColorClass = isModalOpen ? svg.btnYellow : svg.btnWhite;

    return (
        <header className={classes.header}>
            <nav className={classes.headerNavbar}>
                <div className={classes.headerLogo}>
                    <svg className={svg.svgLogo}>
                        <use href="#logo"/>
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
                                <use href="#night"/>
                            </svg>
                        </a>
                        <button
                            className={classes.headerBtn}
                            onClick={toggleModal}
                        >
                            <svg className={`${svg.svgAccount} ${btnColorClass}`}>
                                <use href="#account"/>
                                <Dropdown />
                            </svg>
                        </button>
                        <a href="#!" className={classes.headerBtn}>
                            <svg className={svg.svgMenu}>
                                <use href="#menu"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <Modal isOpen={isModalOpen} onClose={toggleModal}/>
        </header>
    );
};

