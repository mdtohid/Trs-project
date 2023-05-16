import React from 'react';
import './Team.css';
import team1 from '../../image/team1.jpg';
import team2 from '../../image/team2.jpg';
import team3 from '../../image/team3.jpg';
import team4 from '../../image/team4.jpg';
import team5 from '../../image/team5.jpg';
import team6 from '../../image/team6.jpg';

const Team = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-28 gap-x-14 my-32 mx-10'>

            <div className="card bg-slate-50 shadow-xl flex items-center justify-center mx-auto">
                <div className="avatar forPadding">
                    <div className="w-32 lg:w-36 rounded-full ">
                        <img className='' src={team1} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Rachel Adams
                    </h2>
                    <p className='text-md my-1'>Product Design Head</p>
                    <p>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
                    </p>
                </div>
            </div>

            <div className="card bg-slate-50 shadow-xl flex items-center justify-center mx-auto">
                <div className="avatar forPadding">
                    <div className="w-32 lg:w-36 rounded-full ">
                        <img className='' src={team2} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Rachel Adams
                    </h2>
                    <p className='text-md my-1'>Product Design Head</p>
                    <p>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
                    </p>
                </div>
            </div>

            <div className="card bg-slate-50 shadow-xl flex items-center justify-center mx-auto">
                <div className="avatar forPadding">
                    <div className="w-32 lg:w-36 rounded-full ">
                        <img className='' src={team3} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Rachel Adams
                    </h2>
                    <p className='text-md my-1'>Product Design Head</p>
                    <p>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
                    </p>
                </div>
            </div>

            <div className="card bg-slate-50 shadow-xl flex items-center justify-center mx-auto">
                <div className="avatar forPadding">
                    <div className="w-32 lg:w-36 rounded-full ">
                        <img className='' src={team4} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Rachel Adams
                    </h2>
                    <p className='text-md my-1'>Product Design Head</p>
                    <p>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
                    </p>
                </div>
            </div>

            <div className="card bg-slate-50 shadow-xl flex items-center justify-center mx-auto">
                <div className="avatar forPadding">
                    <div className="w-32 lg:w-36 rounded-full ">
                        <img className='' src={team5} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Rachel Adams
                    </h2>
                    <p className='text-md my-1'>Product Design Head</p>
                    <p>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
                    </p>
                </div>
            </div>

            <div className="card bg-slate-50 shadow-xl flex items-center justify-center mx-auto">
                <div className="avatar forPadding">
                    <div className="w-32 lg:w-36 rounded-full ">
                        <img className='' src={team6} alt='' />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl">Rachel Adams
                    </h2>
                    <p className='text-md my-1'>Product Design Head</p>
                    <p>Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Team;