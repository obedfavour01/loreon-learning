import Image from 'next/image'
import React from 'react'

const ImagesData = [
    "core.png","contour.png","cri.png","crossplane.png",
    "cube.png","dapr.png","dragon.png","flash.png","rook.png","spiffe.png","cortex.png","telemetry.png","spire.png",
    "core.png","strimzi.png","prom.png","open.png","Thanos.png","core.png"
]
const Startups = () => {
    return (
        <section className='mx-16 xs:max-md:mx-6 mt-32 mb-48 '>
            <div className='flex xs:max-lg:flex-col justify-between gap-36'>
                <div className='basis-1/2'>
                    <header className='text-4xl font-bold font-cool'>
                        We support early stage
                        startups and leading tech
                        giants. 
                    </header>

                    <article className='mt-4 leading-[28px] pr-6 text-base font-roboto font-light'>
                        Join us on a journey beyond boundaries, where innovation isn&apos;t
                        just a destination
                        – it&apos;s the very fabric of our existence. At LOREON Technology, we&apos;re
                        redefining the future by delivering cutting-edge solutions faster than you can imagine.
                    </article>
                </div>
                <div className='basis-1/2'>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className='bg-[#F0F6FF] py-4 px-7 rounded-lg'>
                            <span className='text-6xl font-bold py-4'>10</span>
                            <p className='text-xl font-normal'>Completed Projects</p>
                        </div>
                        <div className='bg-[#E9FFEC] py-4 px-7 rounded-lg'>
                            <span className='text-6xl font-bold py-4'>12</span>
                            <p className='text-xl font-normal'>Proposed Projects</p>
                        </div>
                        <div className='bg-[#FFF8F0] col-span-2 py-4 px-7 flex items-center rounded-lg gap-4'>
                            <span className='text-6xl font-bold '>13</span>
                            <p className='text-xl font-normal'>In-the-Works Projects</p>
                        </div>
                    </div>

                </div>
            </div>



            <div className='my-24 mx-28 xs:max-md:mx-0 xs:max-lg:px-2 '>
                <div className='flex  flex-wrap xs:max-lg:flex-wrap gap-12 my-12 justify-center'>
                    {
                        ImagesData.map((img,ind) => (

                    
                            <Image 
                            key={ind}
                            src={`/assets/images/${img}`} 
                            alt="logo" 
                            width={900} height={900} 
                            loading='lazy'
                            className='object-contain w-16 h-16' />
                        ))
                    }
                   
                </div>
            </div>
        </section>
    )
}

export default Startups