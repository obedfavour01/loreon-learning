import Image from 'next/image'
import React from 'react'
import { MetricCard } from '../Metrics/Metrics'
import { Divide } from 'lucide-react'

type LoreonCard = {
    header: string,
    content: React.ReactElement,
}
const Loreon = () => {
    return (
        <div className='mx-7 md:mx-32'>
            <div className='text-center '>
                <h1 className="text-[84px] 
                    xs:max-md:text-3xl 
                    flex 
                    justify-center 
                    items-center 
                    text-[#3276F2] gap-6">
                    <span>
                        <Image
                            src={"/assets/images/training/growth_metrics.png"}
                            width={800}
                            height={800}
                            alt='plant'
                            className='w-20 h-20 rounded-full' />
                    </span>
                    What do you stand to gain
                </h1>

            </div>


            <div className='flex flex-col md:flex-row items-center justify-center gap-6 mt-12'>
                <LoreonCard
                    header={'6-week virtual programme'}
                    content={

                        <div>


                            <ul className='list-none space-y-0.5'>

                                <li> ● Live instructor-led virtual classes </li>
                                <li> ● Clear roadmap to DevOps skills  </li>
                                <li> ● Work on real projects, guided and assessed by a senior engineer  </li>
                                <li>  ● Weekly tasks and feedback </li>


                            </ul>


                        </div>

                    }
                />

                <LoreonCard
                    header={' Knowledge enough to Secure an internship!'}
                    content={
                            <div>
                                <ul className='list-none space-y-0.5'>

                                    <li> ● LinkedIn Optimization</li>
                                    <li> ● Resume review </li>
                                    <li> ● Portfolio Project  </li>
                                    <li>  ● Demo Interview session </li>


                                </ul>
                            </div>
                    }
                />

                <LoreonCard
                    header={'You’ll learn directly from a senior engineer, work on real projects, and follow a proven roadmap that takes you from beginner to internship-ready'}
                    content={<div> </div>}
                />



            </div>

        </div>
    )
}

export default Loreon


export const LoreonCard = ({ header, content }: LoreonCard) => (
    <div className=' w-[375px] h-[284px] border-[3px] border-[#37536E] box-border rounded-[15px] overflow-hidden relative inset-5'>
        <div className='inset-5 bg-white px-4 overflow-hidden absolute rounded-3xl p-4'>
            <h1 className='text-xl'>{header}</h1>
            <p className=" text-lg font-semibold text-[#5F6368]">
                {content}
            </p>
        </div>

        <div className='w-full'>
            <Image
                src={"/assets/images/training/learners.png"}
                width={800}
                height={800}
                alt='learner'
                className=''
            />
        </div>
    </div>

)