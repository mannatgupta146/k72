import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Agence from './pages/Agence.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const App = () => {

  useGSAP(function(){
    const tl = gsap.timeline();
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
  })


  return (
    <div className='overflow-x-hidden'>

      <div className='h-screen w-screen fixed top-0 flex z-20'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>

      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
