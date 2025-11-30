import React from 'react'
import Navbar from '../Home/Navbar'
import Courses from '../Home/Courses'
import Footer from '../Home/Footer'

function Course() {
  return (
   <>
      <Navbar/>
      <div className='min-h-screen'>
        <Courses/>
      </div>
      <Footer/>
   </>
  )
}

export default Course
