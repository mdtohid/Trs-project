import React from 'react';
import html from '../../image/html-5.png';
import css from '../../image/css-3.png';
import tailwind from '../../image/tailwind-css.256x154.png';
import js from '../../image/js.png';
import react from '../../image/react.png';
import node from '../../image/nodejs (1).png';
import mongoDb from '../../image/mongodb.png';
import express from '../../image/express.png';
import firebase from '../../image/firebase.png';

const Technologies = () => {
    return (
        <div className='my-32 mx-10'>
            <h1 className='text-4xl text-center font-semibold text-teal-400	my-5'>Using Technologies</h1>
            <div class="grid grid-cols-3 lg:grid-cols-4 gap-y-16 justify-items-center	items-center mt-20">
                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={html} alt="" width='64' />
                <p className='font-semibold'>HTML</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={css} alt="" width='64' />
                <p className='font-semibold'>CSS</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={tailwind} alt="" width='64' />
                <p className='font-semibold'>Tailwind</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={js} alt="" width='64' />
                <p className='font-semibold'>Javascrpt</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={react} alt="" width='64' />
                <p className='font-semibold'>React.js</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={node} alt="" width='64' />
                <p className='font-semibold'>Node.js</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={express} alt="" width='64' />
                <p className='font-semibold'>Express.js</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={mongoDb} alt="" width='64' />
                <p className='font-semibold'>MongoDB</p></a>

                <a href="/" className='flex flex-col gap-y-2 items-center'><img src={firebase} alt="" width='64' />
                <p className='font-semibold'>Firebase</p></a>
            </div>
        </div>
    );
};

export default Technologies;