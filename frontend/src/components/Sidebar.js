import React from 'react';
import { Container } from './BasicComponents';
import { Para } from './Typography';

const Sidebar = ({ children }) => {
    return (
        <div >
            <Para>Profile</Para>
            {children}
        </div>
    );
}

export default Sidebar;
