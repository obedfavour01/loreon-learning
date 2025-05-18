import Image from 'next/image'
import React from 'react'
import { MetricCard } from '../Metrics/Metrics'

const Partners = () => {
  return (
    <div className='mx-7 md:mx-32 '>

            <div className='text-center '>
                <h1 className="text-[84px] xs:max-md:text-3xl flex justify-center items-center text-[#3276F2] gap-6">
                    <span>
                        <Image
                            src={"/assets/images/training/growth_metrics.png"}
                            width={800}
                            height={800}
                            alt='plant'
                            className='w-20 h-20 rounded-full' />
                    </span>
                    Our reliable partners
                </h1>

            </div>


            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mt-12'>
                <h2 className = "leading-[48px] text-lg  font-bold md:font-normal md:text-4xl font-roboto  text-[#5F6368]">
                We work with Linux to offer free DevOps software and are expanding partnerships to provide more open-source tools, empowering students to master tech skills. Without the right tools, theory and learning is just what it is, theory.
                </h2>

            </div>

        
    </div>
  )
}

export default Partners