import React, { useEffect } from 'react';
import {useModalStyles} from "./Modal.styles";
export const Modal = ({ isOpen, onClose }) => {
    const classes = useModalStyles();

    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            const originalOverflow = body.style.overflow;
            body.style.overflow = 'hidden';

            return () => {
                body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen]);


    if (!isOpen) return null;
    return (
        <div className={classes.modalOverlay} onClick={onClose}>
            <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalContent}>
                    <h2 className={classes.modalTitle}>Sign in</h2>
                    <p className={classes.modalSubtitle}>Email address</p>
                    <input type="email" className={`${classes.modalInput} ${classes.email}`} onClick={(e) => e.stopPropagation()}/>
                    <p className={classes.modalSubtitle}>Password</p>
                    <input type="text" className={classes.modalInput} onClick={(e) => e.stopPropagation()}/>
                    <button className={classes.modalBtn} onClick={(e) => e.stopPropagation()}>Sign in</button>
                </div>
            </div>
        </div>
    );
};
