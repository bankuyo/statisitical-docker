import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
export default () => {
    return (
        <div>
            I'm in Landing Page
            <Link to="/">Go to home</Link>
        </div>
    );
};