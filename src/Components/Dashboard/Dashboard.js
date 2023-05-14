import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl text-center font-semibold mt-5'>Welcome to your Dashboard</h1>
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-gray-100 text-base-content text-xl font-semibold">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='myReview'>Add a Review</Link></li>
                    <li><Link to='myOrder'>My Orders</Link></li>
                    <li><Link to='allUsers'>All Users</Link></li>
                    <li><Link to='addItem'>Add a Item</Link></li>
                    <li><Link to='manageItems'>Manage Items</Link></li>
                    <li><Link to=''>Manage All Orders</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

