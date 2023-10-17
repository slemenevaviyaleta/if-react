import React from 'react';
import './Download.css';

export const Download = () => {
    return (
        <section className="download">
            <div className="download__google">
                <a href="#!" className="download__button">
                    <div className="svg-google">
                        <img alt="google" src="../images/google.svg" />
                    </div>
                </a>
            </div>
            <div className="download__apple">
                <a href="#!" className="download__button">
                    <svg className="svg-apple" xmlns="http://www.w3.org/2000/svg">
                        <use href="#apple" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
