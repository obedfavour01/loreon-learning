import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
    return (
        <section className='mx-52 xs:max-lg:mx-7 my-10'>
            <header className="text-5xl xs:max-lg:text-2xl font-black text-center text-[#404040]">
                Embrace the Future with Our Technology Company
            </header>

            <p className='my-6 font-normal xs:max-lg:text-base text-lg text-center text-aboutgray p-2'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. 
                
                Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, 
                mattis ligula consectetur, ultrices mauris. 
                Maecenas vitae mattis tellus..
            </p>

            <div className='mx-auto px-6 py-4 flex items-center bg-bg_about_gray rounded-md w-max'>
                <Image
                    src={"/assets/images/experts.png"}
                    width={300}
                    height={71}
                    alt='experts'
                    className='w-64 xs:max-lg:w-48 h-16 object-contain'
                />

                <h1 className='text-4xl xs:max-md:text-xl font-light flex flex-col space-y-2'>
                    Over 200k+
                    <span className='text-sm font-semibold text-loreonblue'>
                        <a href="">
                            Experts Available
                        </a>
                    </span>

                </h1>
            </div>
        </section>
    )
}

export default AboutHero