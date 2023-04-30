import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold my-5'>Our Items</h1>
            <div className='grid grid-cols-3 gap-3'>
                {
                    items.map(item=><Item></Item>)
                }
            </div>
        </div>
    );
};

export default Items;