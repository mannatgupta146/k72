import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font2] pt-5 lg:mt-0 mt-36 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[11vw]'>
                The spark for
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[11vw]'>
                all
                <div className='lg:h-[8vw] lg:w-[16vw] h-[9vw] w-[18vw] rounded-full lg:-mt-2 overflow-hidden'>
                    <Video />
                </div>
                things
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[11vw]'>
                creative
            </div>
        </div>
    )
}

export default HomeHeroText
