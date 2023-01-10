import { useColors } from 'customHooks/ColorsHook';
import React from 'react';
import Icon from './Icon';
import { BiSun } from 'react-icons/bi';

const Switch = ({ handleChange, size = 3 }) => {
    const { colors } = useColors();
    return (
        <label class="switch" >
            <input type="checkbox" onChange={(e) => handleChange(e.target.checked)} />
            <span class="slider round" style={{ backgroundColor: colors?.iconColor, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon src={BiSun} size={30} style={{ color: 'red' }} />
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