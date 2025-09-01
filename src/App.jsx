import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Agence from './pages/Agence.jsx'
import Navbar from './components/Navigation/Navbar.jsx'
import FullScreenNav from './components/Navigation/FullScreenNav.jsx'



const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/agence' element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App
