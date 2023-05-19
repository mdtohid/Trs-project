import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useItems = () => {
    const { isLoading, error1, data: items, refetch } = useQuery({
        queryKey: ['items'],
        queryFn: () =>
            fetch(`https://server-12-mdtohid.vercel.app/items`).then(
                (res) => res.json(),
            ),
    })
    return [isLoading, error1, items, refetch ]
};

export default useItems;