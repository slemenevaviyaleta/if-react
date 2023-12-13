import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSpriteStyles} from "../Sprite/Sprite.styles";

import "./Dropdown.css";

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const svg = useSpriteStyles();


    return (
        <div className="dropdown">
            <svg
                className={`${svg.svgAccount} toggle ${isOpen ? "active" : ""}`}
                onClick={handleDropdownToggle}
                style={{ fill: isOpen ? "#F5BD41" : "#fff" }}
            >
                <use href="#account" />
            </svg>
            {isOpen && (
                <Link to="/login">
                    <ul className="dropdown__menu">
                        <li className="dropdown__img"/>
                        <li className="dropdown__li">Sign out</li>
                    </ul>
                </Link>
            )}
        </div>
    );
};