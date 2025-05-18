import Image from 'next/image'
import React from 'react'

const Events = () => {
  return (
    <section className='mx-20 xs:max-lg:mx-6 my-36'>
      <header className='flex justify-between items-center my-8'>
        <h1 className='text-4xl xs:max-lg:text-xl font-bold'>Our amazing events & members</h1>

        <h3 className='text-base xs:max-lg:text-xs font-bold'>SEE MORE</h3>
      </header>




      <div className=' flex xs:max-md:flex-col gap-6  h-[500px] xs:max-md:h-auto '>
        <div className=" h-50 basis-5/12 ">
          <Image
            src={"/assets/images/design.jpg"}
            width={531}
            height={531}
            alt='design'
            className='aspect-square object-cover h-full w-full rounded-2xl'
          />
        </div>

        <div className='basis-7/12  flex gap-y-6 flex-col'>
            <div className='basis-5/12  flex gap-6'>
              <div className=" h-[183px]   bg-gray-300 rounded-3xl">
                <Image
                  src={"/assets/images/projector.jpg"}
                  width={531}
                  height={531}
                  alt='design'
                  className='object-cover h-full rounded-2xl'
                />
              </div>
              <div className=" h-[183px] bg-gray-300 rounded-3xl">  
              <Image
                  src={"/assets/images/conferenceroom.jpg"}
                  width={531}
                  height={531}
                  alt='design'
                  className=' object-cover h-full w-full rounded-2xl'
                />

              </div>

            </div>
            <div className=" basis-7/12 ">
                <Image
                src={"/assets/images/build.jpg"}
                width={500}
                height={100}
                alt='design'
                className=' w-full h-[280px]  object-cover rounded-2xl' />
            </div>
        </div>


      </div>
    </section>
  )
}




export default Events