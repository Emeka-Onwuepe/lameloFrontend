import React, { useContext } from 'react'
import AdminNavbar from '../AdminNavbar';
import { ThemeContext } from '../Context/ThemeContext'
import ArchivedData from './ArchivedData';
import {storeContext} from "../../components/State/State";

const Archives = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;  
    const { storestate, storedispatch } = useContext(storeContext);
    const{logged, AdminUser}=storestate
      if (!logged) {
        return window.location = "/login";
    }
    return (
        <div style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
            <AdminNavbar />
            <div className="archives-page">
              <div className="archive-welcome"><h2 style={{textAlign: 'center'}}>Welcome, {AdminUser.user.username}</h2></div>
              <ArchivedData />
            </div>
        </div>
    )
}

export default Archives
