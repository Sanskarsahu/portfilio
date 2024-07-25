import React from 'react'
import Social from './Social'

export default function Footer() {
  return (
    <div className='h-36 bg-slate-200 flex justify-center items-center flex-col space-y-8'>
        <Social/>
        <h1>
          @copyright 2024 made by Sanskar Sahu
        </h1>
        
    </div>
  )
}
