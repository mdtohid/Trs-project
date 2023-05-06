import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';

const OrderItem = () => {
    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [quantity, setQuantity] = useState(0);
    // console.log(quantity);

    const { isLoading, error, data: item } = useQuery({
        queryKey: ['items', id],
        queryFn: () =>
            fetch(`http://localhost:5000/items/${id}`).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    const { _id, name, price, description, photoUrl, availableQuantity, mustQuantity } = item;

    const onSubmit = async (data) => {
        const ownerName = data.name;
        const email = data.email;
        const mobileNumber = data.mobileNumber;
        const address = data.address;
        const quantity = data.quantity;
        const orderDetails = {
            itemId: _id,
            itemName: name,
            ownerName: ownerName,
            email,
            mobileNumber,
            address,
            quantity
        }
        console.log(orderDetails);
        reset();

        await fetch("http://localhost:5000/booking", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderDetails),
        })
            .then(res => res.json())
            .then(data => console.log(data));
    };




    return (
        <div className='card w-10/12 bg-slate-100 mx-auto grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center p-10 my-10 gap-12 lg:gap-4'>
            <div className=''>
                <img src={photoUrl} className='bg-white p-10 rounded-lg' alt="" sizes="" srcset="" />
            </div>
            <div className='text-center flex flex-col gap-4'>
                <h1 className='text-3xl font-semibold '>{name}</h1>
                <h1 className='text-lg '>{description}</h1>
                <h1 className='text-lg font-semibold '>Available Quantity:{availableQuantity}</h1>
                <h1 className='text-lg font-semibold '>Must take Quantity:{mustQuantity}</h1>
                <h1 className='text-xl font-semibold '>Price: ${price}</h1>
            </div>
            <div className='w-11/12	'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                    <input
                        placeholder="Full name" className="input input-bordered w-full max-w-xs"
                        {...register("name", { required: true })}
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name?.type === 'required' && <p role="alert">First name is required</p>}

                    <input
                        placeholder="Enter Email" className="input input-bordered w-full max-w-xs"
                        {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}

                    <input
                        placeholder="Enter Number" className="input input-bordered w-full max-w-xs"
                        type='tel'
                        {...register("mobileNumber", { required: "Mobile Number is required" })}
                        aria-invalid={errors.mobileNumber ? "true" : "false"}
                    />
                    {errors.mobileNumber && <p role="alert">{errors.mobileNumber?.message}</p>}

                    <input
                        placeholder="Enter Address" className="input input-bordered w-full max-w-xs"
                        {...register("address", { required: "Email Address is required" })}
                        aria-invalid={errors.address ? "true" : "false"}
                    />
                    {errors.address && <p role="alert">{errors.address?.message}</p>}

                    <input

                        placeholder="Enter Quantity" className="input input-bordered w-full max-w-xs"
                        type='number'
                        {...register("quantity", {
                            required: "Quantity is required",
                            onChange: (e) => {
                                setQuantity(e.target.value)
                            }
                        })}
                        aria-invalid={errors.quantity ? "true" : "false"}
                    />
                    {errors.quantity && <p role="alert">{errors.quantity?.message}</p>}
                    <input className={quantity >= mustQuantity ? 'btn btn-outline w-fit' : 'btn btn-outline w-fit btn-disabled'} type="submit" value='ORDER NOW' />
                </form>
            </div>
        </div>
    );
};

export default OrderItem;