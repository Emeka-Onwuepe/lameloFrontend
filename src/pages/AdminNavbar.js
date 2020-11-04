import React, { useState, useContext } from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg'
import adminLogo from '../assets/LAMELŌ logo blk.png'
import { AdminContent } from './AdminContent';
import { ThemeContext } from './Context/ThemeContext';
import Notifications from './Orders/Notification';

const AdminNavbar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSideBar = () => setSidebar(!sidebar)
    const theme = useContext(ThemeContext);
    const { toggleTheme, isLightTheme, light, dark } = theme;
    const checkTheme = isLightTheme ? light : dark
    return (
        <>
            <IconContext.Provider value={{ color: checkTheme.syntax }}>
                <div className="admin-navbar" style={{ background: checkTheme.ui, boxShadow: checkTheme.navbarShadow }}>
                    {console.log(theme)}
                    <Link to="#" className="menu-bars" style={{ background: checkTheme.ui }}>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </Link>&nbsp;
                    <img src={adminLogo} alt="avatar" width={60} height={60} />
                    <span className="user-img">
                        <Link to="#" onClick={toggleTheme}><button style={{ marginRight: '20px', padding: '5px 8px', border: 'none', outline: 'none', color: checkTheme.btnColor, background: checkTheme.btnBg }}>{checkTheme.btnText}</button></Link>
                        <Link to="#"><span className="notebell"><AiIcons.AiOutlineBell className="notification-bell" /><span className="notification-badge" style={{ color: checkTheme.badge }}><Notifications /></span></span></Link>&nbsp;
                  <Link to="#"><img src={avatar} alt="avatar" width={40} height={40} style={{ borderRadius: '50%' }} /></Link>
                    </span>


                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"} style={{ background: checkTheme.ui, boxShadow: checkTheme.sidebarShadow }}>
                    <ul className="nav-menu-items" onClick={showSideBar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars" >
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {AdminContent.map((item, index) => (
                            <li key={index} className={item.cName} >
                                <Link to={item.path} style={{ color: checkTheme.syntax }}>
                                    {item.icons}
                                    <span className="titles">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default AdminNavbar
