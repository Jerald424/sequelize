import React, { createContext, useEffect } from 'react';
import { ThemeStore } from 'store/theme/colorStore';
import { dark, light } from 'supportData/colors';

export const ThemeCxt = createContext()
const ThemeContext = ({ children }) => {
    const { isDark } = ThemeStore.useState()
    const colors = isDark ? dark : light;

    const toggleTheme = async (value) => {
        ThemeStore.update(s => {
            s.isDark = value
        })
        await localStorage.setItem('isDark', JSON.stringify(value))
    }

    useEffect(() => {
        async function getInitialTheme() {
            let value = await localStorage.getItem('isDark')
            if (value !== null) ThemeStore.update(s => {
                s.isDark = JSON.parse(value)
            })
        }
        getInitialTheme()
    }, [])

    return (
        <ThemeCxt.Provider value={{ colors, toggleTheme }}>
            {children}
        </ThemeCxt.Provider>
    );
}

export default ThemeContext;
