import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
      <main className="container mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Producing the next tech <br /> industry experts
          </h1>
          <p className="text-lg text-gray-600 mb-4">
             The Loreon Foundational DevOps Programme gives you a clear step-by-step guide to becoming
          internship-ready in just 6 weeks. No confusion, no wasted effort, just real skills and hands-on
          experience. Classes are delivered using a live video conferencing platform and all classes
          are recorded, and videos are shared after class. Students will get a Capstone project,
          Linked/resume review, and interview bootcamp in the final month of training.
          </p>
          <p className="text-lg text-gray-600 mb-8">Join us today and explore a world of possibilities!</p>
          <div className="flex flex-wrap gap-4">
            
             <div className="xs:max-md:overflow-hidden xs:max-md:space-x-4 bg-[#F5EAE6] w-max  rounded-[200px] px-[5px] py-3">


            <Link
              href="https://bit.ly/LOREON"
              target='_blank'
              className={`py-2.5 px-6 text-lg xs:max-md:text-lg font-cool 
                bg-[#F15A24] rounded-[100px] text-black
                `}
                >
              Enrol Now
            </Link>
              </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          {/* Decorative circles */}
          <div className="absolute top-10 right-20 w-4 h-4 rounded-full bg-green-100"></div>
          <div className="absolute bottom-20 left-10 w-6 h-6 rounded-full bg-green-100"></div>
          <div className="absolute bottom-40 right-0 w-8 h-8 rounded-full bg-blue-100"></div>
          <div className="absolute top-40 left-20 w-5 h-5 rounded-full bg-blue-100"></div>

          {/* Image circles */}
          <div className="relative h-[500px] hidden md:block">
            <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/assets/images/learning/hero1.jpg"
                alt="Tech professionals working together"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/assets/images/learning/hero2.jpg"
                alt="Tech community meetup"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-0 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/assets/images/learning/hero3.jpg"
                alt="Tech conference"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-[30px] right-1/4 w-44 h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/assets/images/learning/hero4.jpg"
                alt="Workspace setup"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/assets/images/learning/hero5.jpg"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
  )
}

export default Main