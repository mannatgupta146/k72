import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font2] pt-5 text-center'>
            <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>
                The spark for
            </div>
            <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-start'>
                all
                <div className='h-[8vw] w-[16vw] rounded-full -mt-2 overflow-hidden ml-2'>
                    <Video />
                </div>
                things
            </div>
            <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex items-center'>
                creative
            </div>
        </div>
    )
}

export default HomeHeroText
