import React from 'react';
import { Container } from './BasicComponents';
import { Para } from './Typography';

const Sidebar = ({ children }) => {
    return (
        <Container className="dajc" padding={0}>
            <div >
                <Para>Profile</Para>
            </div>
            {children}
        </Container>
    );
}

export default Sidebar;
