import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, useLocation, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import logo from '../../image/saw.png';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);

    const location = useLocation();
    const pathname = location.pathname;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    const navbarOption =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/items'>Items</Link></li>
            <li><Link to='/team'>Team</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
        </>

    if (loading || loading1) {
        return <Loading></Loading>
    }
    return (
        <div className="navbar bg-gray-100 py-4 lg:px-16 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">

                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarOption}
                    </ul>
                </div>
                <img src={logo} alt="" />
                <Link to='/' className="ms-2 font-semibold normal-case lg:text-2xl text-cyan-400">TRS-service</Link>
            </div>

            <div className="navbar-end flex">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {navbarOption}
                </ul>
                {
                    user ? <Link onClick={async () => await signOut()} className="btn btn-outline btn-primary">Logout</Link>
                        :
                        <Link to='/login' className="btn btn-outline btn-primary">LOGIN</Link>
                }
                

                {
                    pathname === '/dashboard'
                    ||
                    pathname === '/dashboard/myReview'
                    ||
                    pathname === '/dashboard/myOrder'
                    ||
                    pathname === '/dashboard/allUsers'
                    ||
                    pathname === '/dashboard/addItem'
                    ||
                    pathname === '/dashboard/manageItems'
                    ||
                    pathname === '/dashboard/manageAllOrders'
                    ?
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* <!-- Page content here --> */}
                            <label htmlFor="my-drawer-2" className="btn btn-info drawer-button lg:hidden ms-2">Dashboard</label>
                        </div>
                        :
                        ''
                }
            </div>
        </div>
    );
};

export default Header;