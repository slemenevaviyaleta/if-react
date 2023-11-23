import React from 'react';
import classNames from "classnames";
import {useContainerStyles} from "./Container.styles";

export const Container = ({children, className}) => {
    const classes = useContainerStyles();
    const combinedClasses = classNames('container', className, classes);
    return (
        <div className={combinedClasses}>
            {children}
        </div>
    );
}
