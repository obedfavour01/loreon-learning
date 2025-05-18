import React from 'react'   
import MissionText from './MissionText'
import MissionImage from './MissionImage'

const Mission = () => {
  return (
    <div className='flex gap-12 mx-20 xs:max-lg:mx-7 my-8 items-center xs:max-lg:flex-col '>
            <MissionText/>
            <MissionImage/>
    </div>
  )
}

export default Mission