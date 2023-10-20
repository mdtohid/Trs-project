import React from 'react';
import projectVideo from '../../image/trs.mp4';

const ProjectOverview = () => {
    return ( 
        <div className='w-10/12 lg:w-8/12 mx-auto '>
            <h1 className='text-4xl text-center font-semibold text-green-400 my-5'>Project overview</h1>
            <p className='mb-5 text-lg text-center font-semibold'>Through this video you will know about the functionality and design of this project</p>
            <video className='rounded-lg' controls autoPlay muted>
                <source src={projectVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ProjectOverview;