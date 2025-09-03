import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex items-center justify-center lg:gap-7 gap-3'>

      <p className='absolute lg:w-[17vw] w-56 lg:right-20 right-2 bottom-28  lg:bottom-28 font-[font1] lg:text-lg text-xs lg:leading-relaxed leading-relaxed'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
       K72 is an agency that builds brands from every angle. 
       Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, 
       brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      
      <div className='lg:border-4 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-30 flex items-center px-5 pt-1 lg:px-10 border-white rounded-full uppercase'>
        <Link className='lg:text-[6vw] text-[7vw] lg:mt-3' to='/projects'>Work</Link>
      </div>
      
      <div className='lg:border-4 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-30 flex items-center px-5 pt-1 lg:px-10 border-white rounded-full uppercase'>
        <Link className='lg:text-[6vw] text-[7vw] lg:mt-3' to='/agence'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText