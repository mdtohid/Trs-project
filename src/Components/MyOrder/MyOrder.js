import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyOrder = ({ bookingLoading, bookingDetails, setMyOrderId }) => {

    if (bookingLoading) {
        return <Loading></Loading>
    }

    console.log(bookingDetails);
    return (
        <div className='w-full'>
            <h1 className='text-2xl text-center font-semibold my-10'>Welcome to your Order</h1>

            <div className="overflow-x-auto w-11/12 mx-auto ">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className='text-center'>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookingDetails?.map((owner, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            {/* <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div> */}
                                            <div>
                                                <div className="font-bold">{owner?.ownerName}</div>
                                                <div className="text-sm opacity-50">{owner.address}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {owner.email}
                                    </td>
                                    <td>{owner.totalPrice}</td>
                                    <td>{owner.quantity}</td>
                                    <td>
                                        {owner.paid ?
                                            <p className='text-center font-semibold text-lg'>Paid</p>
                                            :
                                            <div className='flex flex-col items-center'>
                                                <Link to={`/dashboard/payment/${owner._id}`} className="btn btn-success btn-xs">Payment</Link>
                                                <p className=''>Or</p>
                                                <label htmlFor="my-modal-5" className="btn btn-error btn-xs"
                                                    onClick={() => setMyOrderId(owner._id)}
                                                >Remove</label>
                                            </div>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;