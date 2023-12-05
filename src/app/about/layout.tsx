import React from 'react'
import Navbar from '../Navbar'


export default function AboutLayout({
    children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
 <section className='bg-black'>
 <Navbar/>
      {children}
 </section>
  )
}