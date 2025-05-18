import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='flex justify-center  
    w-[272px]  h-[104px]
    xs:max-md:w-44 
    xs:max-md:h-20
    p-4 items-center bg-bg_about_gray'>
            <Image
            
            src={"/assets/images/vercel.svg"}
            width={300}
            height={100}
            alt='logo'
            className='w-28 h-9'/>
    </div>
  )
}

export default Brand