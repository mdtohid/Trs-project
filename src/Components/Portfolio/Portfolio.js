import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className="card w-11/12 mx-auto bg-red-50 shadow-xl my-14">
                <div className="card-body">
                    <h2 className="text-2xl text-center">Name: Md Tohidur Rahman</h2>
                    <h2 className="text-2xl text-center my-5">Email: sagormdTohid@gmail.com</h2>

                    <div>
                        <h2 className='text-2xl font-semibold text-center my-5'>My Skills</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-5 my-10'>
                            <div className=''>
                                <p className='text-center'>HTML</p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="80" className="range range-xs range-info inline" />
                                    <span className='text-lg'>80%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>JavaScript
                                </p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="70" className="range range-xs range-info inline" />
                                    <span className='text-lg'>70%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>CSS</p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="80" className="range range-xs range-info inline" />
                                    <span className='text-lg'>80%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>ReactJs</p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="60" className="range range-xs range-info inline" />
                                    <span className='text-lg'>60%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>Bootstrap</p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="90" className="range range-xs range-info inline" />
                                    <span className='text-lg'>90%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>NodeJs</p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="60" className="range range-xs range-info inline" />
                                    <span className='text-lg'>60%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>Tailwind</p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="80" className="range range-xs range-info inline" />
                                    <span className='text-lg'>80%</span>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-center'>MongoDB
                                </p>
                                <div className='inline-flex items-baseline gap-3 w-full'>
                                    <input type="range" min="0" max="100" value="50" className="range range-xs range-info inline" />
                                    <span className='text-lg'>50%</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;