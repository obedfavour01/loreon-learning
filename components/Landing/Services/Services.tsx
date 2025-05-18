import React from 'react'
import ServiceCard from '../../../components/Landing/Services/ServiceCard'

const Services = () => {
  return (
    <div className='xs:max-lg:mx-6  lg:mx-6
         mt-44 mb-24'>

        <h1 className='font-semibold text-[##343434]
        xs:max-md:px-0 
        px-[85px] font-roboto text-3xl'>
          Explore a few services we offer
        </h1>
    


      <div className='flex flex-wrap 
         xs:max-md:flex-col
          xs:max-md:items-center
      
      gap-y-11
      justify-between mt-11 px-[85px]
      xs:max-md:px-0'>
        <ServiceCard
          title={"Delivering Services"}
          stackColor='#0072EF80'
          arrowColor='#FFFFFF'
          arrowbgColor='#1362F3'
          img='/assets/images/handshake.jpg'
        />

        <ServiceCard
          title={"Delivering Teams"}
          stackColor='#FFFFFF80'
          arrowColor='#00B24F'
          arrowbgColor='#FFFFFF'
          img='/assets/images/table.jpg'
        />

        <ServiceCard
          title={"Training"}
          stackColor='#FF8D0380'
          arrowColor='#FFFFFF'
          arrowbgColor='#FF8D03'
          img='/assets/images/plan.jpg'
        />
        
     
      </div>
    </div>
  )
}

export default Services