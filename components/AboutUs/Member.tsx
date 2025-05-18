import Image from 'next/image'
import React from 'react'

type Member = {
    name : string,
    role:string
}
const Member = ({name,role}:Member) => {
  return (
    <div className='flex gap-4 items-center'>
            <Image src={"/assets/images/model.PNG"}
                width={200}
                height={200}
                alt='model'
                className='w-20 h-20 xs:max-lg:w-14 xs:max-lg:h-14 rounded-full '/>

            <div className=''>
                <h2 className='text-[#121127] text-base xs:max-md:text-xs font-bold'>{name}</h2>
                <h3 className='text-loreonblue text-sm xs:max-md:text-xs font-medium'>{role}</h3>
            </div>
    </div>
  )
}

export default Member