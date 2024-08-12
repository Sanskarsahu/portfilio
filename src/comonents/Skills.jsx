import React from 'react'
import {  motion } from 'framer-motion';
import { DiMongodb } from 'react-icons/di';
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiNextdotjs } from 'react-icons/si';
const skills=[{
    titel:"html",
    icon:FaHtml5,
    delay:0.1,
    color:"#fbbf24"
},
{
    titel:"css",
    icon:FaCss3Alt,
    delay:0.2,
    color:"#2563eb"
},
{
    titel:"Javascript",
    icon:IoLogoJavascript,
    delay:0.3,
    color:"#fcd34d"
    
},
{
    titel:"React.js",
    icon:FaReact,
    delay:0.4,
    color:"#2563eb"
},
{
    titel:"Node.js",
    icon:FaNodeJs,
    delay:0.5,
    color:"#65a30d"
},
{
    titel:"Express.js",
    icon:SiExpress,
    delay:0.6,
    color:"black"
},
{
    titel:"MongoDb",
    icon:DiMongodb,
    delay:0.7,
    color:"#65a30d"
},
{
    titel:"Next.js",
    icon:SiNextdotjs,
    delay:0.8,
    color:"black"
}
]
export default function Skills() {
  return (
    <div className='text-center mt-10  h-auto' id='skills'>
        <motion.h1 whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration:1.5}} className='text-5xl font-extrabold'>My Skills</motion.h1>
        <div className="flex flex-wrap items-center justify-center gap-20 mt-20">
        {skills.map((s)=>(
             <motion.div whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5 ,delay:s.delay}} className="h-36 w-36 bg-slate-100 rounded-[100px] shadow-2xl flex items-center justify-center flex-col  ">
               <s.icon className='h-20 w-20 hover:scale-[2] hover:relative  transition duration-700  drop-shadow-xl bg-clip-text' style={{color:s.color}}/>
               {s.titel}
             </motion.div> 

            ))}
          
        </div>
    </div>
  )
}
