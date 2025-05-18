import Image from "next/image";




import React from 'react'

const Metrics = () => {
    return (
        <div className='mx-7 md:mx-32'>
            <div className='text-center '>
                <h1 className="text-[84px] xs:max-md:text-3xl flex justify-center items-center text-[#3276F2] gap-6">
                    <span>
                        <Image
                            src={"/assets/images/training/growth_metrics.png"}
                            width={800}
                            height={800}
                            alt='plant'
                            className='w-10 h-10 md:w-20 md:h-20 rounded-full' />
                    </span>
                    Our convincing growth metrics
                </h1>

            </div>


            <div className='flex flex-col lg:flex-row items-center justify-center gap-6 mt-12  mx-7 md:mx-auto'>
                <MetricCard />
                <MetricCard />
                <MetricCard />

            </div>

        </div>
    )
}

export default Metrics

export const MetricCard = () => (
    <div className='flex w-[345px] h-[264px] border-[3px] border-[#37536E] box-border rounded-[15px] overflow-hidden'>
        <div className='w-[147px] bg-[#E4E5E7] px-4 overflow-hidden'>
            <h1 className='text-6xl'>100k</h1>
            <p className=" text-lg font-semibold">Learners globally across Africa, APAC and LATAM regions.</p>
        </div>

        <div className='w-[197px] '>
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