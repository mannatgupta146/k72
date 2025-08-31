import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font2] pt-5 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                The spark for
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                all
                <div className='h-[8vw] w-[16vw] rounded-full -mt-2 overflow-hidden'>
                    <Video />
                </div>
                things
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                creative
            </div>
        </div>
    )
}

export default HomeHeroText
