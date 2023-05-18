import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import StarRating from '../StarRating/StarRating';
import './MyReview.css';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);
    console.log(rating);

    const deviceWidth = window.screen.width;
    console.log(`Device width: ${deviceWidth}px`);

    const onSubmit = async (data) => {
        const name = data.name;
        const comment = data.comment;
        const starRating = rating;
        const review = {
            name,
            comment,
            starRating
        }
        console.log(review);
        await fetch(`https://server-12-gx0phzvp9-mdtohid.vercel.app/myReview`, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then(res => res.json())
            .then(data => console.log(data));

        reset();
    };

    return (
        <div className='w-full'>
            <h1 className='text-2xl text-center font-semibold my-5'>Welcome to your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 gap-y-8 card w-10/12 lg:w-6/12 justify-center items-center bg-gray-100 shadow-xl p-8 mx-auto my-10'>
                <div className='w-full max-w-md'>
                    <input
                        placeholder="Name" className="input input-bordered input-sm py-5   w-full max-w-md"
                        {...register("name", { required: "Name is required" })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && <p role="alert">{errors.name?.message}</p>}
                </div>

                <div className='w-full max-w-md'>
                    <textarea
                        placeholder="Comment" className="textarea textarea-bordered textarea-md w-full max-w-md"
                        {...register("comment", { required: "Comment is required" })}
                        aria-invalid={errors.comment ? "true" : "false"}
                    />
                    {errors.comment && <p role="alert">{errors.comment?.message}</p>}
                </div>

                <div className='w-full'>
                    <StarRating setRating={setRating}></StarRating>
                    <input className='btn btn-outline input input-sm   w-full max-w-md' type="submit" value='ORDER NOW' />
                </div>
            </form>
        </div>
    );
};

export default MyReview;