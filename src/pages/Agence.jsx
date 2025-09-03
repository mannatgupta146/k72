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
      <div ref={imageDivRef} className='lg:h-[20vw] h-[50vw] lg:w-[15vw] w-[43vw] lg:rounded-4xl rounded-2xl overflow-hidden absolute lg:top-[50vh] top-[30vh] lg:left-[31vw] left-[29vw] '>
        <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
      </div>

      <div className='relative font-[font2] '>
      <div className='lg:mt-[69vh] mt-[58vh]'>
        <h1 className="lg:text-[18vw] text-[22vw] uppercase lg:leading-[17vw] text-center" > SEVEN7Y <br /> TWO</h1>
      </div>
      <div className='lg:pl-[40%] pl-[10%]  lg:mt-20 mt-22'>
        <p className='lg:text-5xl text-2xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. 
          A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, 
          but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
      </div>
    </div>

    </div>
  )
}

export default Agence
