import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='mx-10 lg:mx-14 mt-14 mb-32'>
            <h1 className='text-center text-4xl font-semibold my-8'>Our Items</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                {
                    items?.map(item=><Item item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Items;