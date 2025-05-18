import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'




const Collaboration = () => {
    return (
        <section className='mx-20 xs:max-lg:mx-7'>
            <div className='flex xs:max-lg:flex-col gap-6 items-center'>
                <div className='lg:basis-4/12'>
                    <h1 className="text-aboutgray font-semibold text-5xl  leading-[56px]">
                        About Loreon
                    </h1>

                    <article className='my-3 pr-6 text-sm text-aboutgray'>
                        {content.aboutLoreon.toString()}
                    </article>
                </div>
                <div className='lg:basis-5/12'>

                    <Image alt="fourth"
                        src={"/assets/images/table.jpg"}
                        width={400}
                        height={240}
                        className="  rounded-3xl object-cover w-full"
                    />
                </div>
                <div className='lg:basis-3/12'>
                    <h1 className="text-2xl font-semibold text-aboutgray ">
                        Collaboration - The key to success
                    </h1>

                    <p className='text-sm text-aboutgray'>Lorem ipsum dolor sit amet consectetur
                        adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. 
                    </p>

                    <Button className='text-center
                    bg-bg_blue
                    text-white text-xs 
                    w-full
                    my-3
                    font-light rounded-3xl'
                    >
                        Contact Us
                    </Button>

                    <Image src={"/assets/images/handshake.jpg"}
                        width={282}
                        height={100}
                        alt='collab'
                        className='rounded-3xl w-full' />
                </div>
            </div>

            <div className='flex xs:max-md:flex-col gap-5 my-6'>
                <div className='py-4 px-6 rounded-lg flex bg-bg_about_gray basis-1/2 gap-4'>

                <Image alt='' width={200} height={300} src={"/assets/images/docker.svg"}  className='w-24'/>

                    <div>
                        <h3 className='text-base font-semibold'>Open Access to Expert Strategies</h3>
                        <p className='font-light text-xs text-aboutgray'>Lorem ipsum dolor sit amet consectetur adipiscing elit ....</p>
                    </div>
                </div>

                <div className='py-4 px-6 rounded-lg flex bg-bg_about_gray basis-1/2 gap-4'>

                    <Image alt='' width={200} height={300} src={"/assets/images/docker.svg"} className='w-24'/>
                    <div>
                        <h3 className='text-base font-semibold'>Addressing technology vulnerabilities</h3>
                        <p className='font-light text-xs text-aboutgray'>Lorem ipsum dolor sit amet consectetur adipiscing elit ....</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Collaboration




const content = {
    aboutLoreon: `Loreon technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach. 
   \n
    These techniques enable loosely coupled systems that are resilient, manageable, and observable.
    Combined with robust automation, they allow engineers to make high-impact changes frequently and
    predictably with minimal toil.
    
    Loreon seeks to drive adoption of this paradigm by fostering and
    sustaining an ecosystem of open source, vendor-neutral projects. We democratize state-of-the-art
    patterns to make these innovations accessible for everyone.`



}