import Image from 'next/image'
import React from 'react'

const Social = () => {
    return (


        <div>
            <ul className='flex flex-col gap-8'>
                <li className='footer_header'>Socials</li>
                <li className='flex gap-6'>

                    <div className='h-[56px] w-[56px] rounded-full bg-[#34393E] flex items-center justify-center'>
                        <Image
                            src={"/assets/icons/twitter.svg"}
                            width={20}
                            height={20}
                            alt='twitter'
                        />

                    </div>
                    <Image
                        src={"/assets/icons/linkedin.svg"}
                        width={56}
                        height={56}
                        alt='twitter'
                    />


                </li>

            </ul>
        </div>

    )
}

export default Social