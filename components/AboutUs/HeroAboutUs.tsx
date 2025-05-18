import Image from 'next/image'
import React from 'react'
import { TbCapsule } from 'react-icons/tb'


const HeroAboutUs = () => {
    return (
        <div className='bg-[#F7F7F7] flex xs:max-md:flex-col px-20 xs:max-md:px-7 py-24 xs:max-md:py-8 gap-y-11'>
            <div className='basis-1/2 lg:pr-12  space-y-3'>
                <h1 className="text-7xl xs:max-md:text-4xl">
                    We believe everyone should
                    have access to endless
                    opportunities.
                </h1>

                <div className='bg-[#F6FAFF] flex items-center h-20 lg:px-6 gap-3'>
                    <TbCapsule />
                    <div>
                        <h3 className='text-base'>Open Access to Expert Strategies</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit...   </p>
                    </div>
                </div>

                <div className='bg-[#F6FAFF] flex items-center h-20 lg:px-6 gap-3'>
                    <TbCapsule />
                    <div>
                        <h3 className='text-base'>Addressing technology vulnerabilities</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit...   </p>
                    </div>
                </div>
            </div>
            <div className='basis-1/2'>
                <Image
                    src={"/assets/images/about-hero.jfif"}
                    height={800}
                    width={800}
                    alt='service'
                    className='object-cover md:h-[531px] md:w-[617px] rounded-6xl xs:max-md:aspect-square'
                />

            </div>
        </div>
    )
}

export default HeroAboutUs