import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const ManageItems = ({items, isLoading, setId}) => {
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-full'>
            <h1 className='text-3xl text-center font-semibold text-purple-400 my-10'>Manage Items</h1>

            <div className="overflow-x-auto w-11/12 lg:w-9/12 mx-auto">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Remove Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            items.map((item, index) =>
                                <tr>
                                    <th>{index + 1}</th>

                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.photoUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>

                                    <td className="font-bold">
                                        {item.name}
                                    </td>

                                    <th>
                                        <label htmlFor="my-modal-4" className="btn btn-warning btn-xs"
                                        onClick={()=>setId(item._id)}
                                        >Remove</label>
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

export default ManageItems;