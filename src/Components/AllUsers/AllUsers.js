import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const AllUsers = () => {
    const { isLoading, error1, data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
            fetch(`https://server-12-gx0phzvp9-mdtohid.vercel.app/users`).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleAdmin = async (email) => {
        if (email) {
            await fetch(`https://server-12-gx0phzvp9-mdtohid.vercel.app/adminUser/${email}`, {
                method: "PUT", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                refetch();
            })
        }
    }

    const handleUserDelete = async (email) => {
        if (email) {
            await fetch(`https://server-12-gx0phzvp9-mdtohid.vercel.app/user/${email}`, {
                method: "DELETE", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(),
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                refetch();
            })
        }
    }

    return (
        <div className='w-full'>
            <h1 className='text-2xl text-center font-semibold my-10'>Welcome to your Order</h1>

            <div className="overflow-x-auto w-9/12 mx-auto ">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>User</th>
                            <th>Admin User</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <th>
                                        {user.role ? 
                                        'Already have been Admin'
                                        :
                                        <Link className="btn btn-accent btn-xs" onClick={() =>handleAdmin(user.email)}>Admin</Link>
                                    }
                                    </th>
                                    <th>
                                        <Link className="btn btn-warning btn-xs" onClick={() =>handleUserDelete(user.email)}>Remove</Link>
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

export default AllUsers;