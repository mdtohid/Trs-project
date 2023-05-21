import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Loading/Loading';
import './Dashboard.css';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, LoadAdmin] = useAdmin(user.email);
    console.log(admin, LoadAdmin);

    if (loading || LoadAdmin) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer drawer-mobile h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h1 className='text-2xl text-center font-semibold mt-5'>Welcome to your Dashboard</h1>
                <Outlet />
            </div>
            <div className=" drawer-side max-h-full	">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-gray-100 text-base-content text-xl font-semibold">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    <li><Link to='myReview'>Add a Review</Link></li>
                    <li><Link to='myOrder'>My Orders</Link></li>
                    {
                        admin &&
                        <>
                            <li><Link to='allUsers'>All Users</Link></li>
                            <li><Link to='addItem'>Add a Item</Link></li>
                            <li><Link to='manageItems'>Manage Items</Link></li>
                            <li><Link to='manageAllOrders'>Manage All Orders</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

