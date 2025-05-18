import React from 'react'
import { Button } from '../ui/button'
import Brand from './Brand'

const Customers = () => {
  return (
    <section className='flex 
    items-center 
    xs:max-lg:flex-col 
    gap-12 mx-36 
    xs:max-md:mx-7 
    my-28 xs:max-md:my-8'>

      <div className='basis-1/2 py-10'>
        <h1 className='font-normal text-5xl xs:max-md:text-3xl'>
          Together, we are cultivating a new generation of active 
          digital leaders for the 21st century, empowered to forge 
          impactful careers in high-growth industries.</h1>

        <p className='mb-4 text-aboutgray text-base font-normal mt-6 leading-[30px]'>Some brands we’ve worked with — from some of the world’s largest companies to the most innovative startups — use Loreon to reach their business goals.</p>

        <Button className='w-full bg-bg_blue rounded-2xl text-white text-center'>Get Started</Button>
      </div>

      <div className='grid grid-cols-2 h-max gap-8 md:basis-1/2 '>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
        <Brand/>
      </div>
    </section>
  )
}

export default Customers