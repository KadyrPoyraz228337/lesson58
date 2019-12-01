import React from 'react';
import './Modal.css';
import Backdrop from "../backdrop/Backdrop";

const Modal = (
    {show, children, title, close, array}
) => {
    return (
        <>
            <div className={`modalBlock ${show && `modalBlock-visible`}`}>
                <div className='modalHeader'>
                    <h4 className='modalTitle'>{title}</h4>
                    <button onClick={close}> &times; </button>
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
            <Backdrop
                show={show}
                close={close}
            />
        </>
    );
};

export default Modal;