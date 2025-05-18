import Image from 'next/image'
import React from 'react'

const Cert = ({title}:{title:string}) => {
  return (
    <div className='flex
                gap-4 py-7 
                shadow-sm
                px-20 
                bg-[#f6f5f6]
                items-center'>
            <Image src={"/assets/icons/aws.png"}
                height={1000}
                width={1000}
                alt='aws'
                className='h-6 w-10'
            />

            <h3 className='text-lg font-normal'>{title}</h3>
    </div>
  )
}

export default Cert