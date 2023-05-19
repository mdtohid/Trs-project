import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Loading/Loading';

const MyOrderModel = ({ myOrderId, refetch2, bookingLoading}) => {
    const handleRemoveOrder = async (myOrderId) => {
        console.log(myOrderId)
        if (myOrderId) {
            await fetch(`http://localhost:5000/myBooking/${myOrderId}`, {
                method: "DELETE", // or 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
                refetch2();
        }

    }

    if(bookingLoading){
        return <Loading></Loading>
    }

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <label htmlFor="my-modal-5" className="modal cursor-pointer sm:modal-middle">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">You really want to delete this product?</h3>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className='btn' onClick={() => handleRemoveOrder(myOrderId)}>Remove Item</label>
                    </div>
                </label>
            </label>
        </>
    );
};

export default MyOrderModel;