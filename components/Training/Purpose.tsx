import React from 'react'
import PurposeItem from './PurposeItem'

const Purpose = () => {
  return (
    <div className='bg-black py-20 relative h-max  xs:max-lg:px-8'>
      <div>
        <h1 className='text-6xl xs:max-lg:text-2xl text-white font-black text-center '>Training Purpose</h1>

        <p className='text-center text-white
           font-light text-xl 
           xs:max-lg:text-lg
           xs:max-lg:px-1
           lg:mx-80 mt-6 px-4'
        >
          Delivering quality education
          and provide support to your participants
          and continuously improve the program based
          on feedback and industry developments
          to ensure its long-term success.
        </p>
      </div>


      <div className='relative 
          mx-16 px-28
          bg-[#191919]
          xs:max-lg:mx-0
          xs:max-lg:px-6
          mt-14
          py-20 
          flex
          flex-col
          gap-y-12
          xs:max-lg:gap-y-6
          rounded-6xl
          border
          border-purpose-border'>
        <div className='flex gap-2 xs:max-lg:gap-y-6 xs:max-lg:flex-col '>
          <PurposeItem
            className='basis-1/2'
            PurposeTitle='Infrastructure Setup'
            PurposeDetails='Interactive Learning: 
            Encourage active participation 
            through group discussions,
            Q&A sessions, and interactive activities.'
          />
          <PurposeItem
            className='basis-1/2'
            PurposeTitle='Continuous Feedback'
            PurposeDetails='Collect feedback from participants 
            throughout the bootcamp and use it to make improvements.
             This can be done through surveys, one-on-one discussions,
              or anonymous feedback forms.'
          />
        </div>
        <div className='flex gap-2  xs:max-lg:gap-y-6 xs:max-lg:flex-col mx-auto xs:max-lg:w-full'>
          <PurposeItem
            className='basis-1/2'
            PurposeTitle='Hands-on Experience'
            PurposeDetails='learning through hands-on experience.
             Include practical exercises, 
             coding challenges, and real-world projects.'
          />
          <PurposeItem
            className='basis-1/2'
            PurposeTitle='Certifications and Recognition'
            PurposeDetails='Community Building: Foster a sense of community among participants. Encourage them to collaborate, share knowledge, and stay connected after the bootcamp ends.'
          />
        </div>
        <div className='flex xs:max-lg:flex-col gap-y-3 '>
          {/* <PurposeItem
            className='justify-center  basis-1/2  lg:mx-auto  xs:max-lg:w-full'
            PurposeTitle='Present Guest Speakers and Industry Experts'
            PurposeDetails='
            Invite guest speakers and industry experts to share
            their insights and experiences  and provide valuable 
            real-world context.'
          /> */}
          <PurposeItem
            className='mx-auto basis-1/2 xs:max-lg:w-full'
            PurposeTitle='Network and Partnerships'
            PurposeDetails='Build partnerships with companies and organizations in the industry which can lead to job placement opportunities for graduates.'
          />
        </div>

      
      


      </div>
    </div>
  )


}

export default Purpose