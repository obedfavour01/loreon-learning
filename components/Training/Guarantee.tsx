import { GuaranteeData, firstGuaranteeData, secondGuaranteeData } from '@/lib/GuaranteeTraining'
import React from 'react'



const Guarantee = () => {
  return (
    <section className='my-28'>
      <div className='text-center'>
        <h1 className='text-5xl leading-[60px]'>
          You are guaranteed
        </h1>
        <p className='leading-8'>Why you should come join us</p>
      </div>


      <div className='flex 
      xs:max-md:flex-col 
      xs:max-md:items-center 
      xs:max-md:mx-7 
      gap-7 justify-center 
      mt-10'>
        {
          firstGuaranteeData.map((val, ind) => (
            <GuaranteeBox
              key={ind}
              subText={val.subText}
              mainText={val.mainText}
              imgPath={val.imgPath} />
          ))
        }
      </div>

      <div className='flex 
      xs:max-md:flex-col 
      xs:max-md:items-center 
      xs:max-md:mx-7 
      gap-7 mt-7 justify-center'>
        {
          secondGuaranteeData.map((val, ind) => (
            <GuaranteeBox
              key={ind}
              subText={val.subText}
              mainText={val.mainText}
              imgPath={val.imgPath} />
          ))
        }
      </div>
    </section>
  )
}


export default Guarantee


const GuaranteeBox = ({ mainText, subText, imgPath }: GuaranteeData) => (
  <div className='w-[307px] xs:max-md:w-full h-[222px] p-10 border-2 border-black
    rounded-md 
    space-y-3
    shadow-sm 
    bg-[#FDFDFD]'>

    <div className='w-10 h-10 rounded-full flex justify-center items-center bg-[#1362F333]'> . </div>

    <h1 className="text-xl">{mainText}</h1>
    <p>{subText}</p>
  </div>
)