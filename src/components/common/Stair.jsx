import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const Stair = () => {

    
  const stairParentRef = useRef(null);

  useGSAP(function(){
    const tl = gsap.timeline();

    tl.from(stairParentRef.current,{
      display: 'block'
    })

    tl.from('.stair',{
      height: 0,
      stagger: {
        amount: -0.3,
      }
    })
    
    tl.to('.stair',{
      y: '100%',
      stagger: {
        amount: -0.3,
      }
    })

    tl.to(stairParentRef.current,{
      display: 'none'
    })

    tl.to('.stair',{
      y: '0',
    })
  })

  return (
    <div ref={stairParentRef} className='h-screen w-full fixed top-0 z-20'>
      <div className='h-full w-ull flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
    </div>
  )
}

export default Stair
