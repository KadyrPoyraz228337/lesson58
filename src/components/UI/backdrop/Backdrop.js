import React from 'react';
import './Backdrop.css';

const Backdrop = (
    {show,close}
) => {
    const objects = [
        {type: 'primary', label: 'Continue', clicked: this.continued},
        {type: 'danger', label: 'Close', clicked: this.closed}
    ];
    return (
        <>
            {show && <div onClick={close} className={`backdrop ${show && `backdrop-visible`}`}/>}
        </>
        )
};

export default Backdrop;