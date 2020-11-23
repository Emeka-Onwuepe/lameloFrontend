import React, { useContext } from 'react'
import AdminNavbar from '../AdminNavbar';
import { ThemeContext } from '../Context/ThemeContext'
import ArchivedData from './ArchivedData';
import {storeContext, refreshPage} from "../../components/State/State";
import { useHistory } from 'react-router-dom'

const Archives = () => {
    const theme = useContext(ThemeContext);
    const { isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark;  
    const { storestate, storedispatch } = useContext(storeContext);
    const {logged, AdminUser: {user: {username}}}=storestate
    const history = useHistory()
    if (!logged) {
      history.push("/login");
      refreshPage()
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
