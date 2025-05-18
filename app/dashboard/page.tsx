import CourseCard from '@/components/Dashboard/coursecard'
import CourseTable from '@/components/Dashboard/coursestable'
import { CircleHelp } from 'lucide-react'
import React from 'react'

const page = () => {
    return (
        <div className='pl-6 pr-12 border-l border-[#E4E7EC]'>

            <div className='flex justify-between items-center  h-[10vh]'>
                <input
                    type="text"
                    placeholder='Search'
                    className='border border-[#ffecec] 
                    rounded-md px-4 py-1.5 w-80 h-10
                    placeholder:text-xs'
                />

                <CircleHelp />

            </div>


            <h1 className='text-3xl font-semibold'>
                Student Dashbaord
            </h1>
            <p className='#6E6E6F text-xs'>
                Stay on top your app&apos;s performance with real-time insights.
            </p>

            <hr className='text-[#CFD0D2] my-6' />


            <div className='flex w-full  gap-5 mb-5'>
                <CourseCard className='basis-1/3' />
                <CourseCard className='basis-1/3' />
                <CourseCard className='basis-1/3' />
            </div>

            <div className='flex w-full  gap-5'>
                <CourseCard className='basis-1/2' />
                <CourseCard className='basis-1/2' />
            </div>

            <CourseTable />
        </div>
    )
}

export default page