import React from 'react'
import Cert from './Cert'

const Certification = () => {
  return (
    <div className='mt-20'>
      <header className='text-5xl xs:max-lg:text-lg font-bold text-center '>Certification Based Training</header>

        <div className='flex gap-7 xs:max-lg:flex-col justify-center mt-7'>
            <Cert title = "AWS Developer"/>
            <Cert title = "AWS SysOps"/>
            <Cert title = "AWS DevOps"/>
           
        </div>


        <div className='bg-bg_about_gray w-1/2  xs:max-lg:w-full my-12 mx-auto p-3 rounded-md'>
          <p className='text-loreongray px-8 text-center'>
            We provide high-quality 
            educational materials,
             including slides, documentation, 
            and code examples</p>
        </div>
    </div>
  )
}

export default Certification