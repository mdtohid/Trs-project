import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);
    console.log(rating);

    const onSubmit = async (data) => {
        const name = data.name;
        const comment = data.comment;
        const starRating = rating;
        const orderDetails = {
            name,
            comment,
            starRating
        }
        console.log(orderDetails);
        reset();
    };

    const handleRating = (event) => {
        // console.log(event?.target.value);
        setRating(event?.target.value)
    }
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
                <div className="rating rating-lg" onChange={handleRating}>
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" value='1' />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" value='2' />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" value='3' />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" value='4' />
                    <input type="radio" name="rating-1" className="mask mask-star bg-amber-300" value='5' />
                </div>

                <input className='btn btn-outline input input-sm   w-full max-w-md' type="submit" value='ORDER NOW' />
            </form>
        </div>
    );
};

export default MyReview;