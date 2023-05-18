import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ManageAllOrders = () => {
    const { isLoading, error1, data: bookings, refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: () =>
          fetch(`https://server-12-gx0phzvp9-mdtohid.vercel.app/booking`).then(
            (res) => res.json(),
          ),
      })

      if(isLoading){
        return <Loading></Loading>
      }

    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center font-semibold text-purple-400 my-10'>Manage Items</h1>

            <div className="overflow-x-auto w-11/12 lg:w-10/12 mx-auto">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Owner Email</th>
                            <th>Order Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map((booking, index) =>
                                <tr>
                                    <th>{index + 1}</th>

                                    <td className="font-semibold">
                                        {booking.email}
                                    </td>

                                    <td className="font-semibold">
                                        {booking.itemName}
                                    </td>

                                    <td className="font-semibold">
                                        {booking.quantity}
                                    </td>

                                    <td className="font-semibold">
                                        {booking.totalPrice}
                                    </td>

                                    <th>
                                        {booking.paid?
                                        <p>Paid</p>
                                        :
                                        <Link to={`/dashboard/payment/${booking._id}`}  className="btn btn-success btn-xs">Payment</Link>
                                        }
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

export default ManageAllOrders;