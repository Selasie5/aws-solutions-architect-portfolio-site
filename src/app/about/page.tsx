"use client"
import React from 'react'
import Link from 'next/link'
import {motion} from "framer-motion"
import { FaPlayCircle } from "react-icons/fa"; 
import Image from 'next/image'

const About = () => {
  return (
    < motion.section
    initial={{
      y: '150vh',
      opacity: 0,
    }}
    animate={{
      y: 0,
      opacity: 1,
    }}
    transition={{
      duration: 3,
      delay: 0.5,
    }}
     className='px-10 py-10'>
        <div className='space-y-2'>
        <h1 className='text-white font-light text-xl uppercase'>About Me</h1>
    <p className='text-white font-semibold text-5xl leading-normal'>I develop and build robust cloud solutions with the <span className='text-main'>AWS Well-Architected Framework</span> as my foundation for architecting the best infrastructures</p>
    <p className='text-white font-light text-xl leading-normal pb-4'>Selaise Sepenu, a certified AWS Solutions Architect , is passionate about creating strategic algorithms to optimize enterprise operations. Selasie excels in cloud engineering discussions and mentorship, aiming to guide young individuals in the tech realm. Selaise envisions a future where tech startups thrive, nurturing budding talents and leveraging AI/ML. Notably, his contributions include enhancing major enterprises through engaging user interfaces and building developer communities for shared skill growth.</p>
    <Link href="">
    <button className='flex flex-row justify-between items-center border-2 border-main text-main hover:bg-main hover:text-black hover:font-bold text-lg uppercase w-72 px-5 h-16 rounded-tl-sm rounded-br-sm rounded-tr-3xl rounded-bl-3xl '>
        Watch My Pitch Video
        <FaPlayCircle />
    </button>
    
    </Link>
        </div>
    
   
    <div className='py-5 flex flex-row justify-center space-x-5'>
    </div>
    </motion.section>

  )
}

export default About