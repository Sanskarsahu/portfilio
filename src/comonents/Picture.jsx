import React from 'react'
import { motion } from 'framer-motion'
import pic from "../img/1787.png"
import { useMediaQuery } from '@mui/material'

export default function Picture() {
  const isDesktop = useMediaQuery('(min-width:768px)')
    const variants= isDesktop?{
        whileInView:{
            x:10
        },
        initial:{
            x:-350
        }
    }:{
        whileInView:{
            y:10
        },
        initial:{
            y:250
        }
    }
  return (
    <motion.div variants={variants} whileInView={variants.whileInView} initial={variants.initial} transition={{duration:1}}  className='h-[40vh] md:h-full md:w-[40vw]  '>
        <img src={pic} alt="" className='h-full ' />
    </motion.div>

  )
}
