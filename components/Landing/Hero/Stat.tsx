import React from 'react'
import { Button } from '../../ui/button'

const Stat = () => {
  return (
    <div className='lg:mx-20 my-4
    xs:max-lg:mx-7
    xs:max-lg:justify-center
    xs:max-lg:gap-3
     flex xs:max-lg:flex-wrap justify-between items-center'>

      <div className='flex  basis-1/2  divide-x divide-black'>
        <div className='flex flex-col gap-2 items-center justify-center pr-14 xs:max-md:pr-8'>
          <h1 className='font-normal text-6xl xs:max-md:text-4xl'>
            620+</h1>
          <p className='text-sm xs:max-md:text-[8px]'>Projects Completed</p>
        </div>
        <div className='flex flex-col gap-2 items-center px-14 xs:max-md:px-8  justify-center'>
          <h1 className='font-normal text-6xl xs:max-md:text-4xl'>
            32.2k</h1>
          <p className='text-sm xs:max-md:text-[8px] '>Trained in 2023</p>
        </div>


        <div className='flex flex-col gap-2 items-center justify-center pl-14 xs:max-md:pl-8'>
          <h1 className='font-normal text-6xl xs:max-md:text-4xl'>100k</h1>
          <p className='text-sm xs:max-md:text-[8px]'>Teams Delive</p>
        </div>
      </div>



     

      <div className='lg:basis-1/2  xs:max-lg:w-full  xs:max-md:px-0 px-20'>
        <p className='text-2xl  
        xs:max-md:text-base 
        md:max-xl:text-xl '>
          Our services are designed to help you know more, and do more, so you can be more.
        </p>
      </div>
    </div>
  )
}

export default Stat