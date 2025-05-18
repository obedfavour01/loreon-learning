import Image from 'next/image'
import React from 'react'

const HeroImgBox = () => {
  return (
    <div className='basis-1/2 pt-20 xs:max-lg:hidden'>
        <Image
            src = "/assets/images/heroImgsvg.svg"
            alt = "images"
            width={1800}
            height={1800}
            className='object-contain'
        />
    </div>
  )
}

export default HeroImgBox