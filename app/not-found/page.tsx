import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar variant='light' />

            <div className='flex items-center justify-center'>

                <Image
                    width={800}
                    height={800}
                    alt='prop'
                    src={"/assets/images/training/404.PNG"}
                />
            </div>

        </div>
    )
}

export default page