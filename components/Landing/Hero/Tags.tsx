import React from 'react'
import TagItem from './TagItem'

const Tags = () => {
  return (
    <div className='flex xs:max-lg:flex-wrap xs:max-lg:gap-y-3 gap-6 xs:max-lg:gap-2 justify-center mt-6'>
            <TagItem text='Discovery & Strategy'/>
            <TagItem text='Branding & Identity'/>
            <TagItem text='Ideation & Concepting'/>
            <TagItem text='Discovery & Strategy'/>
            <TagItem text='Training'/>
    </div>
  )
}

export default Tags