import React from 'react';
import ceo from '../../image/CEO.jpg';

const NoteCEO = () => {
    return (
        <div className='my-32 mx-10'>
            <h1 className='text-5xl font-semibold'>A note from CEO</h1>
            <p className='text-lg my-4'>I would like to thank all our users and employees. It's always been you guys. Thank you all</p>

            <div className='flex flex-col-reverse lg:flex-row gap-10 w-full'>
                <div className="card bg-base-100 shadow-xl lg:w-7/12">
                    <div className="card-body">
                        <p>I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easily you are managing and handeling everything. I never have any problem at all.</p>

                        <p>I'm grateful to you all and hope we can continue like this.</p>

                        <h2 className="mt-14 text-lg font-semibold">- Md. Tohid</h2>
                        <p className='ms-3'>CEO, trs.com</p>
                    </div>
                </div>

                <img className='lg:w-4/12 mt-14 rounded-lg' src={ceo} alt="" srcset="" />
            </div>
        </div>
    );
};

export default NoteCEO;