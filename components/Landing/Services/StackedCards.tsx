import Image from 'next/image'
import React from 'react'

const StackedCards = ({stackColor,img}:{stackColor:string,img:string}) => {
  return (
   <div className=" relative flex justify-center w-full h-full mt-6  overflow-hidden ">
      <div className="stack__card second__stack  top-4" style={{backgroundColor: stackColor}}>
      
      </div>
      <div className="stack__card mx-auto first__stack  top-8" style={{backgroundColor: stackColor}}>
        
      </div>
      <div className="absolute bg-white overflow-hidden rounded-5xl shadow-md w-full h-48 top-12">
        <Image
          src={img}
          width={400}
          height={300}
          alt='images'
          className='w-full overflow-hidden h-full object-cover'
          />
      </div>
    </div>
  )
}

export default StackedCards