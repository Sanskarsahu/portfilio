import React from 'react'
import image from '../img/image.png'
import image1 from '../img/image1.png'
import {  motion } from 'framer-motion'
export default function Projects() {
  const project=[{
    titel:'HelpMate',
    img:image,
    delay:0,
    link:"https://helpmate.vercel.app/",
  },
  {
    titel:'Chat Application',
    img:image1,
    delay:0.5,
    link:"https://chat-app-odse.onrender.com"
  },
  
]
  return (
    <div className="text-center mt-36" id='projects'>
        <motion.h1 whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration:1}} className='text-5xl font-extrabold'>My Projects</motion.h1>
        <div className="flex items-center justify-center mt-16 gap-7 flex-wrap"> 
        
        {
          project.map((p)=>(
            <motion.div  whileInView={{rotateY: 0, opacity: 1}} initial={{rotateY: 180, opacity: 0}} transition={{duration:0.5 , delay:p.delay}} className="h-96 w-96 bg-slate-100 rounded-lg shadow-xl flex items-center justify-center flex-col">
            <div className="w-72 mb-10"><img src={p.img} alt=""  /></div>
            <a href={p.link} className="text-2xl ">{p.titel}</a>
            <div className=""></div>
            </motion.div>
          ))
        }
         
        </div>
    </div>
  )
}
