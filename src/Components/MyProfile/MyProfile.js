import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import avatar from '../../image/avatar.ico';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';

const MyProfile = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [profile, setProfile]= useState({});

    // const { isLoading, error1, data: profile, refetch } = useQuery({
    //     queryKey: ['myProfile', user],
    //     queryFn: () =>
    //         fetch(`http://localhost:5000/myProfile/${user?.email}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         }).then(
    //              (res) => {
    //                 if (res.status === 403) {
    //                     const signOut = async () => {
    //                         await signOut(auth)
    //                         localStorage.removeItem('accessToken');
    //                         navigate('/login');
    //                     }
    //                     signOut();
    //                 }
    //                 return res.json()
    //             }
    //         ),
    // })
    // console.log(profile);



    // ..........For asynchronous, fetch is the best option ............
    useEffect(() => {
    if (user) {
        fetch(`http://localhost:5000/myProfile/${user?.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                // console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/login');
                }
                return res.json();
            })
            .then(data => setProfile(data));
    }
}, [user, user?.email, navigate]);

    const onSubmit = async (data) => {
        const name = user.displayName;
        const email = user.email;
        const mobileNumber = data.mobileNumber;
        const address = data.address;
        const education = data.education;
        const linkedin = data.linkedin;
        const orderDetails = {
            name,
            email,
            address,
            education,
            linkedin,
            mobileNumber
        }
        console.log(orderDetails);
        reset();

        await fetch(`http://localhost:5000/myProfile`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then(res => res.json())
            .then(data => console.log(data));


        await fetch(`http://localhost:5000/myProfile`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then(res => res.json())
            .then(data => console.log(data));

        // refetch()
    };

    return (
        <div className='w-full'>
            <h1 className='text-2xl text-center font-semibold my-5'>Welcome to your profile</h1>
            <div className='flex flex-col lg:flex-row gap-8 w-full p-10'>
                <div className="card w-full lg:w-6/12 bg-gray-100 shadow-xl py-6">
                    <div className="avatar placeholder mx-auto my-2">
                        <div className="w-32 rounded-full">
                            <img src={avatar} alt='' />
                        </div>
                    </div>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Name: {profile?.name} </h2>
                        <h2 className="card-title">Email: {profile?.email}</h2>
                        <h2 className="card-title">Address: {profile?.address} </h2>
                        <h2 className="card-title">Education: {profile?.education} </h2>
                        <h2 className="card-title">Linkedin Link: {profile?.linkedin} </h2>
                        <h2 className="card-title">Mobile Number: {profile?.mobileNumber}</h2>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 gap-y-8 card w-full lg:w-6/12	justify-center items-center bg-gray-100 shadow-xl p-8'>
                    <div className='w-full max-w-md'>
                        <input
                            placeholder="Mobile Number" className="input input-bordered input-sm py-5   w-full max-w-md"
                            type='tel'
                            {...register("mobileNumber", { required: "Mobile Number is required" })}
                            aria-invalid={errors.mobileNumber ? "true" : "false"}
                        />
                        {errors.mobileNumber && <p role="alert">{errors.mobileNumber?.message}</p>}
                    </div>

                    <div className='w-full max-w-md'>
                        <input
                            placeholder="Address" className="input input-bordered input-sm py-5   w-full max-w-md"
                            {...register("address", { required: "Email Address is required" })}
                            aria-invalid={errors.address ? "true" : "false"}
                        />
                        {errors.address && <p role="alert">{errors.address?.message}</p>}
                    </div>

                    <div className='w-full max-w-md'>
                        <input
                            placeholder="Education" className="input input-bordered input-sm py-5   w-full max-w-md"
                            {...register("education", { required: "Email Address is required" })}
                            aria-invalid={errors.education ? "true" : "false"}
                        />
                        {errors.education && <p role="alert">{errors.education?.message}</p>}
                    </div>

                    <div className='w-full max-w-md'>
                        <input
                            placeholder="Linkedin Link" className="input input-bordered input-sm py-5   w-full max-w-md"
                            {...register("linkedin", { required: "Email Address is required" })}
                            aria-invalid={errors.linkedin ? "true" : "false"}
                        />
                        {errors.linkedin && <p role="alert">{errors.linkedin?.message}</p>}
                    </div>

                    <input className='btn btn-outline input input-sm   w-full max-w-sm' type="submit" value='ORDER NOW' />
                </form>
            </div>
        </div>
    );
};

export default MyProfile;