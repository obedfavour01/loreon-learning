import React from 'react'
import ReviewCarousel from '../Landing/ReviewCarousel'

const Testimonials = () => {
  return (
    <div className='
    my-40
    xs:max-md:my-11
    px-36
    xs:max-md:px-7
    bg-[url("/assets/images/training/testimonialbg.png")] 
    bg-no-repeat
    bg-contain '>

      <div>
        <p>Testimonials</p>
        <h1 className="text-4xl">
        What our past students have said
        </h1>
      </div>
      <div>
        <ReviewCarousel/>
      </div>
    </div>
  )
}

export default Testimonials