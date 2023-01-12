import { useColors } from 'customHooks/ColorsHook';
import React from 'react';
import Icon from './Icon';
import { BsSunFill } from 'react-icons/bs';
import { IoMdMoon } from 'react-icons/io';
import { ThemeStore } from 'store/theme/colorStore';

const Switch = ({ handleChange, size = 3, className, value }) => {
    const { colors } = useColors();
    const { isDark } = ThemeStore.useState()
    return (
        <label class={`switch ${className}`}>
            <input type="checkbox" onChange={(e) => handleChange(e.target.checked)} value={value} />
            <span class="slider round" style={{ backgroundColor: colors?.iconColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon src={isDark ? IoMdMoon : BsSunFill} size={17} style={{ color: 'white', marginRight: isDark ? '23px' : '-23px' }} />
            </span>
        </label>
    );
}

export default Switch;

/* 
height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
*/