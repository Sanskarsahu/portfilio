import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from "framer-motion"
import { useMediaQuery } from '@mui/material'
import { RiMenu2Line } from 'react-icons/ri'
import Sidebar from './Sidebar'
const nav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "about",
    link: "about",
  },
  {
    title: "skills",
    link: "skills",
  },
  {
    title: "projects",
    link: "projects",
  },
  {
    title: "contact",
    link: "contact",
  }
]
export default function Navbar() {
  const isDesktop = useMediaQuery('(min-width:768px)');
  const [isCliked, setClicked] = useState(false);
  function handleclick() {
    setClicked((prev) => !prev)
  }
  return (
    (isDesktop) ? (<motion.div className='mt-5 fixed md:flex items-center flex-row w-auto h-20 gap-96 bg-white px-5 rounded-full drop-shadow-xl z-10 hidden '
      initial={{ y: -250 }}
      animate={{ y: 10 }}
      transition={{ duration: 1 }}
    >
      <div className="text-xl font-bold ">portfilio</div>
      <div className="flex items-center flex-row gap-2">
        {nav.map((r) => (
          <Link to={r.link} spy={true}
            smooth={true}
            offset={-200}
            duration={500} className="cursor-pointer " >{r.title}</Link >

        ))}
      </div>
    </motion.div>)
      :
      (
        <>
        {isCliked ? <Sidebar setClicked={setClicked} nav={nav} /> :
          
           <div className="h-20 w-full  bg-white fixed z-[1] flex items-center px-10 drop-shadow-xl rounded-full  mt-5 ">
            <div className="text-xl font-bold ">portfilio</div>
            <button onClick={handleclick} className='bg-black'><RiMenu2Line className={`fixed top-4 right-10 text-5xl rounded-full p-3 hover:bg-gray-200 hover:drop-shadow-2xl `} /></button>

          </div>}
        </>
      )
  )
}
