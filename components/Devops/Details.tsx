import { RobotoFonts } from '@/lib/fonts'
import { StringifyOptions } from 'querystring'
import React from 'react'

const Details = ({ type }: { type: 'data' | 'devops' }) => {
    return (
        <div className={`bg-[#FCFCFC] flex px-[86px] pt-8 pb-14 xs:max-md:hidden`}>
            <div className='flex flex-col w-max pr-11 '>
                <h3
                    className={`
                        ${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold`}>
                    Duration
                </h3>
                <h4
                    className='text-[#676767] font-light text-base'>
                    12 Weeks
                </h4>
            </div>

            <div className=' flex flex-col w-max px-11'>
                <h3
                    className={`${type === 'devops' ? `text-loreonblue` : `text-datagreen`}
                    font-bold`}
                >
                    Commitement
                </h3>
                <h4
                    className='text-[#676767] font-light text-base'>15-18 hrs/wk online</h4>
            </div>

            <div className=' flex flex-col w-max px-11 '>
                <h3 className={`${type === 'devops' ? `text-loreonblue` : `text-datagreen`} font-bold'`}>Start Date</h3>
                <h4 className='text-[#676767] font-light text-base'>2 Sept. 2024</h4>
            </div>

            <div className=' flex flex-col w-max pl-11'>
                <h3
                    className={`${type === 'devops' ? `text-loreonblue` : `text-datagreen`} 
            font-bold`}>
                    Commitment Fee
                </h3>
                <h4
                    className='text-[#676767] font-light text-base'>
                    $400
                </h4>
            </div>
        </div>
    )
}

export default Details