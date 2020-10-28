import React from 'react'
import { NavLink } from 'react-router-dom'

const NotificationBox = () => {
    return (
        <div className="notify" style={notifyStyle}>
             <div style={modalStyle}>
                  <h3><NavLink to="/admin/notifications" style={linkStyle}>You have a new order</NavLink></h3>
             </div>
        </div>
    )
}



const notifyStyle = {
    height: '100%',
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center'
}

const modalStyle = {
    height: '30%',
    width: '30%',
    background: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
}

const linkStyle = {
    color: '#fefefa'
}

export default NotificationBox
