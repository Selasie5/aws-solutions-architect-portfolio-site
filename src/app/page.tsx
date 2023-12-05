"use client"
import React from 'react'
import { IoArrowDownCircleOutline } from "react-icons/io5";
import {motion} from 'framer-motion'
import Link from 'next/link'



const HomePage= () => {
  return (
  <section className=' bg-black h-screen flex flex-row body'>
   <motion.div
   initial={{
    x: '-150vw',
    opacity: 0
   }}
        animate={{
          x: '0',
          opacity: 1
        }}
        transition={{
          type:'tween',
          duration: 2.0,
          delay: 0.2 // Add a value for the delay property, for example: 0.2 or any desired delay duration
        }}
        className="bg-main w-full h-screen flex flex-col justify-center items-center text-center px-6 space-y-3"
      >
          <motion.h1 initial={{
        x: '-100vw',
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      transition={{
        duration: 3.0,
        delay: 0.5
      }} className='text-black font-extrabold text-6xl name uppercase'>Selasie Kofi Sepenu</motion.h1>
      <motion.h2
      initial={{
        x: '150vw',
        opacity: 0
      }}
      animate={{
        x:0,
        opacity: 1
      }}
      transition={{
        duration: 3.0,
        delay: 1.0
      }} className='text-3xl font-semibold role text-black'>AWS Solutions Architect</motion.h2>
      <Link href="/about" className='group'>
      <button ><IoArrowDownCircleOutline className="text-6xl font-normal text-black" /> </button>
      </Link>
    </motion.div>
  </section>
  )
}

export default HomePage