import { useColors } from 'customHooks/ColorsHook';
import React from 'react';

const Switch = ({ handleChange }) => {
    const { colors } = useColors()
    return (
        <label class="switch" >
            <input type="checkbox" onChange={(e) => handleChange(e.target.checked)} />
            <span class="slider round" style={{ backgroundColor: colors?.iconColor }}>light</span>
        </label>
    );
}

export default Switch;
