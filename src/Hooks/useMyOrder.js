import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useMyOrder = () => {
    const [user, loading, error] = useAuthState(auth);

    const { bookingLoading, error2, data: bookingDetails, refetch: refetch2 } = useQuery({
        queryKey: ['booking', user],
        queryFn: () =>
            fetch(`http://localhost:5000/myBooking/${user?.email}`).then(
                (res) => res.json(),
            ),
    })
    return [bookingLoading, error2, bookingDetails, refetch2];
};

export default useMyOrder;