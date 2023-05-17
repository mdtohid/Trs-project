import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyOrder = () => {
    const [user, loading, error] = useAuthState(auth);

    const { isLoading, error1, data: bookingDetails, refetch } = useQuery({
        queryKey: ['booking', user],
        queryFn: () =>
            fetch(`http://localhost:5000/myBooking/${user?.email}`).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
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
                            <th>Payment</th>
                            <th>Delivery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookingDetails?.map((owner, index) =>
                                <tr>
                                    <th>{index+1}</th>
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
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
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