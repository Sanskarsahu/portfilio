import React from 'react'
import { motion } from 'framer-motion'
import { SiGmail } from 'react-icons/si'
import { FaPhone } from 'react-icons/fa6'

export default function Contact() {
  const contact= [{
    icon:SiGmail,
    contact:"sanskarsahu54@gmail.com",
  },{
    icon:FaPhone,
    contact:"+91 956955945"
  }]
  return (
    <div className='text-center mt-20  h-auto' id='contact'>
      <motion.h1 whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration:1.5}} className='text-5xl font-extrabold'>Contact Me</motion.h1>
      <div className="flex justify-center items-center my-20 md:space-x-44 md:flex-row flex-col gap-5">
        {contact.map((e)=>(
          <div className="h-48 w-72 bg-slate-100 rounded-lg shadow-xl flex justify-center items-center flex-col gap-6">
            <e.icon className='size-16 '/>
            <h1 className='text-xl'>{e.contact}</h1>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  )
}
