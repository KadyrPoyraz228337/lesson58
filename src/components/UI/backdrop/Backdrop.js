import React from 'react';
import './Backdrop.css';

const Backdrop = (
    {show,close}
) => {
    return (
        <>
            {show && <div onClick={close} className={`backdrop ${show && `backdrop-visible`}`}/>}
        </>
        )
};

export default Backdrop;