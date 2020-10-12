import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg'
import adminLogo from '../assets/LAMELŌ logo blk.png'

const AdminNavbar = () => {
      return (
        <>
            <div className="admin-navbar">
               <Link to="#" className="menu-bars">
                   <FaIcons.FaBars />
               </Link>
            </div>
        </>
    )
}

export default AdminNavbar
