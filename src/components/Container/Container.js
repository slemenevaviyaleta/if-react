import React from 'react';
import './Container.css';
import classNames from "classnames";

export const Container = ({ children, className }) => {
    return (
        <div className={classNames('container', className)}>
            {children}
        </div>
    );
}
