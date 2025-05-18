import Image from 'next/image'
import React from 'react'
import { bigint } from 'zod'


const GraduateData = [
  {
    mainText: "100k",
    subText: "Learners since 2023",
    bg: "#1362F3"
  },
  {
    mainText: "85%",
    subText: "Employment Rate",
    bg: "#20A84E"

  },
  {
    mainText: "95%",
    subText: "Graduate Satisfaction",
    bg: "#F7931E"

  },
]
const Graduates = () => {
  return (
    <section className='flex  
    xs:max-lg:flex-col 
    justify-center 
    gap-6 
    items-center 
    xs:max-md:mx-7'>
      <div className='lg:pr-24  md:w-1/2 space-y-10 h-max'>
        <h1 className='text-5xl xs:max-md:text-3xl leading-[63px]'>
          We’ve Helped Thousands Of Graduates Start Rewarding Careers.
        </h1>

        <div className='flex gap-5  xs:max-md:justify-center'>
          {
            GraduateData.map(({mainText,subText,bg},ind) => (
              <StatBox key = {mainText} mainText = {mainText} subText= {subText} bg= {bg}/>
            ))
          }
        </div>
      </div>
      <div className='lg:w-[409px] mx-2'>
        <Image
          src={"/assets/images/training/graduate.jpeg"}
          width={800}
          height={200}
          alt='graduates'
          className='w-full h-48 object-cover rounded-3xl'/>

        <h1 className='text-3xl mt-4 '>
          “With no prior experience, I was still able to find success.”
        </h1>

        <p className='text-lg'>
          After completing the DevOps Engineering Programme,
          Yosef now works as a project control officer for
          New York based tech start up from Addis, Ethiopia.

        </p>
        <p className='text-lg'>
          Yosef Ayele
          Loreon Graduate ‘23Starting his own fintech company
        </p>

        <div>
          <p className=' font-semiboldtext-sm text-black'>
            Kristin Watson
          </p>
          <p className='font-light text-xs text-[#1211278F]'>
            Jun 27  · 6 min read
          </p>
        </div>
      </div>
    </section>
  )
}



const StatBox = ({ mainText, subText, bg }: 
  { mainText: string, subText: string, bg: string }) => (
  <div 
    className='p-7 rounded-3xl w-[140px] xs:max-md:w-28 text-white text-center' style={{ backgroundColor: bg }}>
    <h1 className='text-5xl xs:max-md:text-3xl'>{mainText}</h1>
    <p className='font-light text-xs'>{subText}</p>
  </div>
)

export default Graduates