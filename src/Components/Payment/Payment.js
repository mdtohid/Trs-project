import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Loading from '../Loading/Loading';

const Payment = () => {
    const { id } = useParams();
    const stripePromise = loadStripe('pk_test_51MxbmpHtV0GcfVYYpFel6yJgfbHViNc9pRFdmYuKM0kEdNq6EDL2emamG5bdQ0UMMtlkZzFDcriL5o1adqiCJ2nJ009P2BPLFu');

    const { isLoading, error, data: booking } = useQuery({
        queryKey: ['booking', id],
        queryFn: () =>
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex flex-col justify-center items-center mx-5'>
            <h1 className='text-2xl text-purple-500	'>Please pay for {id} for {booking.itemName}</h1>
            <div className="card w-10/12 max-w-md my-12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {booking.ownerName}</p>
                    <h2 className="card-title">Please pay for {booking.itemName}</h2>
                    <p>Please pay: ${booking.totalPrice}</p>
                </div>
            </div>
            <div className="card w-10/12 max-w-md bg-base-100 shadow-2xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;