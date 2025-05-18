import ProfileForm from '@/components/Dashboard/Profile/ProfileForm'
import ProfileHeader from '@/components/Dashboard/Profile/ProfileHeader'
import { Input } from '@/components/ui/input'
import { CircleHelp, Edit2, FileQuestion } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-between h-[10vh] items-center'>
        <Input 
          className='w-80 h-10 rounded-md'
          placeholder='Search'
          />
        <CircleHelp />
      </div>

      <ProfileHeader />
      <ProfileForm/>
    </div>
  )
}

export default page