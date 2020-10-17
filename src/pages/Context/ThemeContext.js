import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme ] = useState(true);
    const [light, setLight] = useState({syntax: '#000',  ui: '#fff', badge: '#fff', btnText: 'Light Mode', btnBg: '#000', btnColor: '#fff', bg: "#eee", bgColor: '#000', navbarShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)', sidebarShadow: '0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12)', cardHeader: 'rgb(255, 255, 255)', cardBorder: 'rgba(255,255,255, .8)'});
    const [dark, setDark] = useState({syntax: '#fff', ui: '#000', badge: '#fff', btnText: 'Dark Mode', btnBg: 'rgb(239, 239, 239)', btnColor: 'rgb(74, 74, 74)', bg: "#141414", bgColor: "#fff", navbarShadow: '0 2px 5px 0 rgba(255,255,255,.16), 0 2px 10px 0 rgba(255,255,255,.12)', sidebarShadow: '0 2px 5px 0 rgba(255,255,255,.16), 0 2px 10px 0 rgba(255,255,255,.12)', cardHeader: 'rgba(0,0,0,.8)', cardBorder: 'rgba(0,0,0, .8)'})
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }
    return (
        <ThemeContext.Provider value={{isLightTheme, light, dark, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
