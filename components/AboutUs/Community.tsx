import Image from 'next/image'
import React from 'react'

const Community = () => {
    return (
        <section className='flex bg-black xs:max-md:flex-col gap-8 px-28 xs:max-xl:px-7 py-20'>
            <div className='basis-5/12 '>
                <h1 className='font-bold text-4xl xs:max-xl:text-2xl  leading-10 text-white'>
                    We are a community of doers who use open source
                    tools including Kubernetes, Prometheus, Envoy,
                    and many others.
                </h1>

                <p className='text-base text-white font-normal my-6'>
                    Opensource tools have quickly gained adoption
                    and secu diverse community support,
                    becoming some of the highest velocity
                    projects in the history of open source.
                </p>
               

                background: 

                    <CommunityStats/>
            </div>
            <div className='basis-7/12   relative  shadow-custom-shadow' >
                <Image
                    src={"/assets/images/focus.jpg"}
                    height={300}
                    width={600}
                    alt='focus'
                    className=' block object-cover object-left-center w-full rounded-2xl h-full'
                />

                <div className="absolute inset-0 bg-custom-gradient"></div>

                <div className='absolute bottom-2 left-2 text-white px-6'>
                    <p className='text-base font-normal leading-[29px] mb-12'>
                        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.”
                    </p>

                    <p className='font-semibold text-xl'>Kristin Watson  /  CEO, Loreon</p>

                </div>


            </div>
        </section>
    )
}


function CommunityStats() {
    return (
    <div className='flex  justify-start xs:max-md:justify-center h-36 gap-8 items-end '>
        <div className='flex flex-col   items-center text-white text-center h-full'>
            <Image 
                src={"/assets/icons/computer.svg"}
                height={300}
                width={600}
                alt='focus'
                className='  object-contain w-[72px] xs:max-lg:w-14 rounded-2xl h-full'
            />

            <div className=' flex flex-col justify-between gap-y-1 '>
                <h1 className='text-3xl xs:max-md:text-xl font-bold'>229 K+</h1>
                <p className='text-xs'> Project Contributors</p>
            </div>

        </div>

        <div className='flex flex-col gap-4 h-full  items-center text-white text-center'>
            <Image
                src={"/assets/icons/corporations.svg"}
                height={300}
                width={600}
                alt='focus'
                className='  object-contain w-[72px]  xs:max-lg:w-14 rounded-2xl h-full'
            />

            <div className=' flex flex-col justify-between'>
                <h1 className='text-3xl xs:max-md:text-xl font-bold'>767</h1>
                <p className='text-xs'> Members </p>
            </div>

        </div>


        <div className='flex flex-col gap-7 h-full  items-center  text-white text-center'>
            <Image
                src={"/assets/icons/meetups1.svg"}
                height={300}
                width={600}
                alt='focus'
                className='  object-contain w-[72px]  xs:max-lg:w-14 rounded-2xl h-full'
            />

            <div className=' flex flex-col space-y-1 justify-between'>
                <h1 className='text-3xl xs:max-md:text-xl font-bold '>75 K+</h1>
                <p className='text-[9px] text-center'> Cloud Native  <br/>Community Members</p>
            </div>

        </div>


        <div className='flex flex-col  h-full  items-center text-white text-center'>
            <Image
                src={"/assets/icons/kube.svg"}
                height={300}
                width={600}
                alt='focus'
                className='  object-contain w-[72px] rounded-2xl h-full'
            />

            <div className='flex flex-col justify-between'>
                <h1 className='text-3xl xs:max-md:text-xl font-bold'>182</h1>
                <p className='text-xs'> Projects</p>
            </div>

        </div>
    </div>
)}

export default Community