import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className='bg-loreonblue py-20 mt-28'>


      <div className='mx-auto w-max text-center space-y-3'>

        <h1 className='text-[44px] xs:max-md:text-3xl text-white'>
          What are you waiting for ?</h1>

        <p className='text-white xs:max-md:text-sm'>Join us and gain in-demand skills</p>

      <div className="xs:max-md:overflow-hidden xs:max-md:space-x-4 bg-[#a9a8a7] w-max mx-auto rounded-[200px] px-[5px] py-3">


            <Link
              href="https://bit.ly/LOREON"
              target='_blank'
              className={`py-2.5 px-6 text-lg xs:max-md:text-lg font-cool bg-white
                hover:bg-[#F15A24] rounded-[100px] text-black
                `}
                >
              Enrol Now
            </Link>
              </div>
      </div>
    </section>
  )
}

export default CTA