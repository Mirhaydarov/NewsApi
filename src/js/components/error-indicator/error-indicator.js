import React from 'react';

import './error-indicator.scss';
import icon from './image/error-icon.webp';

function ErrorIndicator() {
    return (
        <div className="error-indicator">
            <img
                className="error-indicator__img"
                src={icon}
                art="error"
            />
            <h3 className="error-indicator__title">Something has gone terribly wrong</h3>
            <p className="error-indicator__desc">(but we already to fix it)</p>
        </div>
    );
}

export default ErrorIndicator;
