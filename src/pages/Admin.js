import React from 'react';
import AdminNavbar from './AdminNavbar';

// import './Admin.css'
import AdminSideBar from './AdminSideBar';
import AdminContent from './AdminContent';


const Admin = () => {

    return (
       <div className="overlay-scrollbar">
            <AdminNavbar />
            {/* <AdminSideBar />
            <AdminContent /> */}
       </div>
    )
}

export default Admin
