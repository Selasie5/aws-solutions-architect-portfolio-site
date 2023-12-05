"use client"
import React from 'react'
import Link from "next/link"
import {motion } from 'framer-motion'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const Navlinks=[
        {
            id:1,
            link: 'About',
            path: '/about'
                },
        {
            id:2,
            link: 'My Portfolio',
            path: '/portfolio'
                },
        {
            id:3,
            link: 'Contact',
            path: '/contact'
                },
    ]
  return (
   <section className='flex flex-row justify-between w-full px-10'>
    <div>
        <Link href="/">
       <h1 className='text-white'>Selasie</h1>
        </Link>
      
    </div>

    <div>
    <GiHamburgerMenu className="text-white"/>
    </div>
    <nav>
    {Navlinks.map((navlink, id)=>
    (
      <div key={navlink.id}>
        <p  className='text-white'>{navlink.link}</p>
      </div>
    ))}
    </nav>
   </section>
  )
}

export default Navbar