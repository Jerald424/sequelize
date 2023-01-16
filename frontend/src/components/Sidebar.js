import React from 'react';
import { Container } from './BasicComponents';
import { HeadingText, Para } from './Typography';
import 'styles/sidebar.css'

import { BiHome } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { IoMdSettings } from 'react-icons/io';
import { SlArrowRight } from 'react-icons/sl';
import { useColors } from 'customHooks/ColorsHook';
import Icon from './Icon';
import { ThemeStore } from 'store/theme/colorStore';
import { Hover } from './styleComponent/Hover';

const Sidebar = ({ children }) => {
    const { colors } = useColors();
    const { isDark } = ThemeStore.useState();

    const navigatioAssets = [
        { name: "Home", link: "#", icon: BiHome },
        { name: "Profile", link: "#", icon: CgProfile },
        { name: "Friends", link: "#", icon: FiUsers },
        { name: "Settings", link: "#", icon: IoMdSettings },
    ]

    return (
        <div className='sidebar-routes'>
            <div className={`total-sidebar ${isDark ? "bg-dark" : "bg-light"}`} style={{ boxShadow: `2px 2px 3px ${colors?.popupBg}` }}>
                <div className='daj mt-2'>
                    <img src={require('assets/logo.png')} className='sidebar-logo' />
                    <HeadingText>App Name</HeadingText>
                </div>
                <div className='sidebar-toggle-part'>
                    <Hover color={true} className='toggle-round dajc' style={{ backgroundColor: colors?.backgroundColor, boxShadow: `1px 1px 3px  ${colors?.textSecondary}`, color: colors?.textSecondary }}>
                        {/* <Icon src={SlArrowRight} size={15} style={{ color: colors?.textSecondary }} /> */}
                        <SlArrowRight />
                    </Hover>
                </div>
            </div>
            <div className='total-routes'>
                {children}
            </div>
        </div>
    );
}

export default Sidebar;
