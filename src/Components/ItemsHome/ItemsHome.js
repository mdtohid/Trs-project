import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import Loading from '../Loading/Loading';

const ItemsHome = () => {
    // const [items, setItems] = useState([]);

    const { isLoading, error1, data: items, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: () =>
            fetch(`https://server-12-mdtohid.vercel.app/items`).then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    if(error1){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     const loadItems = async () => {
    //         await fetch('https://server-12-mdtohid.vercel.app/items')
    //             .then(res => res.json())
    //             .then(data => setItems(data))
    //     }
    //     loadItems();
    // }, []);

    // console.log(items);

    // Loading alternative is if(){}

    if (items) {
        return (
            <div className='mx-10 mt-14'>
                <h1 className='text-center text-4xl font-semibold my-8'>Our Items</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-14'>
                    {
                        items.slice(0, 3)?.map(item => <Item item={item}></Item>)
                    }
                </div>
                <div className='text-center my-5'>
                    <Link to='/items' className='btn btn-outline'>See more</Link>
                </div>
            </div>
        );
    }
};

export default ItemsHome;