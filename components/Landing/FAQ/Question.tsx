import { CircleHelp } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Question = ({textColor}:{textColor?:string}) => {
  return (
    <div className='flex gap-4 basis-1/3 items-start'>
            <Image src={"/assets/icons/question.svg"} 
            alt='icon' 
            width={28} 
            height={28}/>
        <div>
            <h2 className='font-bold text-base'>
                How long do payouts take?
            </h2>

            <p className='text-sm w-[80%] font-normal mt-4 text-[#1211278F]' style={{color : textColor || `#1211278F`}}>
                Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly.
            </p>
        </div>
    </div>
  )
}

export default Question