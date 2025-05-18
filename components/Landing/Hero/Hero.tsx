import React from 'react'
import IntroText from './IntroText'
import Gallery from '../../../components/Landing/Hero/Gallery'
import Stat from './Stat'
import Tags from './Tags'
import Navbar from '@/components/Navbar'
import HeroTextbox from './NewHero/HeroTextbox'
import HeroImgBox from './NewHero/HeroImgBox'

const Hero = () => {
  return (
    <section className='bg-black relative top-0  '>
      <Navbar variant='dark'/>
      <div className='flex py-8 xs:max-md:pt-2'>
        <HeroTextbox />
        <HeroImgBox />
      </div>

    </section>
  )
}

export default Hero