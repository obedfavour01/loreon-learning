import React from 'react'

const WhatWeDo = () => {
    return (
        <div className='text-white py-16 about-whatwedo-gradient px-72 xs:max-lg:px-8'>
            <header className='text-4xl font-cool text-center leading-[60px]'>
                What We DO
            </header>

            <p className='font-normal text-xl xs:max-md:text-sm'>
                At Loreon, we believe in the boundless potential of opportunity.
                We are committed to providing world-class tech training to
                millions across Africa and beyond. Our programs are designed
                to be adaptive and forward-thinking, equipping our learners
                with future-proof skills. Our goal is to empower each individual
                to achieve their highest potential through the power of opportunity.
                By making this accessible, we help our learners uncover the hidden
                value within themselves.
            </p>

            <div className='lg:px-16 mt-14'>
                <div className='gap-8 flex items-center'>
                    <h1 className='text-[#99D7FF] text-7xl xs:max-md:text-4xl '>01</h1>
                    <p className='text-white font-roboto lg:text-lg'>
                        Provide young professionals with access to the
                        most in-demand tech skills that will power the future.
                    </p>
                </div>

                <div className='gap-8 flex 
                    my-3
                    py-3
                    items-center 
                    border-y border-y-[#69DAF9]'>
                    <h1 className='text-[#99D7FF] text-7xl xs:max-md:text-4xl'>02</h1>
                    <p className='text-white font-roboto lg:text-lg'>
                        Empower the next generation of technology innovators,
                        entrepreneurs, and business leaders through challenging, real-world coursework.
                    </p>
                </div>

                <div className='gap-8 flex items-center'>
                    <h1 className='text-[#99D7FF] text-7xl xs:max-md:text-4xl'>03</h1>
                    <p className='text-white font-roboto lg:text-lg'>
                        Build lifelong, impactful relationships with tech
                        professionals that support them at all stages of their career journey.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo