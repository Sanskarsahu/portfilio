import React from 'react'
import Intro from './Intro'

export default function home() {
  return (
    <div id='/'>
      
      <div className='overflow-hidden absolute w-full h-screen bg-home bg-cover bg-center z-[-1] bg-transparent blur-sm flex justify-center items-center '>
      </div>
      <div className="h-screen overflow-hidden "> <Intro/> </div>
    </div>
  )
}
