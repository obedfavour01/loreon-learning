import AboutDevOps from '@/components/Devops/AboutDevOps'
import Admission from '@/components/Devops/Admission'
import Details from '@/components/Devops/Details'
import Fees from '@/components/Devops/Fees'
import HeroDevOps from '@/components/Devops/HeroDevOps'
import Requirements from '@/components/Devops/Requirements'
import Skills from '@/components/Devops/Skills'
import Solutions from '@/components/Devops/Solutions'
import FAQ from '@/components/Landing/FAQ/FAQ'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-hidden'>

      <HeroDevOps />
      <Details type='devops' />
      <AboutDevOps />
      <Skills />
      <Fees type='devops' />
      <Solutions />
      <Admission type='devops' />
      <FAQ variant='light' />

    </div>
  )
}

export default page