import React from 'react'
import Image from 'next/image'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"
import { Rating } from './Reviews'



const ReviewCarousel = () => {
    return (
        <div className=' mt-6 '>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {
                    Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 shadow-lg md:basis-1/2  lg:basis-1/2">

                            <Card className='h-max  mr-6 '>
                                <CardContent className="px-9 py-10">
                                    <CarouselDetails />
                                </CardContent>
                            </Card>

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className=' flex justify-between items-center mx-2  mt-8 gap-8'>

                    <CarouselPrevious className='static w-12 bg-[#239DE0] ' />
                    <CarouselNext className={`static w-12  bg-[#239DE0]`} />
                </div>
            </Carousel>
        </div>
    )
}

const CarouselDetails = () => (
    <div>
        <p className='text-[#1211278F] '>Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim
            velit mollit exercitation veniam.</p>


        <div className='flex gap-2 items-center mt-10'>

            <Image
                src={"/assets/images/model.PNG"}
                width={1000}
                height={1000}
                alt='avatar'
                className='w-12 h-12 rounded-full object-contain'
            />

            <div>
                <p className=' font-semiboldtext-sm text-black'>
                    Kristin Watson
                </p>
                <p className='font-light text-xs text-[#1211278F]'>
                    Jun 27  · 6 min read
                </p>
            </div>

            <Rating />
        </div>

    </div>
)

export default ReviewCarousel