import { cn } from '@/lib/utils'
import React from 'react'

const Fees = ({ type }: { type: 'data' | 'devops' }) => {
  return (
    <div className='px-20 xs:max-md:px-7 my-36'>
      <h1 className="text-[37.5px] mb-6">Fees & Financing</h1>

      <div className='flex xs:max-md:flex-col gap-20 '>
        <div className={` lg:w-[calc(50%-40px)] flex flex-col justify-between text-xl`}>
          <p>
            Programme costs typically range from $1,500 –
            $2,500 USD, but loreon offers all eligible
            Loreon learners the opportunity to participate
            with programme costs waived.
          </p>
          <br /><br />
          <p>
            Loreon learners must pay a one-time
            commitment fee, payable on completion
            of the 8-week compulsory Foundations
            module and before you start your chosen Tech
            Specialisation. Pay in full at a 20% discount,
            or in monthly instalments to complete your programme.
          </p>
        </div>
        <div className='w-[calc(50%-40px)]'>
          <div className={cn(' flex  pb-14')}>
            <div className='flex flex-col w-max pr-11 '>
              <h3 className={`
                        ${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold`}>
                Programme Value
              </h3>
              <h4 className='text-[#676767] font-light text-base'>$1,500</h4>
            </div>

            <div className=' flex flex-col w-max px-11 border-x border-[#676767]'>
              <h3 className={`
                        ${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold`}>Admin Fee</h3>
              <h4 className='text-[#676767] font-light text-base'>15-18 hrs/wk online</h4>
            </div>

            <div className=' flex flex-col w-max px-11 '>
              <h3 className={`
                        ${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold`}>Pay Upfront (20%)</h3>
              <h4 className='text-[#676767] font-light text-base'>	$120</h4>
            </div>
          </div>

          <div className='flex'>
            <div className=' flex flex-col w-max pr-11'>
              <h3 className={`
                        ${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold`}>Pay as you Learn <br />
                (3x monthly instalment)</h3>
              <h4 className='text-[#676767] font-light text-base'>$500/month (3)</h4>
            </div>

            <div className=' flex flex-col w-max pl-11 border-l border-[#676767]'>
              <h3 className={`
                        ${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold`}>50/50 instalments</h3>
              <h4 className='text-[#676767] font-light text-base'>$75 (2)</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fees