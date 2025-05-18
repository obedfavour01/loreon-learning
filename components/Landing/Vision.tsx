import Image from 'next/image'
import React from 'react'

const Vision = () => {
    return (
        <div className='flex 
            xs:max-lg:flex-col 
            justify-center 
            items-center 
            gap-16 
            px-24 
            xs:max-md:px-8 
            w-full
            bg-loreonblue top-wavy-border pt-[90px]'>
            <div className='basis-1/2'>
                <Image
                    src={"/assets/images/training/vision.jfif"}
                    height={800}
                    width={800}
                    alt='service'
                    className='object-cover md:h-[531px] md:w-[617px] rounded-6xl xs:max-md:aspect-square'
                />

            </div>
            <div className='space-y-4 text-white  basis-1/2 '>
                <h1 className='text-6xl xs:max-md:text-4xl font-cool font-normal'>Our Vision</h1>

                <p className='text-3xl font-extralight xs:max-md:text-base'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                    Aliquam in hendrerit urna.
                </p>

                <p className='text-3xl 
                xs:max-md:text-base font-extralight'>
                    Pellentesque sit amet sapien fringilla, 
                    mattis ligula consectetur, ultrices mauris. 
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p> 
                
                <p className='text-3xl font-extralight xs:max-md:text-base'>
                    Vestibulum auctor ornare leo, 
                    non suscipit magna interdum eu. 
                    Curabitur pellentesque nibh nibh, 
                    at maximus ante.
                </p>
        </div>
        </div >
    )
}

export default Vision