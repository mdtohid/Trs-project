import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [admin, setAdmin]= useState(false);
    const [LoadAdmin, setLoadAdmin]= useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setLoadAdmin(false);
                    setAdmin(data.admin);
                })
        }
    }, [email]);
    // console.log(admin, LoadAdmin);
    return [admin, LoadAdmin];
};

export default useAdmin;