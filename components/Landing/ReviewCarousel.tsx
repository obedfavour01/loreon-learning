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

const testimonialData = [
    {
        name: "Fejiro Erikson",
        image: "/assets/images/learning/fejiro.jpg",
        testimony: "“Loreon completely transformed my DevOps journey. I went from having just basic Linux knowledge to confidently deploying and scaling applications with Docker, Kubernetes, Jenkins, Terraform, and AWS. The hands-on labs, job-readiness focus, and mindset training—plus earning my AWS Solutions Architect certification—made all the difference. Loreon isn’t just training; it’s a career launchpad.”"
    },

    {
        name: "Stanley Elochukwu",
        image: "/assets/images/learning/stanley.jpg",
        testimony: "Loreon’s DevOps training was a game-changer. Despite early challenges with pacing, the hands-on approach and job-focused instruction helped me gain real-world skills using tools like Terraform, AWS, Jenkins, and Docker. Earning my FinOps certification and working toward AWS Solutions Architect are proof of the program’s quality. Loreon built my confidence and made applying DevOps in real projects feel natural. Highly recommended for anyone serious about entering the field"
    },

    {
        name: "Obed Favour",
        image: "/assets/images/learning/obed01.jpg",
        testimony: `Today marks my first day as a DevOps Engineer in a physical office, and I owe a huge part of this milestone to Loreon. From day one, our facilitator made the learning journey unforgettable, That set the tone for an experience that was both challenging and deeply rewarding.
        Loreon's training was not just about tools like Kubernetes, Docker, or Terraform—it was about mindset, clarity, and real-world readiness. We didn’t just learn theory; we got our hands dirty. `
    }
]

const ReviewCarousel = () => {
    return (
        <div className=' mt-6 '>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {
                        testimonialData.map((val, index) => (
                            <CarouselItem key={index} className="pl-1 shadow-lg md:basis-1/2  lg:basis-1/2">

                                <Card className='h-[280px]  mr-6 border-2 border-black flex items-center'>
                                    <CardContent className="px-9  py-3">
                                        <div className='flex flex-col justify-center h-4/5 '>
                                            <p className='text-[#1211278F] '>{val.testimony}</p>


                                            <div className='flex gap-2 items-center mt-10'>

                                                <Image
                                                    src={val.image}
                                                    width={1000}
                                                    height={1000}
                                                    alt='avatar'
                                                    className='w-12 h-12 rounded-full object-contain'
                                                />

                                                <div>
                                                    <p className=' font-semiboldtext-sm text-black'>
                                                        {val.name}
                                                    </p>
                                                    {/* <p className='font-light text-xs text-[#1211278F]'>
                    Jun 27  · 6 min read
                </p> */}
                                                </div>

                                                {/* <Rating /> */}
                                            </div>

                                        </div>
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


    <div className='flex flex-col justify-center h-4/5 '>
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
                {/* <p className='font-light text-xs text-[#1211278F]'>
                    Jun 27  · 6 min read
                </p> */}
            </div>

            <Rating />
        </div>

    </div>
)

export default ReviewCarousel