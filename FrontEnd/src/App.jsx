import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Course from './Components/Course/Course'
import Signup from './Components/Home/Signup'
import 'flowbite';
import Contact from './Components/Home/Contact'
import About from './Components/Home/About'

function App() {
return (
  <>
<div className="min-h-screen bg-white text-black dark:bg-slate-800 dark:text-white transition-all duration-500">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/course' element={<Course />} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
</div>

  </>
  )
}

export default App
