import React from 'react'

const TagItem = ({text}:{text:string}) => {
  return (
    <div className='bg-[#f7f7f7] py-3 px-3 rounded-2xl'>
            <p className='text-sm'>{text}</p>
    </div>
  )
}

export default TagItem