import React, { useContext } from 'react'
import AdminNavbar from '../AdminNavbar';
import { ThemeContext } from '../Context/ThemeContext'
import ArchivedData from './ArchivedData';
import {storeContext} from "../../components/State/State";
import { Redirect } from 'react-router-dom'

const Archives = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;  
    const { storestate, storedispatch } = useContext(storeContext);
    const{logged, AdminUser: {user: {username}}}=storestate
      if (!logged) {
        return <Redirect to="/login" />
    }
    return (
        <div style={{backgroundColor: checkTheme.bg, color: checkTheme.bgColor}}>
            <AdminNavbar />
            <div className="archives-page">
              <div className="archive-welcome"><h2 style={{textAlign: 'center'}}>Welcome, {username}</h2></div>
              <ArchivedData />
            </div>
        </div>
    )
}

export default Archives
