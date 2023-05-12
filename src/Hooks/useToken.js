import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // const email = user?.email;
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            console.log(email);
            console.log(currentUser);
            const user1 = async () => {
                await fetch(`http://localhost:5000/users/${email}`, {
                    method: "PUT", // or 'PUT'
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setToken(data.token)
                        localStorage.setItem("accessToken", token);
                    })
            }
            user1();
        }
    }, [user, token]);
    return [token];
};

export default useToken;