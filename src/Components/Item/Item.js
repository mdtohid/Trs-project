import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const { _id, name, price, description, photoUrl, availableQuantity, mustQuantity} = item;
    return (
        <div className="card bg-gray-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={photoUrl} alt="Shoes" className="rounded-xl bg-white" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-3">{name}</h2>
                <p className="mb-3">{description}</p>
                <p className="mb-3">Available Quantity: {availableQuantity}</p>
                <p className="mb-3 font-semibold text-lg">Price: ${price}</p>
                <div className="card-actions">
                    <Link to={`/items/${_id}`} className="btn btn-outline">ORDER NOW: {name}</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;