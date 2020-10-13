import React, {useContext} from 'react'
import AdminNavbar  from './AdminNavbar'
import { ThemeContext } from './Context/ThemeContext'

const Sales = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;
    return (
        <div className="ms-content-wrapper" style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
           <AdminNavbar />
            <div className="sales">
                <h1>Sales</h1>
            </div>
        </div>
    )
}

export default Sales
