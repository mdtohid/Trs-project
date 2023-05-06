import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            {/* drawer for mobile responsive */}
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content bg-gray-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 3</a></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Dashboard;

