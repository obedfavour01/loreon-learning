
import Image from 'next/image'
import React from 'react'
import Navbar from '../Navbar'


const HeroDevOps = () => {
  return (
    <div className=' relative border-t-[0.1px] border-blue-300/70 max-h-[700px] devops-gradient pt-9 '>

      <Navbar variant='dark' />
      <Image
        src="/assets/images/training/devherolor.png"
        width={626}
        height={626}
        alt="loreon"
        className='h-[626px]'
      />

      <div className='flex 
      px-24 xs:max-md:px-7 
      xs:max-md:flex-col 
      w-full justify-between 
      pt-24 xs:max-md:pt-7 
      items-start 
      gap-y-3
      absolute top-24'>

        <div className='max-w-2xl  space-y-6 xs:max-md:space-y-1'>
          <p className='text-white font-light'>DevOps Engineering</p>
          <h1 className='text-[86px] xs:max-md:text-6xl text-white leading-[72px]'>
            Build, Secure, and Scale Powerful
            Cloud Solutions with AWS.
          </h1>
          <p className='text-white text-sm'>🚀 6 Months</p>
        </div>

        <div className='max-w-xl    bg-white rounded-t-[18px]  overflow-hidden'>
          <div className=''>
            <Image
              alt='study'
              width={500}
              height={500}
              src={"/assets/images/training/devhero.jpg"}
              className=' h-[281px] w-full object-cover object-center' />
          </div>
          <div className={`  m-10`}>
            <h1 className="font-semibold mb-4">
              This programmes includes:
            </h1>

            <ul className=' list-disc space-y-4'>
              <li>8-week Loreon Foundations leadership and soft skills training
              </li>


              <li>Mastery of the Cloud and Amazon Web Services</li>
              <li>
                How to navigate the creation and deployment of applications in AWS
              </li>
              <li>
                Real-world preparation for a diverse, global career in    a cloud-based role
              </li>


            </ul>
            <div className='my-5'>
              <button
                className={'rounded-xl text-xs text-white bg-loreonblue font-light w-full py-3'}>
                Apply Now
              </button>
            </div>

            <small className='text-xs'>
              Application Deadline is 30th Sepetember</small>
          </div>
        </div>


      </div>
    </div>


  )
}

export default HeroDevOps