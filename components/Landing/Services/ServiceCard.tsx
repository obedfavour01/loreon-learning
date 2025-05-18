import React, { ReactHTMLElement } from 'react'
import StackedCards from './StackedCards'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from 'next/image'


type ServiceProps = {
  stackColor: string,
  title: string,
  arrowColor: string,
  arrowbgColor : string
  img: string
}

const ServiceCard = ({ title,stackColor,arrowColor,arrowbgColor,img }: ServiceProps) => {
  return (

    <div className='  rounded-6xl shrink-0 h-[510px] w-[381px] 
    xs:max-md:w-[min(100%,361px)]
     relative  overflow-hidden'>

      <Image
        src={img}
        height={800}
        width={800}
        alt='service'
        className='object-cover h-full w-full'
      />

      <div className='service-card-overlay absolute top-0 bottom-0 left-0 right-0'></div>

      <div className='text-white absolute top-0 bottom-0 w-full px-8 py-6 flex flex-col justify-between'>
          <h3 className="text-2xl ">{title}</h3>
          <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur
              adipiscing elit Ut et massa mi. Aliquam 
              in hendrerit urna. Pellentesque sit amet 
              sapien fringilla, mattis ligula consectetur,
              ultrices mauris. 
          </p>
      </div>
    </div>
  )
}

export default ServiceCard