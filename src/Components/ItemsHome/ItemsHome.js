import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const ItemsHome = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div className='mx-10'>
            <h1 className='text-center text-4xl font-semibold my-5'>Our Items</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                {
                    items.slice(0, 3).map(item => <Item item={item}></Item>)
                }
            </div>
            <div className='text-center my-5'>
                <Link className='btn btn-outline'>See more</Link>
            </div>
        </div>
    );
};

export default ItemsHome;