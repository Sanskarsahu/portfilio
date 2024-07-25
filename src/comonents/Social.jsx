import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { motion } from 'framer-motion'
export default function Social() {
    const social =[
        {
            icon:FaLinkedin,
            link:"https://www.linkedin.com/in/sanskar-sahu-a8116a222/"
        },
        {
            icon:FaGithub,
            link:"https://github.com/Sanskarsahu"
        },
        {
            icon:FaInstagram,
            link:"https://www.instagram.com/"
        },
        
]
  return (
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration:0.5 , delay:3}} className='flex flex-row space-x-2 '>
        {
            social.map((s)=>(
                <div className='md:text-4xl text-3xl'>
                   <a href={s.link}><s.icon/></a>
                </div>
            ))
        }
    </motion.div>
  )
}
