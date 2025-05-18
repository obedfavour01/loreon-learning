import { RobotoFonts } from '@/lib/fonts'
import React from 'react'
type skillProp = {
  title: string,
  desc: string
}


const skillsData: skillProp[] = [
  {
    title: "Loreon Foundations",
    desc: `Learn key leadership and professional
               skills that will help you navigate 
               and succeed in the workplace.`
  },

  {
    title: "Loreon Foundations",
    desc: `Learn key leadership and professional
               skills that will help you navigate 
               and succeed in the workplace.`
  },

  {
    title: "Loreon Foundations",
    desc: `Learn key leadership and professional
               skills that will help you navigate 
               and succeed in the workplace.`
  },

  {
    title: "Loreon Foundations",
    desc: `Learn key leadership and professional
               skills that will help you navigate 
               and succeed in the workplace.`
  },



]

const Skills = () => {
  return (
    <div className=' mx-auto xs:max-md:mx-7 lg:w-max space-y-8'>
      <h1 className='text-[40px] xs:max-md:text-3xl text-center'>
        Learn Key AWS Cloud Skills Employers Want
      </h1>

      <div className='flex 
      xs:max-md:flex-col 
      xs:max-md:items-center 
      gap-7'>
        <SkillBox
          title='Loreon Foundations'
          desc='Learn key leadership and professional
               skills that will help you navigate 
               and succeed in the workplace.'
        />

        <SkillBox
          title='Soft Skills & Leadership Training'
          desc='Finish Foundations understanding 
          your personal brand, how to 
          write a CV, and how to ace a
           job interview.'
        />

        <SkillBox
          title='Learn the Basics of AWS'
          desc='Gain a comprehensive understanding 
          of cloud computing by learning about
           data centres, cloud service models, 
           and security.'
        />
      </div>
      <div className='flex xs:max-md:flex-col  xs:max-md:items-center gap-7'>
        <SkillBox
          title='Become a Cloud Architect'
          desc='Master the AWS Well-Architected 
          Framework to develop and deploy 
          scalable, reliable, and 
          cost-optimised cloud solutions for business.'
        />

        <SkillBox
          title='Learn the Basics of AWS'
          desc='Gain a comprehensive understanding 
          of cloud computing by learning about
           data centres, cloud service models, 
           and security.'
        />

        <SkillBox
          title='Learn the Basics of AWS'
          desc='Gain a comprehensive understanding 
          of cloud computing by learning about
           data centres, cloud service models, 
           and security.'
        />
      </div>

    </div>
  )
}


const SkillBox = ({ title, desc }: skillProp) => {

  return (

    <div className='w-[330px] bg-[#FCFCFC] shadow-sm rounded-lg h-[240px] p-[30px] space-y-[18px]'>
      <h1 className='text-black font-normal text-[26px]'>{title}</h1>
      <p className={(`   text-[#586283] font-light text-[17px]`)}>{desc}</p>
    </div>
  )
}

export default Skills