import FAQ from '@/components/Landing/FAQ/FAQ'
import Hero from '@/components/Loreon/Hero/Hero'
import Academy from '@/components/Training/Academy'
import CTA from '@/components/Training/CTA'
import Careers from '@/components/Training/Careers'
import Graduates from '@/components/Training/Graduates'
import Guarantee from '@/components/Training/Guarantee'
import Purpose from '@/components/Training/Purpose'
import Testimonials from '@/components/Training/Testimonials'
import TrainingHero from '@/components/Training/TrainingHero'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <TrainingHero /> */}

      <Hero/>
      <Careers />
      <Academy />
      <Purpose />
      <Testimonials />
      {/* <Graduates />  */}
      <Guarantee />
      <CTA />
      {/* <FAQ variant='light' /> */}

    </div>
  )
}

export default page