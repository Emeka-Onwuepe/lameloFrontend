import React, { useContext } from 'react'
import AdminNavbar from '../AdminNavbar'
import { ThemeContext } from '../Context/ThemeContext'

const Archives = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    return (
        <div className="ms-content-wrapper" style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
            <AdminNavbar />
            <div className="archives">
                <h1>Archives</h1>
            </div>
        </div>
    )
}

export default Archives
