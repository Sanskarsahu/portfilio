import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import {  motion } from "framer-motion"
import { Link } from 'react-scroll'

export default function Sidebar({setClicked , nav}) {
  function handleclick(){
    setClicked((prev) => !prev)
  }
  return (
    <>
      <motion.div className='fixed h-screen w-screen  bg-white z-20 flex  flex-row overflow-hidden' initial={{x:500}} animate={{x:-10}} transition={{duration:0.5 }}>
    <button onClick={handleclick} className='fixed top-5 right-5 text-3xl'><RxCross2 /></button>
     <div className="h-full w-full flex flex-col items-center justify-center text-2xl">
     { nav.map((r) => (
          <Link to={r.link} spy={true}
            smooth={true}
            offset={-150}
            duration={500} className="cursor-pointer "
            onClick={handleclick} >{r.title}</Link >

        ))}
     </div>
    </motion.div>
    </>
  )
}
