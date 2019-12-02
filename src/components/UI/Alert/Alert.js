import React from 'react';

const Alert = (
    {dismiss, show, children, type}
) => {
    return show && (
        <div
            className={`alert 
            ${type === 'primary' && `alert-primary`} 
            ${type === 'success' && 'alert-success'}
            ${type === 'warning' && 'alert-warning'}
            ${type === 'danger' && 'alert-danger'}
            `
        }>
            {children}
            {dismiss !== undefined && <button type="button" className="close" onClick={dismiss}>
                <span aria-hidden="true">&times;</span>
            </button>}
        </div>
    );
};

export default Alert;