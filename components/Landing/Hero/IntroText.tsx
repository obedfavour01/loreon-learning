import Image from 'next/image'
import React, { useRef } from 'react'

const IntroText = () => {



   
  return (
    <div className='xs:max-md:mx-6  md:mx-12 lg:mx-16 xl:mx-28 2xl:mx-48'>
        <h1 className='text-6xl xs:max-lg:text-4xl font-bold text-center leading-[80px]'>
            <div className='flex justify-center  gap-5 '> 
                <div className=''>
                    <span className='text-loreonblue'>Empowering </span> 
                    the <span className='text-loreongreen'>FUTURE</span>,
                </div>


                <div className='rounded-full h-12 w-12 
                    bg-[#57b8f6] 
                    flex
                    xs:max-lg:hidden
                    justify-center 
                    items-center '>
                    <Image src={"/assets/images/meme.png"} 
                        alt='memoji' 
                        width={100} 
                        height={100}
                    />
                </div>
            </div>
           <div>

            Today. 
            <span className='text-loreonorange'>Delivering Innovations</span> 
           </div>
            
            <div className='flex justify-between xs:max-lg:justify-center'>
            <Image 
                src={"/assets/images/icon (2).png"} 
                alt='memoji' 
                width={200} 
                height={200} 
                className=' w-28 h-28 xs:max-lg:hidden self-end'/>

                at warp speed
                <Image 
                    src={"/assets/images/sucesshero.png"} 
                    alt='memoji' 
                    width={500} 
                    height={400} 
                    className=' w-56 h-28 shadow-md rounded-md xs:max-lg:hidden'/>

            </div>
            
        </h1>
    </div>
  )
}

export default IntroText