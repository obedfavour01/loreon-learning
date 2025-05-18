import React from 'react'
import Image from 'next/image'

const MissionImage = () => {
  return (
    <div className='basis-5/12'>
        <Image
        src={"/assets/images/newPeople.PNG"}
        alt='diverse'
        width={1000}
        height={480}
        className='w-full'
        />
    </div>
  )
}

export default MissionImage