import React from 'react';
import google from '../../image/google.ico';
import github from '../../image/github.ico';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router';
const SignWithOthers = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    // console.log(gitUser);

    if(gUser||gitUser){
        navigate('/');
    }
    
    if(gLoading||gitLoading){
        return <Loading></Loading>
    }

    
    return (
        <div className='w-8/12 md:w-4/12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <button className='flex items-center justify-center bg-cyan-100 px-2 py-1 rounded-lg gap-4' onClick={()=>signInWithGoogle()}>
                <img className='w-7' src={google} alt="" srcset="" />
                <p className='text-center text-sm'>Sign in <br /> with google</p>
            </button>

            <button className='flex items-center justify-center bg-slate-200 px-2 py-1 rounded-lg gap-4' onClick={()=>signInWithGithub()}>
                <img className='w-7 iconColor' src={github} alt="" srcset="" />
                <p className='text-center text-sm'>Sign in <br /> with github</p>
            </button>
        </div>
    );
};

export default SignWithOthers;