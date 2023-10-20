import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [admin, setAdmin]= useState(false);
    const [LoadAdmin, setLoadAdmin]= useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://trs-project-server-side-main.vercel.app/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setLoadAdmin(false);
                    setAdmin(data.admin);
                })
        }
    }, [email]);
    return [admin, LoadAdmin];
};

export default useAdmin;