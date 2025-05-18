import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Rating } from '../Landing/Reviews'

const TrainingHero = () => {
  return (
    <section className='relative h-[110vh] w-full 
      py-20
       bg-no-repeat
       bg-center
       bg-100%'>


      <Image
        src={"/assets/images/training/opschool-hero.jpg"}
        alt='hero'
        fill={true}
        className='absolute top-0 bottom-0 right-0 left-0 object-cover inset-0'
      />

      <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#ffffff] '></div>

      <Navbar variant='dark' />


      <div className=" text-white space-y-10 mt-20 absolute  left-0 right-0">
        <h1 className='text-[83px] 
            xs:max-md:text-5xl 
            xs:max-md:leading-[60px] 
            leading-[77px] 
            text-center
            mt-2 mb-7'>
          Producing the next tech <br /> industry experts
        </h1>
        <p className={`font-medium 
            text-lg
            lg:mx-24 
            leading-[47px] 
            text-black 
            xs:max-md:text-sm 
            text-center `}>
          The Loreon Foundational DevOps Programme gives you a clear step-by-step guide to becoming
          internship-ready in just 6 weeks. No confusion, no wasted effort, just real skills and hands-on
          experience. Classes are delivered using a live video conferencing platform and all classes
          are recorded, and videos are shared after class. Students will get a Capstone project,
          Linked/resume review, and interview bootcamp in the final month of training.
        </p>

        <div className='flex justify-center gap-4'>
          <Button className='text-white font-medium text-lg bg-loreonblue rounded-[100px] px-6 py-2.5 '>
            Enrol Now
          </Button>

          {/* <Button className='text-[#4A4458] font-medium text-lg bg-white rounded-[100px] px-6 py-2.5 '>
            Join Our Waitlist
          </Button> */}

        </div>
      </div>


      {/* <HeroStats /> */}

    </section>
  )
}


export default TrainingHero

// const HeroStats = () => {
//   return (
//     <div className='flex
//       xs:max-md:flex-col
//       gap-y-4
//       justify-between
//         relative -mt-24
//         lg:mx-40 px-16
//         xs:max-md:px-4
//         bg-loreonblue
//         py-10 xs:max-md:w-full '>
//       <div className='flex'>
//         <div className='flex flex-col items-center w-max pr-14 xs:max-md:pr-8'>
//           <h3 className='text-white text-5xl xs:max-md:text-3xl font-normal'>100k</h3>
//           <p className='text-white font-light text-xs xs:max-md:text-[8px] text-center'>Learners since 2023</p>
//         </div>

//         <div className='flex flex-col items-center w-max px-14 xs:max-md:px-8 border-x border-white'>
//           <h3 className='text-white text-5xl xs:max-md:text-3xl font-normal'>85%</h3>
//           <p className='text-white font-light text-xs xs:max-md:text-[8px] '>Employment Rate</p>
//         </div>

//         <div className='flex flex-col items-center w-max pl-14 xs:max-md:pl-8'>
//           <h3 className='text-white text-5xl xs:max-md:text-3xl font-normal'>95%</h3>
//           <p className='text-white font-light text-xs xs:max-md:text-[8px]'>Graduate Satisfaction</p>
//         </div>

//       </div>

//       <div className=' flex items-center'>
//         <Image
//           width={500}
//           height={500}
//           src={"/assets/images/experts.png"}
//           alt='students'
//           className='h-12 w-48 object-contain' />

//         <div className='flex flex-col'>
//           <Rating />
//           <a href="" className='text-[10px] text-white font-thin'>Read Reviews</a>
//         </div>
//       </div>

//     </div>
//   )
// }