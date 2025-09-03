import React, { useState } from 'react';

const ProjectCard = (props) => {
    const [showOverlay1, setShowOverlay1] = useState(false);
    const [showOverlay2, setShowOverlay2] = useState(false);

    return (
        <>
            <div
                className='lg:w-1/2 relative rounded-none hover:rounded-[70px] overflow-hidden h-full'
                onClick={() => setShowOverlay1(!showOverlay1)}
                onMouseEnter={() => setShowOverlay1(true)}
                onMouseLeave={() => setShowOverlay1(false)}
            >
                <img
                    className='h-full w-full object-cover'
                    src={props.image1}
                    alt="Project 1"
                />
                <div
                    className={`absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/15 transition-opacity duration-300 ${
                        showOverlay1 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h2 className='uppercase lg:text-6xl text-2xl font-[font1] lg:border-4 border-2 lg:pt-4 pt-2 lg:px-8 px-3 text-white border-white rounded-full'>
                        View Project
                    </h2>
                </div>
            </div>

            <div
                className='lg:w-1/2 relative rounded-none hover:rounded-[70px] overflow-hidden h-full'
                onClick={() => setShowOverlay2(!showOverlay2)}
                onMouseEnter={() => setShowOverlay2(true)}
                onMouseLeave={() => setShowOverlay2(false)}
            >
                <img
                    className='h-full w-full object-cover'
                    src={props.image2}
                    alt="Project 2"
                />
                <div
                    className={`absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/15 transition-opacity duration-300 ${
                        showOverlay2 ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <h2 className='uppercase lg:text-6xl text-2xl font-[font1] lg:border-4 border-2 lg:pt-4 pt-2 lg:px-8 px-3 text-white border-white rounded-full'>
                        View Project
                    </h2>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
