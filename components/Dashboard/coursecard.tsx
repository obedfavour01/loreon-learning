import { cn } from '@/lib/utils';
import { Bell } from 'lucide-react'
import React from 'react'

interface CourseCardProp {
    className?: string;
}
const CourseCard = ({ className }: CourseCardProp) => {
    return (
        <div className={cn('py-10 px-7 border border-[#D0D5DD] rounded-lg', className)}>
            <div><Bell color='#0069FF' /></div>
            <h3 className='text-2xl font-semibold'>15</h3>
            <p className='text-base text-[#1D2939]'>
                Total Course Outline
            </p>
        </div>
    )
}

export default CourseCard