import {  MovingButton } from '@/components/ui/moving-border'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const HeroTextbox = () => {
    return (

        <div className="h-full 
                    py-20 w-full 
                    lg:basis-1/2 dark:bg-dot-white/[0.2] 
                    bg-dot-gray-700/70 
                    relative 
                    flex 
                    items-center 
                    px-[85px]
                    xs:max-md:px-7
                    xs:max-sm:px-3">
        <div>
            <MovingButton
                borderRadius="1.75rem"
                borderClassName=''
                containerClassName='w-auto p-[1px]'
                duration={2000}
                className={`
                     dark:bg-slate-900 
                     text-[#838383]
                     flex space-x-2
                        h-max
                        py-1
                        my-0
                     px-3
                        bg-[#191919]
                      `}
            >
                <span className='rounded-6xl  bg-[#4E4E4E] text-[#C7C7C7] py-1.5 px-2'>🎉 New</span>
                <span className='xs:max-md:text-xs'>An important announcement goes here.</span>
                <span><ArrowRight /></span>
            </MovingButton>



            <div className='text-9xl xs:max-md:text-8xl font-cool mt-4'>
                <h1 className='text-loreonblue leading-[88px] xs:max-md:leading-[70px]'>innovate </h1>
                <h1 className='text-[#F15A24] xs:max-md:leading-[70px]
                leading-[88px]'>invest</h1>
                <h1 className='text-datagreen leading-[88px] xs:max-md:leading-[70px]'>prosper</h1>
            </div>

            <div className='my-14'>
                    <p className='text-white xs:max-md:text-base text-xl font-thin'>
                        Empowering the FUTURE, Today.  <br/>
                        Delivering Innovations at warp speed
                    </p>
            </div>

            <div className='space-x-9 xs:max-md:space-x-7'>
                <Button className='text-white bg-loreonblue rounded-3xl xs:max-md:rounded-xl
                h-16 xs:max-md:h-12 
                w-44 xs:max-md:w-36 
                text-lg'>Apply Now</Button>
                <Button className='text-white bg-transparent rounded-3xl
                xs:max-md:rounded-xl 
                h-16 
                xs:max-md:h-12 
                w-44 
                xs:max-md:w-36 
                text-lg border-[1.4px] border-white'>Learn More</Button>
            </div>
        </div>
        </div>
    )
}

export default HeroTextbox