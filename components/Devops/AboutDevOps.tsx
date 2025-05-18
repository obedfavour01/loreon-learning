import React from 'react'
import Member from '../AboutUs/Member'
import Requirements from './Requirements'

const AboutDevOps = () => {
  return (
    <section className='flex 
        xs:max-md:flex-col 
        mx-[86px] xs:max-md:mx-7
        my-48 xs:max-md:my-96 
        items-center'>
        <div className='basis-7/12 py-5 mr-14 space-y-4'>
          <h1 className='text-4xl font-medium'>What is the DevOps Engineering Programme?</h1>
          <p className='text-[#586283]'>
          This programme is developed and maintained by AWS,
           a world leader in cloud technologies. The first 
           8 weeks are Loreon Foundations, where you will 
           learn critical communication, leadership, and 
           career development skills that will help you 
           hrive in the digital workforce. You’ll then learn
            all about AWS, focusing on solutions architecture, 
            storage & databases, cloud architecture, and security. 
            Each of these modules represent potential career paths 
            AWS Cloud Practitioners can follow after becoming 
            certified. Upon completion, you will receive a
            globally-recognised AWS Cloud Practitioner and 
            Solutions Architect certifications from Amazon Web Services.
          </p>
          <Requirements/>
        </div>
        <div className='basis-4/12 lg:border-l-2 h-max lg:border-loreonblue lg:pl-14 leading-8 py-5 '>
            <p className='text-[#586283]'>
            This has profound impact on my career development.
             The programme exceeded my expectations in every way.
              Within weeks of graduating and implementing some 
              of the learnt strategies, I began to get invitations
               for interviews, one of which has translated into my current job.”
            </p>


            <div>
              <Member name='Jenny Wilson' role='Nigeria'/>
            </div>
        </div> 
    </section>
  )
}

export default AboutDevOps