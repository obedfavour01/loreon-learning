import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const DataPower = () => {
  return (
    <section className='flex 
      xs:max-md:flex-col
      xs:max-md:px-7
      gap-16 py-28  bg-[#FDFDFD] justify-center items-center'>

            <div className='space-y-6'>
                <h1 className="text-4xl">
                Harness The Power Of Data
                </h1>

                <ul className='text-xl font-light pl-4 list-disc space-y-4'>
                    <li>
                    Learn to apply data analysis methods to your work 
                    </li>
                    <li>
                    Be prepared for a diverse range of high-demand data <br /> career opportunities in various industries 
                    </li>
                    
                    <li>
                    Prepare, analyse, and visualise data like a pro
                    </li>
                </ul>
                <Button 
                className='text-white bg-datagreen rounded-3xl font-light text-lg
                text-center

                w-60
                h-16'>Download Syllabus</Button>
            </div>
            <div>
                <Image
                    src={"/assets/images/training/datapower.png"}
                    alt='data'
                    width={800}
                    height={800}
                    className='object-cover h-80 w-80'/>
            </div>

            
    </section>
  )
}

export default DataPower