import React, { useEffect } from 'react';
import './Modal.css';

export const Modal = ({ isOpen, onClose }) => {
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
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <h2 className="modal__title">Sign in</h2>
                    <p className="modal__subtitle">Email address</p>
                    <input type="email" className="modal__input email" onClick={(e) => e.stopPropagation()}/>
                    <p className="modal__subtitle">Password</p>
                    <input type="text" className="modal__input" onClick={(e) => e.stopPropagation()}/>
                    <button className="modal__btn" onClick={(e) => e.stopPropagation()}>Sign in</button>
                </div>
            </div>
        </div>
    );
};
