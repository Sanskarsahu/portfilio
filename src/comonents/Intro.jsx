import React from 'react'
import TypewriterComponent from 'typewriter-effect'
import {  motion } from "framer-motion"
import Social from './Social'
export default function Intro() {
  return (
    <div className='h-full  flex flex-col items-center justify-center gap-7 overflow-hidden'>
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5 , delay:0.5}} className="md:text-6xl text-4xl font-extrabold "><h1>Hello!</h1></motion.div>
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5 , delay:1}}  className="md:text-6xl text-4xl font-bold "><h1>I am Sanskar Sahu</h1></motion.div>
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5 , delay:1.5}}  className="md:text-4xl text-3xl flex gap-1 font-semibold ">
    A 
    <TypewriterComponent
        options={{
          strings: [
            "Web Developer...",
            "Frontend Develover...",
            "React Developer...",
            "Full Stack Developer...",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      
    </motion.div>

    <Social/>
    </div>
  )
}
