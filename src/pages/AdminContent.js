import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const AdminContent = [
    {
        title: 'Dashboard',
        path: '/admin/admin-dashboard',
        icons: <AiIcons.AiFillDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/admin/orders',
        icons: <AiIcons.AiOutlineOrderedList />,
        cName: 'nav-text'
    },
    {
        title: 'Sales',
        path: '/admin/sales',
        icons: <FaIcons.FaBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'Archives',
        path: '/admin/archives',
        icons: <FaIcons.FaArchive />,
        cName: 'nav-text'
    },
 
]
