import React from 'react';
import { Container } from './BasicComponents';
import { HeadingText, Para } from './Typography';
import 'styles/sidebar.css'

import { BiHome } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import { useColors } from 'customHooks/ColorsHook';

const Sidebar = ({ children }) => {
    const { colors } = useColors();

    const navigatioAssets = [
        { name: "Home", link: "#", icon: BiHome },
        { name: "Profile", link: "#", icon: CgProfile },
        { name: "Friends", link: "#", icon: FiUsers },
        { name: "Settings", link: "#", icon: IoMdSettings },
    ]

    return (
        <div className='sidebar-routes'>
            <div className='total-sidebar' style={{ boxShadow: `2px 2px 3px ${colors?.popupBg}` }}>
                <div className='daj mt-2'>
                    <img src={require('assets/logo.png')} className='sidebar-logo' />
                    <HeadingText>App Name</HeadingText>
                </div>
                <div className=''>

                </div>
            </div>
            <div className='total-routes'>
                {children}
            </div>
        </div>
    );
}

export default Sidebar;
