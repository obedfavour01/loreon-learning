import React from 'react'
import Image from 'next/image'

  type purpose = {
    PurposeDetails:string,
    PurposeTitle:string,
    className: string
  }

const PurposeItem = ({PurposeTitle,PurposeDetails,className}:purpose) => {
  return (
    <div className={`flex  gap-4 xs:max-lg:gap-2 ${className}` }>
        <div className='w-20 h-[80px] xs:max-lg:basis-2/12 basis-1/12'>  
            <Image src = {"/assets/icons/purpose.svg"}
                alt = "pillar"
                width = {400}
                height = {400}
                className = "w-20 h-[80px]"
            />
        </div>
        <div className=' xs:max-lg:basis-10/12 basis-11/12'>
            <h2 className='text-2xl text-white xs:max-lg:text-base '>{PurposeTitle}</h2>
            <p className='text-white font-light text-lg xs:max-lg:text-xs mt-2.5'>{PurposeDetails}</p>
        </div>
    </div>
  )}

export default PurposeItem