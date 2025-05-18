import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Solutions = () => {
  return (
    <div className='flex xs:max-md:flex-col justify-center items-center gap-20 mb-24 xs:max-md:mx-7'>
      <div className='basis-4/12 space-y-6'>
        <h1 className='font-normal text-4xl'>Master AWS For Powerful Cloud Solutions</h1>

        <ul className={` font-extralight space-y-6 text-xl list-disc`}>

          <li> Efficiently manage business cloud applications & deployments
          </li>
          <li>Showcase your expertise in AWS as a proficient cloud architect</li>
          <li>Attain valuable certifications that qualify you for high-paying roles</li>

        </ul>

        <Button className='px-9 rounded-lg text-white bg-loreonblue'>Download Syllabus</Button>

      </div>
      <div className='w-max basis-6/12'>
        <Image
          src={"/assets/images/apps.png"}
          width={1000}
          height={500}
          alt='solutions'
          className=' h-[500px] object-contain xs:max-md:scale-75' />
      </div>
    </div>
  )
}

export default Solutions