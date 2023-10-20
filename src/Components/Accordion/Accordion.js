import React from 'react';

const Accordion = () => {
    return (
        <div className='my-32 mx-10 flex flex-col gap-y-2'>
            <h1 className='text-3xl font-semibold mb-5'>FAQ</h1>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What's the best way to get started?
                </div>
                <div className="collapse-content">
                    <p>FIGMA/PSD/AI/PNG/XD/SKETCH Source file.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Do you have any more questions?
                </div>
                <div className="collapse-content">
                    <p>Please inbox me. <br />
                        Linkedin link: <br />
                        https://www.linkedin.com/messaging/thread/2-ODU3ZTgwMTktODhmZC00YTlhLTliMjItNGU0MzcwMDM4YjgxXzAxMw==/
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Are you open to doing any custom work?
                </div>
                <div className="collapse-content">
                    <p>I enjoy working on very complicated websites, so please contact me if you have a custom website project in mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;