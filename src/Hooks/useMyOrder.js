import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useMyOrder = () => {
    const [user, loading, error] = useAuthState(auth);

    const { bookingLoading, error2, data: bookingDetails, refetch } = useQuery({
        queryKey: ['booking', user],
        queryFn: () =>
            fetch(`https://server-12-mdtohid.vercel.app/myBooking/${user?.email}`).then(
                (res) => res.json(),
            ),
    })
    const refetch2=()=>{
        refetch();
    }
    return [bookingLoading, error2, bookingDetails, refetch2];
};

export default useMyOrder;