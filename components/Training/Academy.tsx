import Image from 'next/image';
import React from 'react'
import { TbSettingsCode, TbCloudCode } from "react-icons/tb";
import AcademyVideo from './AcademyVideo';


const Academy = () => {
    return (
        <div className='flex
                xs:max-lg:flex-col 
                 items-center
                mx-28 
                my-36
                md:max-lg:mx-28 
              
                xs:max-md:mx-7 
                gap-8' id='instructor'>

            <div className='basis-1/2 h-max'>
                <h1 className='text-5xl xs:max-md:text-3xl xs:max-md:w-full mx-auto text-left font-bold'>
                    {/* Become an expert with <span className='text-loreonblue'>Loreon</span> Academy */}

                    About the Instructor
                </h1>

                <p className='xs:max-md:w-full  mx-auto font-light text-base my-8'>
                    <span className='text-2xl'> Ilerioluwa Arowolo </span> is a technology leader, with 8+ years of experience in cloud technology and automation. With a passion for knowledge sharing and mentoring professionals to develop in-demand skills, he specializes in building enterprise-grade systems and architecting automated solutions that drive organizational efficiency

                </p>



                <p className='xs:max-md:w-full  mx-auto font-light text-base my-8'>

                    His expertise in cloud infrastructure and DevOps has delivered transformative results across multiple organizations, improving system reliability while reducing costs.
                    With a versatile background spanning fintech, Web3, and e-commerce, Ilerioluwa has created robust web applications throughout his career
                </p>


                <p className='xs:max-md:w-full  mx-auto font-light text-base my-8'>
                    {/* His career progression demonstrates versatility and technical acumen, moving
                    through various tech roles where he created robust web applications across fintech, Web3, and
                    e-commerce sectors.  */}

              As a Senior DevOps Engineer, he now architects CI/CD pipelines and manages cloud infrastructure for critical financial services platforms.
                </p>
                {/* <div className='flex xs:max-lg:flex-col justify-between  gap-12 xs:max-lg:gap-y-8 mt-16'>
                    <div className='flex gap-3 '>
                   
                        <div>
                            <h1 className=' text-base font-normal leading-4'>Advance your skills
                                & knowledge</h1>

                            <p className='mt-3 text-xs'>As the industry’s trusted source, learn
                                best practices directly from cloud native
                                experts in our hands-on labs.
                            </p>
                        </div>
                    </div>

                    <div className='flex gap-3 '>
            
                        <div>
                            <h1 className='text-base font-normal leading-4'>Validate your skills through certifications</h1>

                            <p className='mt-3 text-xs'>Solve real world challenges with
                                performance-based exams in a
                                command-line environment.
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <div>
                            <h1 className='text-base font-normal leading-4'>
                            Gain a competitive edge
                            in the job market
                            </h1>

                            <p className='mt-3 text-xs'>Jump start your career and establish
                                your value in the job market with
                                respected, vendor-neutral certifications.
                            </p>
                        </div>
                    </div>

                </div> */}




            </div>
            <div
                className='basis-1/3
                         overflow-hidden 
                         rounded-2xl 
                         my-8  
                         mx-auto'>
                {/* <AcademyVideo /> */}

                <Image
                    src={"/assets/images/instructor/ileriii.jpg"}
                    alt='ileri'
                    width={800}
                    height={800}
                    className='w-full h-full object-cover rounded-full  lg:w-[566px] lg:h-[429px] aspect-square '
                />
            </div>



        </div>
    )
}

export default Academy