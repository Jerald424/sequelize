import React, { useState } from 'react';
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
import Hover from './styleComponent/Hover';

const Sidebar = ({ children }) => {
    const { colors } = useColors();
    const { isDark } = ThemeStore.useState();
    const [toggle, setToggle] = useState(true)

    const navigationAssets = [
        { name: "Home", link: "#", icon: BiHome },
        { name: "Profile", link: "#", icon: CgProfile },
        { name: "Friends", link: "#", icon: FiUsers },
        { name: "Settings", link: "#", icon: IoMdSettings },
    ]

    return (
        <div className='sidebar-routes'>
            <div className={`total-sidebar ${toggle ? "total-sidebar-active" : "total-sidebar-inactive"} ${isDark ? "bg-dark" : "bg-light"}`} style={{ boxShadow: `2px 2px 3px ${colors?.popupBg}` }}>
                <div className='sidebar-toggle-part' onClick={() => setToggle(!toggle)}>
                    <div color className='toggle-round dajc' style={{ backgroundColor: colors?.backgroundColor, boxShadow: `1px 1px 3px  ${colors?.textSecondary}`, color: colors?.textSecondary }}>
                        <SlArrowRight size={10} />
                    </div>
                </div>
                <div className='daj mt-2' style={{ display: toggle ? "flex" : "none" }}>
                    <img src={require('assets/logo.png')} className='sidebar-logo' />
                    <HeadingText style={{ width: "150px" }}>App Name</HeadingText>
                </div>

                <div style={{ display: toggle ? "block" : "none" }}>
                    <div className='mt-5' >
                        {
                            navigationAssets?.map((res, i) => <Hover className='df p-2 mt-1 br-2' key={i + "navigation"}>
                                <Icon className="me-4" src={res?.icon} />
                                <Para className="f1">{res?.name}</Para>
                            </Hover>)
                        }
                    </div>
                </div>
            </div>
            <div className={`${toggle ? "total-routes-sidebar-on" : "total-routes-sidebar-off"} pt-3`}>
                {children}
            </div>
        </div>
    );
}

export default Sidebar;
