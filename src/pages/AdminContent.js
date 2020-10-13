import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const AdminContent = [
    {
        title: 'Dashboard',
        path: '/admin-dashboard',
        icons: <AiIcons.AiFillDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Notifications',
        path: '/notifications',
        icons: <FaIcons.FaBell />,
        cName: 'nav-text'
    },
    {
        title: 'Orders',
        path: '/orders',
        icons: <AiIcons.AiOutlineOrderedList />,
        cName: 'nav-text'
    },
    {
        title: 'Sales',
        path: '/sales',
        icons: <FaIcons.FaBriefcase />,
        cName: 'nav-text'
    },
    {
        title: 'Invoice',
        path: '/invoice',
        icons: <FaIcons.FaFileInvoice />,
        cName: 'nav-text'
    },
    {
        title: 'Archives',
        path: '/archives',
        icons: <FaIcons.FaArchive />,
        cName: 'nav-text'
    },
 
]
