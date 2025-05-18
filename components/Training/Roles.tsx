import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Roles = () => {
  return (
    <div className=''>
      <h1 className='text-5xl xs:max-lg:text-3xl font-bold text-center'>Role Based Training</h1>

      <div className='flex  xs:max-lg:flex-col xs:max-lg:gap-y-8'>
        <div className='lg:basis-1/2  
            xs:max-lg:w-full 
             
            py-16 
            xs:max-lg:pr-4
            xs:max-lg:py-6
            pr-28'>
          <h1 className='text-2xl  font-bold'>
            Ready to get started?
          </h1>

          <p className='whitespace-pre-wrap
           text-lg mt-10 xs:max-lg:mt-4 text-loreongray'>
            Explore our role based trainings,
            submit an application and start your journey
            to being a Certified DevOps Engineer or Data Analyst.
            You can also contact us if you need any help in your
            application.</p>
        </div>
        <div className='flex  gap-10 xs:max-lg:gap-14 basis-1/2'>
          <div>
            <Image src={"/assets/icons/delivery.png"}
              width={700}
              height={700}
              alt='delivery'
              className='h-12 w-12'
            />

            <h6 className="text-base font-bold">DevOps</h6>

            <p className='whitespace-pre-wrap text-sm my-8 text-loreongray'>
              Our DevOps program is designed to
              equip you with both the theoretical
              knowledge and practical skills needed
              to excel in the dynamic field of DevOps.
              While we cover the foundational concepts
              that underpin DevOps methodologies,
              our primary focus is on real-world
              applications and hands-on experience.
            </p>

        <Link href={"/training/devops"}>
            <h6 className='text-loreonblue flex gap-2 items-center'>
              Pricing Details <FaLongArrowAltRight />
            </h6>
        </Link>
          </div>


          <div>
            <Image src={"/assets/icons/chat.png"}
              width={1000}
              height={1000}
              alt='delivery'
              className='h-12 w-12'
            />

            <h6 className="text-base font-bold">Data</h6>

            <p className='whitespace-pre-wrap text-sm my-8 text-loreongray'>
              Our Data program combines essential theory with
              hands-on skills in data visualization using
              Tableau and Power BI, statistical analysis
              with R and Python, machine learning with
              scikit-learn and TensorFlow, and big
              data technologies like Hadoop and Spark,  
             .
            </p>
            <Link href={"/training/data"}>
              <h6 className='text-loreonblue flex gap-2 items-center'>
               Go there 
              <FaLongArrowAltRight />
            </h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roles