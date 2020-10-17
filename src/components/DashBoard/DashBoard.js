// import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
// // import OrderList from './OrderList';
// import './dashboard.css'
// import { storeContext, getOrder } from '../State/State';


// const DashBoard = () => {
//     const { storestate, storedispatch } = useContext(storeContext)
//     const { Orders } = storestate;
//     const { User } = storestate
//     let OrderedList = <OrderList products={Orders} />
//     useEffect(() => {
//         getOrder().then(res => storedispatch(res))
//     }, []);
//     return (
//         <div>
//             <h1>DASHBOARD</h1>
//             <div className="orderList" >
//                 {OrderedList}
//             </div>
//         </div>
//     );
// };


// DashBoard.propTypes = {

// };


// export default DashBoard;
