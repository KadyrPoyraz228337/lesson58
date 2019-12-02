import React from 'react';

const Alert = (
    {dismiss, show, children, type, clickDismissable}
) => {
    return show && (
        <div
            onClick={clickDismissable && dismiss}
            className={`alert alert-${type}`}
            style={{cursor: clickDismissable && 'pointer'}}
        >
            {children}
            {clickDismissable === undefined && <button type="button" className="close" onClick={dismiss}>
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
};

export default Alert;