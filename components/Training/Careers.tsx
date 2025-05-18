"use client"
import React, { useState } from 'react'

import Image from 'next/image'
import { Button } from '../ui/button'
import Tabs from '../Tabs'
import Metrics from './Metrics/Metrics'
import Loreon from './WhyLoreon/Loreon'
import Partners from './Partners/Partners'


const Careers = () => {
  const [activeChild, setActiveChild] = useState('data');
  const handleTabChange = (tab:string) => {
    setActiveChild(tab)
  }
  return (
    <div className='mt-36 lg:h-screen'>

      <Tabs onTabChange={handleTabChange}/>

      <div className='mt-24 xs:max-md:my-8'>
        

        <div className='flex flex-col md:flex-row gap-5 justify-center  xs:max-md:overflow-x-scroll'>

            {activeChild === 'all' && 
                <Metrics/>
            }
        {activeChild === 'data' && <Loreon/> }
        {activeChild === 'devops' && <Partners/>}
        </div>

      </div>
    </div>
  )
}




export default Careers

  