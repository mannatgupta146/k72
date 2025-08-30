import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: "top 27%",
        end: 'top -100%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        pinType: 'transform',
        invalidateOnRefresh: true,
      
        onUpdate: function(elem){
          let imageIndex;

          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length);
          }
          else{
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        }
      }
    })
  })

  return (
    
    <div>
       <div className='section1'>
      <div ref={imageDivRef} className='h-[20vw] w-[15vw] rounded-4xl overflow-hidden absolute top-[50vh] left-[31vw]'>
        <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>

      <div className='relative font-[font2] '>
      <div className='mt-[69vh]'>
        <h1 className="text-[18vw] uppercase leading-[17vw] text-center" > SEVEN7Y <br /> TWO</h1>
      </div>
      <div className='pl-[40%] mt-20'>
        <p className='text-5xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. 
          A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, 
          but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
      </div>
    </div>

    <div className="section2 h-screen">

    </div>
    </div>
  )
}

export default Agence
