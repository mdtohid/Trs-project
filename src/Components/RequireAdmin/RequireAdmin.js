import { signOut } from 'firebase/auth';
import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Loading/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, LoadAdmin] = useAdmin(user.email);
    const navigate = useNavigate('');
    if(admin && user){
      return children;
    }

    if(loading||LoadAdmin ){
      return <Loading></Loading>;
    }
    
    if(!admin||!user){
       signOut(auth)
       return navigate('/login');
    }
};

export default RequireAdmin;