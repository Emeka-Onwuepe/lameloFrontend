import React from 'react'
import avatar from '../assets/avatar.jpg'
import adminLogo from '../assets/LAMELŌ logo blk.png'

const AdminNavbar = () => {

    // function collapseSidebar() {
    //     body.classList.toggle('sidebar-expand')
    // }
    return (
        <div className="navbar">
        {/* nav left */}
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link">
                <i className="fas fa-bars" />
            </a>
            </li>
            <li className="nav-item">
            <img src={adminLogo} alt="ATPro logo" className="logo logo-light" />
            <img src={adminLogo} alt="ATPro logo" className="logo logo-dark" />
            </li>
        </ul>
        {/* end nav left */}
        {/* form */}
        <form className="navbar-search">
            <input type="text" name="Search" className="navbar-search-input" placeholder="What you looking for..." />
            <i className="fas fa-search" />
        </form>
        {/* end form */}
        {/* nav right */}
        <ul className="navbar-nav nav-right">
            <li className="nav-item mode">
            <a className="nav-link" href="#" onclick="switchTheme()">
                <i className="fas fa-moon dark-icon" />
                <i className="fas fa-sun light-icon" />
            </a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link">
                <i className="fas fa-bell dropdown-toggle" data-toggle="notification-menu" />
                <span className="navbar-badge">15</span>
            </a>
            <ul id="notification-menu" className="dropdown-menu notification-menu">
                <div className="dropdown-menu-header">
                <span>
                    Notifications
                </span>
                </div>
                <div className="dropdown-menu-content overlay-scrollbar scrollbar-hover">
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-gift" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-tasks" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-gift" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-tasks" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-gift" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-tasks" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-gift" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-tasks" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-gift" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-tasks" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-gift" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                <li className="dropdown-menu-item">
                    <a href="#" className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-tasks" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        <br />
                        <span>
                        15/07/2020
                        </span>
                    </span>
                    </a>
                </li>
                </div>
                <div className="dropdown-menu-footer">
                <span>
                    View all notifications
                </span>
                </div>
            </ul>
            </li>
            <li className="nav-item avt-wrapper">
            <div className="avt dropdown">
                <img src={avatar} alt="User image" className="dropdown-toggle" data-toggle="user-menu" />
                <ul id="user-menu" className="dropdown-menu">
                <li className="dropdown-menu-item">
                    <a className="dropdown-menu-link">
                    <div>
                        <i className="fas fa-user-tie" />
                    </div>
                    <div>
                        <span>Profile</span>
                    </div></a></li><li classname="dropdown-menu-item"><a className="dropdown-menu-link">
                    </a><a href="#" classname="dropdown-menu-link">
                    <div>
                        <i classname="fas fa-cog">
                        </i></div><i classname="fas fa-cog">
                        <span>Settings</span>
                    </i></a><i classname="fas fa-cog">
                    </i></li><i classname="fas fa-cog">
                    <li classname="dropdown-menu-item">
                    <a href="#" classname="dropdown-menu-link">
                        <div>
                        <i classname="far fa-credit-card">
                        </i></div><i classname="far fa-credit-card">
                        <span>Payments</span>
                        </i></a><i classname="far fa-credit-card">
                    </i></li><i classname="far fa-credit-card">
                    <li classname="dropdown-menu-item">
                        <a href="#" classname="dropdown-menu-link">
                        <div>
                            <i classname="fas fa-spinner">
                            </i></div><i classname="fas fa-spinner">
                            <span>Projects</span>
                        </i></a><i classname="fas fa-spinner">
                        </i></li><i classname="fas fa-spinner">
                        <li classname="dropdown-menu-item">
                        <a href="#" classname="dropdown-menu-link">
                            <div>
                            <i classname="fas fa-sign-out-alt">
                            </i></div><i classname="fas fa-sign-out-alt">
                            <span>Logout</span>
                            </i></a><i classname="fas fa-sign-out-alt">
                        </i></li><i classname="fas fa-sign-out-alt">
                        {'{'}/* end nav right */{'}'}
                        </i></i></i></i></ul></div><i classname="fas fa-cog"><i classname="far fa-credit-card"><i classname="fas fa-spinner"><i classname="fas fa-sign-out-alt">
                    </i></i></i></i></li></ul></div>

    )
}

export default AdminNavbar
