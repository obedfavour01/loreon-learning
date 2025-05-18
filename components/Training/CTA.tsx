import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='bg-loreonblue py-20 my-28'>


      <div className='mx-auto w-max text-center space-y-3'>

        <h1 className='text-[44px] xs:max-md:text-3xl text-white'>
          What are you waiting for ?</h1>

        <p className='text-white xs:max-md:text-sm'>Join us and gain in-demand skills</p>

      <Link 
        href={"/https://form.typeform.com/to/ef7oBKal"} 
        target='_blank'
        className='mt-4 '
        >
        <Button
          className='bg-white 
        text-[#020000]
        px-10 py-5 rounded-xl'>
          <p className='text-lg'>Enrol Now</p>
        </Button>
      </Link>
      </div>
    </section>
  )
}

export default CTA