import React from 'react';
import './modal.css';
import Backdrop from "../backdrop/backdrop";

const Modal = (
    {show, children, title}
) => {
    return (
        <>
            <div className={`modalBlock ${show && `modalBlock-visible`}`}>
                <div className='modalHeader'>
                    <h4 className='modalTitle'>{title}</h4>
                    <button> &times; </button>
                </div>
                <div className='modalBody'>
                    {children}
                </div>
                <div className='modalFooter'>
                    <button>
                        ok
                    </button>
                </div>
            </div>
            <Backdrop show={show}/>
        </>
    );
};

export default Modal;