import React from 'react';
import icon1 from '../../image/flags.png';
import icon2 from '../../image/device.png';
import icon3 from '../../image/rating (1).png';
import icon4 from '../../image/review.png';
const BusinessSummary = () => {
    return (
        <div className='my-20 lg:my-24'>
            <h1 className='text-4xl text-center font-semibold text-emerald-500	my-5'>MILLIONS BUSINESS TRUST US </h1>
            <p className='text-lg text-center font-semibold '>TRY TO UNDERSTAND USERS EXPECTATION</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-10 mx-10'>
                <div className='flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-emerald-200 my-10'>
                    <img className='' src={icon1} alt="" />
                    <h1 className='text-4xl font-semibold'>72</h1>
                    <p className='text-md font-semibold mb-5'>Countries</p>
                </div>
                <div className='flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-emerald-200 my-10'>
                    <img className='' src={icon2} alt="" />
                    <h1 className='text-4xl font-semibold'>535+</h1>
                    <p className='text-md font-semibold mb-5'>Complete Projects</p>
                </div>
                <div className='flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-emerald-200 my-10'>
                    <img className='' src={icon3} alt="" />
                    <h1 className='text-4xl font-semibold'>273+</h1>
                    <p className='text-md font-semibold mb-5'>Happy Clients</p>
                </div>
                <div className='flex flex-col items-center justify-center my-10'>
                    <img className='' src={icon4} alt="" />
                    <h1 className='text-4xl font-semibold'>432+</h1>
                    <p className='text-md font-semibold mb-5'>Feedbacks</p>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;