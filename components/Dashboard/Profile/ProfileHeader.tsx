import { Edit, Edit2, Edit2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProfileHeader = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold'>Profile Information</h1>


            <div className='flex justify-between'>
                <div className='flex items-end gap-[18px]'>
                    <Image
                        src={"/assets/images/training/profile_pic.png"}
                        width={800}
                        height={800}
                        alt="avatar"
                        className='rounded-lg w-[182px] h-[214px] object-fill'
                    />

                    <div>
                        <h1 className='text-lg text-[#1D2939'>Profile Picture</h1>
                        <p className='text-[#667085] text-xs'>Change Profile Picture</p>
                    </div>
                </div>

                <h3 className='flex items-center gap-2 h-max text-[#1D2939]'>Edit
                    <Edit2Icon size={18} />
                </h3>
            </div>





        </div>
    )
}

export default ProfileHeader