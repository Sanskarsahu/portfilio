import React from 'react'
import Picture from './Picture'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
export default function About() {
    const isDesktop = useMediaQuery('(min-width:768px)')
    const variants= isDesktop?{
        whileInView:{
            x:10
        },
        initial:{
            x:350
        }
    }:{
        whileInView:{
            y:10
        },
        initial:{
            y:-350
        }
    }
    return (
        <>
            <div className="w-[100vw] md:h-[75vh] h-auto  flex justify-center items-center flex-col-reverse gap-0 md:flex-row py-10 md:gap-6 md:mt-12" id='about'>
                <Picture />
                <motion.div variants={variants} whileInView={variants.whileInView} initial={variants.initial} transition={{duration:1}} className="md:w-[50vw] h-[75vh] px-10 flex justify-center items-center flex-col py-10 gap-6">
                <h2 className='md:text-5xl text-4xl font-extrabold'>About Me</h2>
                <div className="text-justify  md:object-center">
                <p>Hello! I'm Sanskar Sahu, a passionate and driven web developer with a Bachelor's degree in Computer Science and Engineering from SR Group of Institutions, Jhansi (2020-2024). My journey in the tech world has been fueled by curiosity and a love for creating innovative web solutions.</p>
                <p>  During my academic years, I developed a strong foundation in web technologies, including HTML, CSS, JavaScript, and modern frameworks like React.js, Express, MongoDB, Node.js, and Next.js. My hands-on experience was further enhanced through an internship at iNeuBytes, where I honed my skills in real-world projects and collaborated with a dynamic team.</p>
                </div>
                </motion.div>
            </div>
            
        </>
    )
}
